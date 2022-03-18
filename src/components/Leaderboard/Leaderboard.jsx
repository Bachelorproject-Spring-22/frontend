import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import MainLeaderboard from './MainLeaderboard/MainLeaderboard';
import './leaderboard.css';
import IndividualLeaderboard from './IndividualLeaderboard/IndividualLeaderboard';
import { useParams } from 'react-router-dom';


function Leaderboard(props) {
    const params = useParams();
    const location = params['*'];
    const url = location.split('/');
    console.log(url);
    
    return (
        <>
            <nav>
                <Routes>
                    <Route exact path='/' element={null} />
                    <Route exact path={`/${url[0]}`} element={<><Link to='/leaderboard' className='breadcrumbItem'>Leaderboard</Link> &#8250;<Link to={`/leaderboard/${url[0]}`} className='breadcrumbItem' >{url[0]}</Link></>} />
                </Routes>
            </nav>

            <Routes>
                <Route exact path='/' element={<MainLeaderboard {...props} />} />
                <Route exact path={`/${url[0]}`} element={<IndividualLeaderboard location={url[0]} {...props} />} />
            </Routes>
        </>
    );

}

export default Leaderboard;