import React, { Component } from 'react';

function leaderboardHoc(WrappedComponent) {
    class LeaderboardHOC extends Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null
            }
        }
        
        render() { 
            return (
                <WrappedComponent error={this.state.error} {...this.props} />
            );
        }
    }
    
    return LeaderboardHOC;
}

export default leaderboardHoc;