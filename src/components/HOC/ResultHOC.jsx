import React, { Component } from 'react';
import { fetchCourse, fetchHome, fetchQuiz } from '../../api/apiCalls';

function resultHoc(WrappedComponent) {
    class ResultsHoc extends Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null,
                fetchHomeData: null,
                fetchCourseTableData: null,
                fetchCourseData: null,
                fetchQuizData: null,
                loading: true
            }
        }

        fetchHome = async() => {
            const res = await fetchHome();
            if(res.error) {
                this.setState({
                    error: res.error,
                    loading: false
                })
            } else {
                this.setState({
                    fetchHomeData: res.data.studyProgrammeData,
                    loading: false
                });
            }
        }

        fetchCourseTable = async (courseId) => {
            const res = await fetchCourse(courseId);
            //console.log(res.data);
            if (res.error) {
                this.setState({
                    error: res.error,
                    loading: false
                });
            } else {
                this.setState({
                    loading: false,
                    fetchCourseTableData: res.data.studyProgrammeData,
                    fetchCourseData: res.data.getUserSpecific
                })
            }
        }

        fetchQuiz = async (courseId, quizId) => {
            const res = await fetchQuiz(courseId, quizId);
            console.log(res);
            if (res.error) {
                this.setState({
                    error: res.error,
                    loading: false
                });
            } else {
                this.setState({
                    loading: false,
                    fetchQuizData: res.data.getUserSpecific[0]
                });
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
                {...this.props} />
            );
        }
    }
    
    return ResultsHoc;
}

export default resultHoc;