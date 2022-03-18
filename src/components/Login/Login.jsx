import React, { Component } from 'react';
import AuthContext from '../../helpers/AuthContext';
import { Link } from 'react-router-dom';
import './login.css';
import Button from '../Button/Button';
import SEO from '../SEO/SEO';
import Icon from '../Icon/Icon';

class Login extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            showPassword: false,
            redirect: false,
            error: null
        };
    }
    
    removeError = () => {
        if(this.state.error) {
            this.setState({
                error: null,
                username: '',
                password: ''
            })
        }
        
    }

    handleInputChange = e => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleShowPassword = () => {
        this.setState(prevState => ({
            showPassword: !prevState.showPassword
        }));
    }

    handleMouseDownPassword = (e) => {
        e.preventDefault();
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        if (this.validation) {
            const { username, password } = this.state;
            const res = await this.context.loginUser({ username, password });
            
            if(res.error) {
                this.setState({
                    error: res.error,
                })
            }
        }
    }

    validation = () => {
        return this.form.current.reportValidity();
    }

    render() {
        return <>
            <SEO title="Log in" />
            <h1>uniLeague</h1>
            <p className='subtitle login'>LOG IN</p>
            <p className='login'>If you have been invited to uniLeague, you can enter your provided username and password below.</p>
            <p className='login'>Be sure to read our <Link to='/about/privacy'>Privacy Policy</Link> and <Link to='/about/terms'>Terms of Service</Link> before logging in.</p>
            <fieldset>
            <legend>Log in</legend>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                        onChange={this.handleInputChange}
                        required
                        type="text"
                        name="username"
                        id="username"
                        placeholder='Enter Username'
                        value={this.state.username}
                        className={this.state.error ? 'error' : ''}
                        onClick={this.removeError}
                    />

                    <label htmlFor="password">Password</label>
                    <div>
                        <input
                            onChange={this.handleInputChange}
                            required
                            type={this.state.showPassword ? 'text' : 'password'}
                            name="password"
                            id="password"
                            placeholder='Enter Password'
                            value={this.state.password}
                            className={this.state.error ? 'error' : ''}
                            onClick={this.removeError}
                        />

                        <span className='show-password'>
                            {this.state.showPassword ?
                                <span onClick={this.handleShowPassword} onMouseDown={this.handleMouseDownPassword}><Icon iconId={'visibility'} /></span> :
                                <span onClick={this.handleShowPassword} onMouseDown={this.handleMouseDownPassword}><Icon iconId={'visibility_off'} /></span>}
                        </span>
                        {this.state.error ? <p className='danger'>{this.state.error}</p> : null}
                    </div>

                    <Button label='Log In' type='submit' icon={<Icon iconId={'login'} />} />
                </form>
            </fieldset>
        </>;
    }
}

export default Login;