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
            if (sessionStorage.getItem('fetchCourseTableData') && sessionStorage.getItem('fetchCourseData')) {
                this.setState({
                    loading: false,
                    fetchCourseTableData: JSON.parse(sessionStorage.getItem('fetchCourseTableData')),
                    fetchCourseData: JSON.parse(sessionStorage.getItem('fetchCourseData'))
                })
            } else {
                const res = await fetchCourse(courseId);
                if (res.error) {
                    this.setState({
                        error: res.error,
                        loading: false
                    });
                } else {
                    sessionStorage.setItem('fetchCourseTableData', JSON.stringify(res.data.studyProgrammeData));
                    sessionStorage.setItem('fetchCourseData', JSON.stringify(res.data.getUserSpecific))
                    this.setState({
                        loading: false,
                        fetchCourseTableData: res.data.studyProgrammeData,
                        fetchCourseData: res.data.getUserSpecific
                    })
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
                    sessionStorage.setItem(quizId, JSON.stringify(res.data.getUserSpecific[0]));
                    this.setState({
                        loading: false,
                        fetchQuizData: res.data.getUserSpecific[0]
                    });
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