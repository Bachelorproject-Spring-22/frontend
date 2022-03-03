import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import './navbar.css';

function NavBar(props) {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 500);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 500);
    }

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <nav>
            {isDesktop ? (
                <>
                    <div className='bottom-nav'>
                        <NavLink to="/home" className="bn-a">
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
                        {props.role === 'superAdmin' || props.role === 'teacher' ? <NavLink to="/manage" className="bn-a">
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
                        </NavLink>
                    </div>
                </>
            ) : (
                <>
                    <div className='bottom-nav'>
                        <NavLink to="/home" className="bn-a">
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
                        {props.role === 'superAdmin' || props.role === 'teacher' ? <NavLink to="/manage" className="bn-a">
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
                        </NavLink>
                    </div>
                </>
            )}

        </nav>

    )
}

export default NavBar;