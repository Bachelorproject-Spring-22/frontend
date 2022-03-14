import React, { Component } from 'react';

function resultHoc(WrappedComponent) {
    class ResultsHoc extends Component {
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
    
    return ResultsHoc;
}

export default resultHoc;