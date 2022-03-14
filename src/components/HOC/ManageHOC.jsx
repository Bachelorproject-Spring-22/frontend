import React, { Component } from 'react';
import AuthContext from '../../helpers/AuthContext';
import PopUp from '../PopUp/PopUp';

function managePageBackend(WrappedComponent) {
    class ManageHOC extends Component {
        static contextType = AuthContext;
        constructor(props) {
            super(props);
            this.state = {
                error: null,
                uploadPop: null,
                addStudent: null,
                addTeacher: null
            }
        }

        render() {
            console.log(this.context);
            return (
                <>
                    <WrappedComponent {...this.props} />
                    {this.state.uploadPop && <PopUp content={<p>Upload</p>} />}
                    {this.state.addStudent && <PopUp content={<p>Student</p>} />}
                    {this.state.addTeacher && <PopUp content={<p>Teacher</p>} />}
                </>
            );
        }
    }

    return ManageHOC;
}

export default managePageBackend;