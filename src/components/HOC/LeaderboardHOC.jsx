import React, { Component } from 'react';
import { getLeaderboard } from '../../api/apiCalls';
import PopUp from '../PopUp/PopUp';
import UploadQuiz from '../PopUp/UploadQuiz/UploadQuiz';

function leaderboardHoc(WrappedComponent) {
    class LeaderboardHOC extends Component {
        _isMounted = false;
        constructor(props) {
            super(props);
            this.state = {
                error: null,
                uploadPop: false,
                courses: [],
                semesterLeaderBoard: [],
                isLoading: true,
                clicked: ''
            }
        }

        async componentDidMount() {
            this._isMounted = true;
            await this.fetchLeaderboard();
        }

        fetchLeaderboard = async () => {
            const res = await getLeaderboard();

            if (res.error) {
                console.log(res.error);
            } else {
                const courses = res.data.data.courses;
                const semesterLeaderBoard = res.data.data.semesterLeaderBoard;
                this._isMounted && this.setState({
                    courses,
                    semesterLeaderBoard,
                    isLoading: false
                })
            }
        }

        togglePop = (position) => {
            console.log(position);
            this.setState({
                [position]: !this.state[position]
            })
        }

        getId = (id) => {
            console.log(id);
            this.setState({
                clicked: id
            })
        }

        uploadQuiz = (data) => {
            console.log(data);
        }

        componentWillUnmount() {
            this._isMounted = false;
        }

        render() {
            return (
                <>
                    <WrappedComponent id={this.state.clicked} getId={this.getId} loading={this.state.isLoading} courses={this.state.courses} semesterLeaderBoard={this.state.semesterLeaderBoard} handleOpen={this.togglePop} error={this.state.error} {...this.props} />
                    {this.state.uploadPop && <PopUp handleClose={this.togglePop} type='uploadPop' content={<UploadQuiz onSubmit={this.uploadQuiz} handleClose={this.togglePop} />} />}
                </>
            );
        }
    }

    return LeaderboardHOC;
}

export default leaderboardHoc;