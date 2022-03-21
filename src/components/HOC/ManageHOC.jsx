import React, { Component } from 'react';
import AuthContext from '../../helpers/AuthContext';
import PopUp from '../PopUp/PopUp';
import UploadQuiz from '../PopUp/UploadQuiz/UploadQuiz';
import { uploadQuiz } from '../../api/apiCalls';

function managePageBackend(WrappedComponent) {
    class ManageHOC extends Component {
        static contextType = AuthContext;
        constructor(props) {
            super(props);
            this.state = {
                error: null,
                uploadPop: false,
                addStudent: false,
                addTeacher: false
            }
        }

        togglePop = (position) => {
            this.setState({
                [position]: !this.state[position]
            })
        }

        uploadQuiz = async (data) => {
            await uploadQuiz(data);
            // ADD ERROR HANDLING AND SUCCESS HANDLING
            //console.log(res);
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
                </>
            );
        }
    }

    return ManageHOC;
}

export default managePageBackend;