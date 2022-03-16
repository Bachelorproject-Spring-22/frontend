import React, { Component } from 'react';
import { getCourseBoard, getLeaderboard } from '../../api/apiCalls';
import PopUp from '../PopUp/PopUp';
import UploadQuiz from '../PopUp/UploadQuiz/UploadQuiz';

function leaderboardHoc(WrappedComponent) {
    class LeaderboardHOC extends Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null,
                uploadPop: false,
                courses: [],
                semesterLeaderBoard: null,
                isLoading: true,
                courseData: null
            }
        }

        fetchLeaderboard = async () => {
            const res = await getLeaderboard();

            console.log(res.data);

            if (res.error) {
                console.log(res.error);
            } else {
                const courses = res.data.getUserSpecific;
                const semesterLeaderBoard = res.data.studyProgrammeData;

                this.setState({
                    courses,
                    semesterLeaderBoard,
                    isLoading: false
                })
            }
        }

        fetchCourseBoard = async (params) => {
            const res = await getCourseBoard(params);
            console.log(res.data);
            if(res.error) {
                console.log(res.error);
            } else {
                this.setState({
                    courseData: res.data.studyProgrammeData,
                    isLoading: false
                });
            }
        }

        togglePop = (position) => {
            console.log(position);
            this.setState({
                [position]: !this.state[position]
            })
        }

        uploadQuiz = (data) => {
            console.log(data);
        }

        render() {
            return (
                <>
                    <WrappedComponent 
                        fetchLeaderboard={this.fetchLeaderboard} 
                        courseData={this.state.courseData} 
                        fetchCourse={this.fetchCourseBoard} 
                        loading={this.state.isLoading} 
                        courses={this.state.courses} 
                        semesterLeaderBoard={this.state.semesterLeaderBoard} 
                        handleOpen={this.togglePop} 
                        error={this.state.error} 
                        {...this.props} />
                    {this.state.uploadPop && <PopUp handleClose={this.togglePop} type='uploadPop' content={<UploadQuiz onSubmit={this.uploadQuiz} handleClose={this.togglePop} />} />}
                </>
            );
        }
    }

    return LeaderboardHOC;
}

export default leaderboardHoc;