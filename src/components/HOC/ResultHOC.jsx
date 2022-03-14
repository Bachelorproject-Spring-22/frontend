import React, { Component } from 'react';
import { fetchHome } from '../../api/apiCalls';

function resultHoc(WrappedComponent) {
    class ResultsHoc extends Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null,
                fetchHome: null,
                loading: true
            }
        }

        fetchHome = async() => {
            const res = await fetchHome();
            console.log(res.data.checkStudyPeriod);
            if(res.error) {
                this.setState({
                    error: res.error,
                    loading: false
                })
            } else {
                this.setState({
                    fetchHome: res.data.checkStudyPeriod,
                    loading: false
                });
            }
        }

        render() { 
            return (
                <WrappedComponent loading={this.state.loading} fetchHomeData={this.state.fetchHome} fetchHome={this.fetchHome} error={this.state.error} {...this.props} />
            );
        }
    }
    
    return ResultsHoc;
}

export default resultHoc;