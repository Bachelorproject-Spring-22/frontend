import React, { Component } from 'react';

function settingHoc(WrappedComponent) {
    class SettingHOC extends Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null,
                email: false
            }
        }

        togglePop = (position) => {
            console.log(position);
            this.setState({
                [position]: !this.state[position]
            })
        }

        render() { 
            return (
                <WrappedComponent error={this.state.error} email={this.state.email} togglePop={this.togglePop} {...this.props} />
            );
        }
    }
    
    return SettingHOC;
}

export default settingHoc;