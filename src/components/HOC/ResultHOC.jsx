import React, { Component } from 'react';
import { fetchCourse, fetchHome, fetchQuiz } from '../../api/apiCalls';

function resultHoc(WrappedComponent) {
    class ResultsHoc extends Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null,
                fetchHomeData: [],
                fetchCourseTableData: [],
                fetchCourseData: [],
                fetchQuizData: [],
                loading: true
            }
        }

        fetchHome = async () => {
            if (sessionStorage.getItem('fetchHomeData')) {
                this.setState({
                    loading: false,
                    fetchHomeData: JSON.parse(sessionStorage.getItem('fetchHomeData'))
                })
            } else {
                const res = await fetchHome();
                if (res.error) {
                    this.setState({
                        error: res.error,
                        loading: false
                    })
                } else {
                    sessionStorage.setItem('fetchHomeData', JSON.stringify(res.data.studyProgrammeData));
                    this.setState({
                        fetchHomeData: res.data.studyProgrammeData,
                        loading: false
                    });
                }
            }

        }

        fetchCourseTable = async (courseId) => {
            const courseData = `${courseId}-Data`;
            if (sessionStorage.getItem(courseId) && sessionStorage.getItem(courseData)) {
                this.setState({
                    loading: false,
                    fetchCourseTableData: JSON.parse(sessionStorage.getItem(courseId)),
                    fetchCourseData: JSON.parse(sessionStorage.getItem(courseData))
                })
            } else {
                const res = await fetchCourse(courseId);
                if (res.error) {
                    this.setState({
                        error: res.error,
                        loading: false
                    });
                } else {
                    if (res.data.studyProgrammeData.length !== 0 && res.data.getUserSpecific.length !== 0) {
                        sessionStorage.setItem(courseId, JSON.stringify(res.data.studyProgrammeData));
                        sessionStorage.setItem(courseData, JSON.stringify(res.data.getUserSpecific))
                        this.setState({
                            loading: false,
                            fetchCourseTableData: res.data.studyProgrammeData,
                            fetchCourseData: res.data.getUserSpecific
                        })
                    } else {
                        this.setState({
                            loading: false
                        })
                    }

                }
            }

        }

        fetchQuiz = async (courseId, quizId) => {
            if (sessionStorage.getItem(quizId)) {
                this.setState({
                    loading: false,
                    fetchQuizData: JSON.parse(sessionStorage.getItem(quizId))
                });
            } else {
                const res = await fetchQuiz(courseId, quizId);
                if (res.error) {
                    this.setState({
                        error: res.error,
                        loading: false
                    });
                } else {
                    if (res.data.getUserSpecific.length !== 0) {
                        sessionStorage.setItem(quizId, JSON.stringify(res.data.getUserSpecific[0]));
                        this.setState({
                            loading: false,
                            fetchQuizData: res.data.getUserSpecific[0]
                        });
                    } else {
                        this.setState({
                            loading: false
                        })
                    }
                }
            }
        }

        render() {
            return (
                <WrappedComponent
                    loading={this.state.loading}
                    fetchCourseTable={this.fetchCourseTable}
                    fetchCourseTableData={this.state.fetchCourseTableData}
                    fetchCourseData={this.state.fetchCourseData}
                    fetchHomeData={this.state.fetchHomeData}
                    fetchHome={this.fetchHome}
                    fetchQuizData={this.state.fetchQuizData}
                    fetchQuiz={this.fetchQuiz}
                    error={this.state.error}
                    {...this.props}
                />
            );
        }
    }

    return ResultsHoc;
}

export default resultHoc;