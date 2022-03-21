import React, { Component } from 'react';
import ChooseTimeFrame from '../PopUp/ChooseTimeFrame/ChooseTimeFrame';
import PopUp from '../PopUp/PopUp';
import UploadQuiz from '../PopUp/UploadQuiz/UploadQuiz';
import { getCourseBoard, getLeaderboard, getSnapshot, uploadQuiz } from '../../api/apiCalls';

function leaderboardHoc(WrappedComponent) {
    class LeaderboardHOC extends Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null,
                uploadPop: false,
                timeFramePop: false,
                courses: [],
                semesterLeaderBoard: [],
                isLoading: true,
                courseData: [],
                courseId: '',
                courseInformation: [],
                timeSlot: null
            }
        }

        fetchLeaderboard = async () => {
            if (sessionStorage.getItem('courses') && sessionStorage.getItem('semesterLeaderBoard')) {
                this.setState({
                    isLoading: false,
                    courses: JSON.parse(sessionStorage.getItem('courses')),
                    semesterLeaderBoard: JSON.parse(sessionStorage.getItem('semesterLeaderBoard'))
                })
            } else {
                const res = await getLeaderboard();

                if (res.error) {
                    this.setState({
                        error: res.error,
                        isLoading: true
                    });
                } else {
                    const courses = res.data.getUserSpecific;
                    const semesterLeaderBoard = res.data.studyProgrammeData;
                    sessionStorage.setItem('courses', JSON.stringify(courses));
                    sessionStorage.setItem('semesterLeaderBoard', JSON.stringify(semesterLeaderBoard));

                    this.setState({
                        courses,
                        semesterLeaderBoard,
                        isLoading: false
                    })
                }
            }
        }

        fetchCourseBoard = async (params) => {
            const courseInformation = `leaderboard-${params}`;
            const courseData = `leaderboard-data-${params}`;

            if (sessionStorage.getItem(courseInformation) && sessionStorage.getItem(courseData)) {
                this.setState({
                    courseInformation: JSON.parse(sessionStorage.getItem(courseInformation)),
                    courseData: JSON.parse(sessionStorage.getItem(courseData)),
                    isLoading: false,
                    timeSlot: null
                });
            } else {
                const res = await getCourseBoard(params);
                if (res.error) {
                    this.setState({
                        error: res.error,
                        isLoading: false
                    });
                } else {
                    sessionStorage.setItem(courseInformation, JSON.stringify(res.data.courseAndTotalAmountOfQuizzes));
                    sessionStorage.setItem(courseData, JSON.stringify(res.data.studyProgrammeData));
                    this.setState({
                        courseInformation: res.data.courseAndTotalAmountOfQuizzes,
                        courseData: res.data.studyProgrammeData,
                        isLoading: false,
                        timeSlot: null
                    });
                }
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
            if (res.error) {
                this.setState({
                    error: res.error,
                    isLoading: false
                })
            } else {
                this.setState({
                    isLoading: false,
                    uploadPop: false
                });
            }
        }

        chooseTimeFrame = async (data, courseId) => {
            this.setState({
                isLoading: true,
                timeSlot: data
            });
            const res = await getSnapshot(courseId, data);
            if (res.error) {
                this.setState({
                    error: res.error,
                    isLoading: false
                })
            } else {
                this.setState({
                    courseInformation: res.data.courseAndTotalAmountOfQuizzes,
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
                        courseInformation={this.state.courseInformation}
                        fetchCourse={this.fetchCourseBoard}
                        loading={this.state.isLoading}
                        courses={this.state.courses}
                        semesterLeaderBoard={this.state.semesterLeaderBoard}
                        handleOpen={this.togglePop}
                        error={this.state.error}
                        timeSlot={this.state.timeSlot}
                        {...this.props}
                    />

                    {this.state.uploadPop &&
                        <PopUp
                            handleClose={this.togglePop}
                            type='uploadPop'
                            content={
                                <UploadQuiz
                                    courseId={this.state.courseId}
                                    uploadQuiz={this.uploadQuiz}
                                    handleClose={this.togglePop}
                                />}
                        />}

                    {this.state.timeFramePop &&
                        <PopUp
                            handleClose={this.togglePop}
                            type='timeFramePop'
                            content={
                                <ChooseTimeFrame
                                    timeSlot={this.state.timeSlot}
                                    chooseTimeFrame={this.chooseTimeFrame}
                                    courseId={this.state.courseId}
                                    onSubmit={this.chooseTimeFrame}
                                    handleClose={this.togglePop}
                                />}
                        />}
                </>
            );
        }
    }

    return LeaderboardHOC;
}

export default leaderboardHoc;