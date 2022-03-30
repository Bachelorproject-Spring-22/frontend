import React, { Component } from 'react';
import AuthContext from '../../helpers/AuthContext';
import PopUp from '../PopUp/PopUp';
import UploadQuiz from '../PopUp/UploadQuiz/UploadQuiz';
import { deleteQuiz, getCourseAndSemester, getCoursesManage, getSpecificCourse, getStudyplans, pickStudyplan, uploadQuiz } from '../../api/apiCalls';
import Confirm from '../PopUp/Confirm/Confirm';
import Alert from '../PopUp/Alert/Alert';

function managePageBackend(WrappedComponent) {
    class ManageHOC extends Component {
        static contextType = AuthContext;
        _isMounted = false;
        constructor(props) {
            super(props);
            this.state = {
                error: null,
                uploadPop: false,
                addStudent: false,
                addTeacher: false,
                deleteQuiz: false,
                confirm: false,
                courses: [],
                semesters: [],
                coursesManage: [],
                specificCourse: [],
                specificCourseInformation: {},
                selectedQuiz: '',
                wording: '',
                studyPlanCodes: [],
                isLoading: true
            }
        }

        componentDidMount() {
            this._isMounted = true;
        }

        togglePop = (position, quizId) => {
            this._isMounted && this.setState({
                [position]: !this.state[position],
                selectedQuiz: quizId
            })
        }

        uploadQuiz = async (data) => {
            try {
                const res = await uploadQuiz(data);
                if (res.status === 201) {
                    this._isMounted && this.setState({
                        isLoading: false,
                        uploadPop: false,
                        confirm: true,
                        wording: 'uploaded'
                    });
                }
            } catch (error) {
                this._isMounted && this.setState({
                    error: error.response.data.error.message,
                    isLoading: false
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
                    this._isMounted && this.setState({
                        courses,
                        semesters,
                        isLoading: false
                    });
                }
            } catch (error) {
                this._isMounted && this.setState({
                    error: error.response.data.error.message,
                    isLoading: false
                });
            }
        }

        getCoursesManage = async () => {
            try {
                const res = await getCoursesManage();

                if (res.status === 201) {
                    this._isMounted && this.setState({
                        isLoading: false,
                        coursesManage: res.data.courseIds
                    });
                }
            } catch (error) {
                this._isMounted && this.setState({
                    error: error.response.data.error.message,
                    isLoading: false
                });
            }
        }

        getSpecificCourse = async (courseId) => {
            try {
                const res = await getSpecificCourse(courseId);
                if (res.status === 201) {
                    this._isMounted && this.setState({
                        isLoading: false,
                        specificCourse: res.data.quizzes,
                        specificCourseInformation: res.data.courses[0]
                    })
                }
            } catch (error) {
                this._isMounted && this.setState({
                    error: error.response.data.error.message,
                    isLoading: false
                });
            }
        }

        deleteQuiz = async () => {
            const quizId = this.state.selectedQuiz;
            const courseId = this.state.specificCourseInformation.courseId;
            try {
                const res = await deleteQuiz(courseId, quizId);
                if (res.status === 201) {
                    this._isMounted && this.setState({
                        isLoading: false,
                        deleteQuiz: false,
                        confirm: true,
                        wording: 'deleted'
                    })
                }
            } catch (error) {
                this._isMounted && this.setState({
                    error: error.response.data.error.message,
                    isLoading: false
                });
            }
        }

        getStudyplan = async () => {
            try {
                const res = await getStudyplans();
                if(res.status === 201) {
                    this._isMounted && this.setState({
                        isLoading: false,
                        studyPlanCodes: res.data.studyProgrammeCodes
                    });
                }
            } catch (error) {
                this._isMounted && this.setState({
                    error: error.response.data.error.message,
                    isLoading: false
                });
            }
        }

        pickStudyplan = async (data) => {
            console.log(data);
            try {
                const res = await pickStudyplan(data);
                console.log(res);
            } catch (error) {
                this._isMounted && this.setState({
                    error: error.response.data.error.message,
                    isLoading: false
                });
            }
        }

        componentWillUnmount() {
            this._isMounted = false;
        }

        render() {
            return (
                <>
                    <WrappedComponent
                        error={this.state.error}
                        isLoading={this.state.isLoading}
                        handleOpen={this.togglePop}
                        getCoursesManage={this.getCoursesManage}
                        coursesManage={this.state.coursesManage}
                        getSpecificCourse={this.getSpecificCourse}
                        specificCourse={this.state.specificCourse}
                        specificCourseInformation={this.state.specificCourseInformation}
                        getStudyplan={this.getStudyplan}
                        studyPlanCodes={this.state.studyPlanCodes}
                        pickStudyplan={this.pickStudyplan}
                        {...this.props}
                    />

                    {this.state.uploadPop &&
                        <PopUp
                            type='uploadPop'
                            content={
                                <UploadQuiz
                                    uploadQuiz={this.uploadQuiz}
                                    modalTitle={'Upload new quiz results'}
                                    bodyText={'Upload an Excel sheet from Kahoot to upload the results.'}
                                    handleClose={this.togglePop}
                                    getCourseAndSemester={this.getCourseAndSemester}
                                    courses={this.state.courses}
                                    semesters={this.state.semesters}
                                    isLoading={this.state.isLoading}
                                    error={this.state.error}
                                />}
                            handleClose={this.togglePop}
                        />}

                    {this.state.addStudent &&
                        <PopUp
                            type='addStudent'
                            content={<p>Coming soon</p>}
                            handleClose={this.togglePop}
                        />}

                    {this.state.addTeacher && this.context.user.role === 'superAdmin' &&
                        <PopUp
                            type='addTeacher'
                            content={<p>Coming soon</p>}
                            handleClose={this.togglePop}
                        />}

                    {this.state.confirm &&
                        <PopUp
                            handleClose={this.togglePop}
                            type='confirm'
                            content={
                                <Alert
                                    handleClose={this.togglePop}
                                    modalTitle='Success!'
                                    bodyText={`Your quiz was successfully ${this.state.wording}!`}
                                    type='confirm'
                                />
                            }
                        />
                    }

                    {this.state.deleteQuiz &&
                        <PopUp 
                            handleClose={this.togglePop}
                            type='deleteQuiz'
                            content={
                                <Confirm 
                                    handleClose={this.togglePop}
                                    handleSubmit={this.deleteQuiz}
                                    type='deleteQuiz'
                                    modalTitle='Delete'
                                    bodyText={`Are you sure you want to delete the quiz ${this.state.selectedQuiz} ?`}
                                />
                            }
                        />
                    }
                </>
            );
        }
    }

    return ManageHOC;
}

export default managePageBackend;