import './navbar.css';
import Icon from '../Icon/Icon';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(props) {
    const auth = props.auth;
    const [isDesktop, setDesktop] = useState(window.innerWidth > 769);
    const [role, setRole] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 769);
    }

    useEffect(() => {
        if (auth.user) {
            setRole(auth.user.role);
            setLoggedIn(true);
        } else {
            setRole(null);
            setLoggedIn(false);
        }
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    }, [auth.user]);

    return (
        <nav>
            {isDesktop ? (
                <div className='bottom-nav'>
                    {loggedIn ?
                        (<>
                            <div>
                                {role === 'student' ?
                                    (<NavLink to='/home' className='bn-a'>
                                        <div className='bn-tab'>
                                        <Icon iconId='home'/>
                                            <p>Home</p>
                                        </div>
                                    </NavLink>) : null}
                                <NavLink to="/leaderboard" className="bn-a">
                                    <div className='bn-tab'>
                                    <Icon iconId='leaderboard'/>
                                        <p>Leaderboard</p>
                                    </div>
                                </NavLink>

                                {role === 'superAdmin' || role === 'teacher' ?
                                    <NavLink to="/manage" className="bn-a">
                                        <div className='bn-tab'>
                                        <Icon iconId='build'/>
                                            <p>Manage</p>
                                        </div>
                                    </NavLink> : null}
                            </div>
                            <NavLink to="/settings" className="bn-a settings">
                                <div className='bn-tab'>
                                <Icon iconId='settings'/>
                                    <p>Settings</p>
                                </div>
                            </NavLink>
                        </>) :
                        (
                            <NavLink to="/" className="bn-a">
                                <div className='bn-tab'>
                                    <Icon iconId='home'/>
                                    <p>Home</p>
                                </div>
                            </NavLink>
                        )}
                </div>
            ) : (
                <>
                    <div className='bottom-nav'>
                        {loggedIn ? (
                            <>
                                {role === 'student' ?
                                    (<NavLink to="/home" className="bn-a">
                                        <div className='bn-tab'>
                                        <Icon iconId='home'/>
                                            <p>Home</p>
                                        </div>
                                    </NavLink>) : null}
                                <NavLink to="/leaderboard" className="bn-a">
                                    <div className='bn-tab'>
                                    <Icon iconId='leaderboard'/>
                                        <p>Leaderboard</p>
                                    </div>
                                </NavLink>
                                {role === 'superAdmin' || role === 'teacher' ? <NavLink to="/manage" className="bn-a">
                                    <div className='bn-tab'>
                                    <Icon iconId='build'/>
                                        <p>Manage</p>
                                    </div>
                                </NavLink> : null}
                                <NavLink to="/settings" className="bn-a">
                                    <div className='bn-tab'>
                                    <Icon iconId='settings'/>
                                        <p>Settings</p>
                                    </div>
                                </NavLink></>
                        ) : (
                            <NavLink to="/" className="bn-a">
                                <div className='bn-tab'>
                                <Icon iconId='home'/>
                                    <p>Home</p>
                                </div>
                            </NavLink>
                        )}
                    </div>
                </>
            )}
        </nav>
    );
}

export default NavBar;