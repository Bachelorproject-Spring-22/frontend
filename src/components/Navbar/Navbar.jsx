import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import './navbar.css';

const NavBar = props => {
    const history = useNavigate();
    const [activeTabs, setActiveTabs] = useState(props.name);

    useEffect(() => {
        switch (activeTabs) {
            case 'home':
                history('/results');
                break;
            case 'leaderboard':
                history('/leaderboard');
                break;
            case 'manage':
                history('/manage');
                break;
            case 'settings':
                history('/settings');
                break;
            default:
                history('/');
                break;
        }
    }, [activeTabs, history]);

    return (
        <div className='bottom-nav'>
            <div className='bn-tab'>
                {activeTabs === 'home' ?
                    <HomeRoundedIcon
                        fontSize='25px'
                        onClick={() => setActiveTabs('home')}
                    /> :
                    <HomeRoundedIcon
                        fontSize='25px'
                        onClick={() => setActiveTabs('home')}
                    />}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'leaderboard' ?
                    <LeaderboardRoundedIcon
                        fontSize='25px'
                        onClick={() => setActiveTabs('leaderboard')}
                    /> :
                    <LeaderboardRoundedIcon
                        fontSize='25px'
                        onClick={() => setActiveTabs('leaderboard')}
                    />}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'manage' ?
                    <BuildRoundedIcon
                        fontSize='25px'
                        onClick={() => setActiveTabs('manage')}
                    /> :
                    <BuildRoundedIcon
                        fontSize='25px'
                        onClick={() => setActiveTabs('manage')}
                    />}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'account' ?
                    <SettingsIcon
                        fontSize='25px'
                        onClick={() => setActiveTabs('settings')}
                    /> :
                    <SettingsIcon
                        fontSize='25px'
                        onClick={() => setActiveTabs('settings')}
                    />}
            </div>
        </div>
    )
}

export default NavBar;