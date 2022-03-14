import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import MainLeaderboard from './MainLeaderboard/MainLeaderboard';
import './leaderboard.css';
import IndividualLeaderboard from './IndividualLeaderboard/IndividualLeaderboard';
import { useParams } from 'react-router-dom';


function Leaderboard(props) {
    const params = useParams();
    const location = params['*']
    
    return (
        <>
            <nav>
                <Link to="/" className='breadcrumbItem'>Home</Link>
                &#8250;
                <Link to="/leaderboard" className='breadcrumbItem' >Leaderboard</Link>
                <Routes>
                    <Route exact path={location} element={<>&#8250; <Link to={`/leaderboard/${location}`} className='breadcrumbItem' >{location}</Link></>} />
                </Routes>
            </nav>

            <Routes>
                <Route exact path='/' element={<MainLeaderboard {...props} />} />
                <Route exact path={location} element={<IndividualLeaderboard location={location} {...props} />} />
            </Routes>
        </>
    );

}

export default Leaderboard;