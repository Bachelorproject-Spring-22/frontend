import React, { Component } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import MainLeaderboard from './MainLeaderboard/MainLeaderboard';
import './leaderboard.css';
import IndividualLeaderboard from './IndividualLeaderboard/IndividualLeaderboard';

class Leaderboard extends Component {
    /* constructor(props) {
        super(props);
    } */
    
    render() { 
        return (
            <>
            <nav>
                <Link to="/" className='breadcrumbItem'>Home</Link>
                &#8250;
                <Link to="/leaderboard" className='breadcrumbItem' >Leaderboard</Link>
                <Routes>
                    <Route exact path='/idg2100' element={<>&#8250; <Link to="/leaderboard/idg2100" className='breadcrumbItem' >IDG2100</Link></>} />
                </Routes>
            </nav>

                <Routes>
                    <Route exact path='/' element={<MainLeaderboard />} />
                    <Route exact path='/idg2100' element={<IndividualLeaderboard />} />
                </Routes>
            </>
        );
    }
}

export default Leaderboard;