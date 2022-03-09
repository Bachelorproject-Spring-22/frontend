import React, { Component } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import MainLeaderboard from './MainLeaderboard/MainLeaderboard';
import './leaderboard.css';

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
                    <Route exact path='/:id' element={<>&#8250; <Link to="/leaderboard/:id" className='breadcrumbItem' >ID</Link></>} />
                </Routes>
            </nav>

                <Routes>
                    <Route exact path='/' element={<MainLeaderboard />} />
                    <Route exact path='/:id' element={<p>Hehe</p>} />
                </Routes>
            </>
        );
    }
}

export default Leaderboard;