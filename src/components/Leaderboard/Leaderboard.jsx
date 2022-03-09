import React, { Component } from 'react';
import { Route, Routes } from "react-router-dom";
import MainLeaderboard from './MainLeaderboard/MainLeaderboard';

class Leaderboard extends Component {
    /* constructor(props) {
        super(props);
    } */
    
    render() { 
        return (
            <>
                <Routes>
                    <Route exact path='/' element={<MainLeaderboard />} />
                </Routes>
            </>
        );
    }
}

export default Leaderboard;