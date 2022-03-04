import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import './navbar.css';

function NavBar(props) {
    const auth = props.auth;
    const [isDesktop, setDesktop] = useState(window.innerWidth > 769);
    const [role, setRole] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 769);
    }

    useEffect(() => {
        if(auth.user) {
            setRole(auth.user.role);
            setLoggedIn(true);
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
                                <NavLink to="/" className="bn-a">
                                    <div className='bn-tab'>
                                        <HomeRoundedIcon fontSize='medium' />
                                        <p>Home</p>
                                    </div>
                                </NavLink>
                                <NavLink to="/leaderboard" className="bn-a">
                                    <div className='bn-tab'>
                                        <LeaderboardRoundedIcon fontSize='medium' />
                                        <p>Leaderboard</p>
                                    </div>
                                </NavLink>

                                {role === 'superAdmin' || role === 'teacher' ?
                                    <NavLink to="/manage" className="bn-a">
                                        <div className='bn-tab'>
                                            <BuildRoundedIcon fontSize='medium' />
                                            <p>Manage</p>
                                        </div>
                                    </NavLink> : null}
                            </div>
                            <NavLink to="/settings" className="bn-a settings">
                                <div className='bn-tab'>
                                    <SettingsIcon fontSize='medium' />
                                    <p>Settings</p>
                                </div>
                            </NavLink>
                        </>) :
                        (
                            <NavLink to="/" className="bn-a">
                                <div className='bn-tab'>
                                    <HomeRoundedIcon fontSize='medium' />
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
                                <NavLink to="/" className="bn-a">
                                    <div className='bn-tab'>
                                        <HomeRoundedIcon fontSize='medium' />
                                        <p>Home</p>
                                    </div>
                                </NavLink>
                                <NavLink to="/leaderboard" className="bn-a">
                                    <div className='bn-tab'>
                                        <LeaderboardRoundedIcon fontSize='medium' />
                                        <p>Leaderboard</p>
                                    </div>
                                </NavLink>
                                {role === 'superAdmin' || role === 'teacher' ? <NavLink to="/manage" className="bn-a">
                                    <div className='bn-tab'>
                                        <BuildRoundedIcon fontSize='medium' />
                                        <p>Manage</p>
                                    </div>
                                </NavLink> : null}
                                <NavLink to="/settings" className="bn-a">
                                    <div className='bn-tab'>
                                        <SettingsIcon fontSize='medium' />
                                        <p>Settings</p>
                                    </div>
                                </NavLink></>
                        ) : (
                            <NavLink to="/" className="bn-a">
                                <div className='bn-tab'>
                                    <HomeRoundedIcon fontSize='medium' />
                                    <p>Home</p>
                                </div>
                            </NavLink>
                        )}
                    </div>
                </>
            )}
        </nav>
    )
}

export default NavBar;