import React, { Component } from 'react';
import ChooseTimeFrame from '../PopUp/ChooseTimeFrame/ChooseTimeFrame';
import PopUp from '../PopUp/PopUp';
import UploadQuiz from '../PopUp/UploadQuiz/UploadQuiz';
import { getCourseAndSemester, getCourseBoard, getLeaderboard, getSnapshot, uploadQuiz } from '../../api/apiCalls';
import Confirm from '../PopUp/Confirm/Confirm';

function leaderboardHoc(WrappedComponent) {
    class LeaderboardHOC extends Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null,
                uploadPop: false,
                timeFramePop: false,
                confirm: false,
                courses: [],
                semesterLeaderBoard: [],
                isLoading: true,
                courseData: [],
                courseId: '',
                courseInformation: [],
                timeSlot: null,
                coursesDropDown: [],
                semesters: []
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
                try {
                    const res = await getLeaderboard();

                    const courses = res.data.getUserSpecific;
                    const semesterLeaderBoard = res.data.studyProgrammeData;
                    sessionStorage.setItem('courses', JSON.stringify(courses));
                    sessionStorage.setItem('semesterLeaderBoard', JSON.stringify(semesterLeaderBoard));

                    this.setState({
                        courses,
                        semesterLeaderBoard,
                        isLoading: false
                    })
                } catch (error) {
                    this.setState({
                        error: error.response.error.message,
                        isLoading: true
                    });
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
                try {
                    const res = await getCourseBoard(params);

                    sessionStorage.setItem(courseInformation, JSON.stringify(res.data.courseAndTotalAmountOfQuizzes));
                    sessionStorage.setItem(courseData, JSON.stringify(res.data.studyProgrammeData));
                    this.setState({
                        courseInformation: res.data.courseAndTotalAmountOfQuizzes,
                        courseData: res.data.studyProgrammeData,
                        isLoading: false,
                        timeSlot: null
                    });
                } catch (error) {
                    this.setState({
                        error: error.response.error.message,
                        isLoading: true
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
            try {
                const res = await uploadQuiz(data);
                if (res.status === 201) {
                    this.setState({
                        isLoading: false,
                        uploadPop: false,
                        confirm: true
                    });
                }
            } catch (error) {
                this.setState({
                    error: error.response.data.error.message,
                    isLoading: false
                });
            }
        }

        chooseTimeFrame = async (data, courseId) => {
            this.setState({
                isLoading: true,
                timeSlot: data
            });

            try {
                const res = await getSnapshot(courseId, data);
                this.setState({
                    courseInformation: res.data.courseAndTotalAmountOfQuizzes,
                    courseData: res.data.studyProgrammeData,
                    isLoading: false,
                    timeFramePop: false
                });
            } catch (error) {
                this.setState({
                    error: error.response.error.message,
                    isLoading: true
                });
            }
        }

        getCourseAndSemester = async () => {
            try {
                const res = await getCourseAndSemester();
                const data = res.data.courseIds;

                if (data.length !== 0) {
                    let courses = [];
                    let semesters = [];
                    data.forEach(id => {
                        if (!courses.includes(id.courseId)) courses.push(id.courseId);
                    });
                    this.setState({
                        coursesDropDown: courses,
                        semesters,
                        isLoading: false
                    })
                }
            } catch (error) {
                this.setState({
                    error: error.response.data.error.message,
                    isLoading: false
                })
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
                                    getCourseAndSemester={this.getCourseAndSemester}
                                    courses={this.state.coursesDropDown}
                                    semesters={this.state.semesters}
                                    error={this.state.error}
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

                    {this.state.confirm &&
                        <PopUp
                            handleClose={this.togglePop}
                            type='confirm'
                            content={
                                <Confirm
                                    handleClose={this.togglePop}
                                    modalTitle='Success!'
                                    bodyText='Your quiz was successfully uploaded!'
                                />
                            }
                        />
                    }
                </>
            );
        }
    }

    return LeaderboardHOC;
}

export default leaderboardHoc;