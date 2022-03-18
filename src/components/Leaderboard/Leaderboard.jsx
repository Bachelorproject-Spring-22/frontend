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
    //console.log(url);
    
    return (
        <>
            <nav>
                <Link to="/" className='breadcrumb-item'>Home</Link>
                &#8250;
                <Link to="/leaderboard" className='breadcrumb-item' >Leaderboard</Link>
                <Routes>
                    <Route exact path={`/${url[0]}`} element={<>&#8250; <Link to={`/leaderboard/${url[0]}`} className='breadcrumb-item' >{url[0]}</Link></>} />
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