import React, { Component } from 'react';
import AuthContext from '../../helpers/AuthContext';
import PopUp from '../PopUp/PopUp';
import UploadQuiz from '../PopUp/UploadQuiz/UploadQuiz';
import { getCourseAndSemester, uploadQuiz } from '../../api/apiCalls';
import Confirm from '../PopUp/Confirm/Confirm';

function managePageBackend(WrappedComponent) {
    class ManageHOC extends Component {
        static contextType = AuthContext;
        constructor(props) {
            super(props);
            this.state = {
                error: null,
                uploadPop: false,
                addStudent: false,
                addTeacher: false,
                confirm: false,
                courses: [],
                semesters: []
            }
        }

        togglePop = (position) => {
            this.setState({
                [position]: !this.state[position]
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

        getCourseAndSemester = async () => {
            try {
                const res = await getCourseAndSemester();
                const data = res.data.courseIds;
                console.log(data);
                if (data.length !== 0) {
                    let courses = [];
                    let semesters = [];
                    data.forEach(id => {
                        const text = id.split('_');
                        const course = text[0];
                        const semester = text[1];
                        if (!courses.includes(course)) courses.push(course);
                        if (!semesters.includes(semester)) semesters.push(semester);
                    })
                    this.setState({
                        courses,
                        semesters,
                        isLoading: false
                    })
                }
            } catch (error) {
                console.log(error);
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
                        handleOpen={this.togglePop}
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

    return ManageHOC;
}

export default managePageBackend;