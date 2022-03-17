import React, { Component } from 'react';
import { getCourseBoard, getLeaderboard, getSnapshot, uploadQuiz } from '../../api/apiCalls';
import PopUp from '../PopUp/PopUp';
import UploadQuiz from '../PopUp/UploadQuiz/UploadQuiz';
import ChooseTimeFrame from '../PopUp/ChooseTimeFrame/ChooseTimeFrame';

function leaderboardHoc(WrappedComponent) {
    class LeaderboardHOC extends Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null,
                uploadPop: false,
                timeFramePop: false,
                courses: [],
                semesterLeaderBoard: null,
                isLoading: true,
                courseData: null,
                courseId: '',
                timeSlot: null
            }
        }

        fetchLeaderboard = async () => {
            const res = await getLeaderboard();

            if (res.error) {
                this.setState({
                    error: res.error,
                    isLoading: false
                });
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
            if(res.error) {
                this.setState({
                    error: res.error,
                    isLoading: false
                });
            } else {
                this.setState({
                    courseData: res.data.studyProgrammeData,
                    isLoading: false,
                    timeSlot: null
                });
            }
        }

        togglePop = (position, courseId) => {
            this.setState({
                [position]: !this.state[position],
                courseId: courseId
            })
        }

        uploadQuiz = async (data) => {
            const res = await uploadQuiz(data);
            if(res.error) {
                this.setState({
                    error: res.error,
                    isLoading: false
                })
            } else {
                console.log(res);
            }
        }

        chooseTimeFrame = async (data, courseId) => {
            this.setState({
                isLoading: true,
                timeSlot: data
            });
            const res = await getSnapshot(courseId, data);
            if(res.error) {
                this.setState({
                    error: res.error,
                    isLoading: false
                })
            } else {
                console.log(res);
                this.setState({
                    courseData: res.data.studyProgrammeData,
                    isLoading: false,
                    timeFramePop: false
                });
            }
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
                        timeSlot={this.state.timeSlot}
                        {...this.props} />
                    {this.state.uploadPop && <PopUp handleClose={this.togglePop} type='uploadPop' content={<UploadQuiz courseId={this.state.courseId} uploadQuiz={this.uploadQuiz} handleClose={this.togglePop} />} />}
                    {this.state.timeFramePop && <PopUp handleClose={this.togglePop} type='timeFramePop' content={<ChooseTimeFrame timeSlot={this.state.timeSlot} chooseTimeFrame={this.chooseTimeFrame} courseId={this.state.courseId} onSubmit={this.chooseTimeFrame} handleClose={this.togglePop} />} />}
                </>
            );
        }
    }

    return LeaderboardHOC;
}

export default leaderboardHoc;