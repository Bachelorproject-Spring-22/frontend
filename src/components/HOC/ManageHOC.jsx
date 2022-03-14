import React, { Component } from 'react';
import AuthContext from '../../helpers/AuthContext';
import PopUp from '../PopUp/PopUp';
import Upload from '../TestComponent/Upload';

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
            console.log(position);
            this.setState({
                [position]: !this.state[position]
            })
        }

        render() {
            //Husk å endre komponentene i popup
            return (
                <>
                    <WrappedComponent handleOpen={this.togglePop} {...this.props} />
                    {this.state.uploadPop && <PopUp type='uploadPop' content={<p>Upload</p>} handleClose={this.togglePop} />}
                    {this.state.addStudent && <PopUp type='addStudent' content={<p>Student</p>} handleClose={this.togglePop} />}
                    {this.state.addTeacher && this.context.user.role === 'superAdmin' && <PopUp type='addTeacher' content={<Upload />} handleClose={this.togglePop} />}
                </>
            );
        }
    }

    return ManageHOC;
}

export default managePageBackend;