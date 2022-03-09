import React, { Component } from 'react';
import AuthContext from '../../helpers/AuthContext';
import { Link } from 'react-router-dom';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import './login.css';
import Button from '../Button/Button';
import SEO from '../SEO/SEO';

class Login extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            showPassword: false,
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
            console.log(res);
        }
    }

    validation = () => {
        return this.form.current.reportValidity();
    }

    render() {
        return (
            <>
                <SEO title="Log in" />
                <h1>The Kahoot! League</h1>
                <p className='subtitle login'>LOG IN</p>
                <p className='login'>If you have been invited to The Kahoot! League, you can enter your provided username and password below.</p>
                <p className='login'>Be sure to read our <Link to='/about/privacy'>Privacy Policy</Link> and <Link to='/about/terms'>Terms of Service</Link> before logging in.</p>
                <fieldset>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="username">Username</label>
                        <input
                            onChange={this.handleInputChange}
                            required
                            type="text"
                            name="username"
                            placeholder='Enter Username'
                            value={this.state.username}
                        />

                        <label htmlFor="password">Password</label>
                        <div>
                            <input
                                onChange={this.handleInputChange}
                                required
                                type={this.state.showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder='Enter Password'
                                value={this.state.password}
                            />

                            <span className='showPassword'>
                                {this.state.showPassword ? <VisibilityOffRoundedIcon onClick={this.handleShowPassword} onMouseDown={this.handleMouseDownPassword} /> : <VisibilityRoundedIcon onClick={this.handleShowPassword} onMouseDown={this.handleMouseDownPassword} />}
                            </span>
                        </div>

                        <Button label='Log In' icon={<LoginRoundedIcon />} type='submit' />
                    </form>
                </fieldset>
            </>
        );
    }
}

export default Login;