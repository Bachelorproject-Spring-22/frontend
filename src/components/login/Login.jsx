import React, { Component } from 'react';
import AuthContext from '../../helpers/AuthContext';
//import { getter } from '../../api/apiCalls';

class Login extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: false
        };
    }

    handleInputChange = e => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        if (this.validation) {
            const { username, password } = this.state;
            const res = await this.context.loginUser({ username, password });
            //const res = await getter();
            console.log(res);
        }
    }

    validation = () => {
        return this.form.current.reportValidity();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    onChange={this.handleInputChange} 
                    required 
                    type="text" 
                    name="username" 
                    placeholder='Enter Username'
                    value={this.state.username} 
                />
                <input 
                    onChange={this.handleInputChange} 
                    required 
                    type="password" 
                    name="password" 
                    placeholder='Enter Password'
                    value={this.state.password} 
                />
                <input 
                    type="submit" 
                    value="Log in" 
                />
            </form>
        );
    }
}

export default Login;