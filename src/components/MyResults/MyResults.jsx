import React, { Component } from 'react';
import './my-results.css';

class MyResults extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <h1>My Results</h1>
                
                <h2>Aggregated leaderboards</h2>
                <label htmlFor="leaderboard-type">Select a leaderboard:</label>

                <select className='custom-select' name="leaderboard-type" id="leaderboard-type"> {/* Denne trenger styles */}
                    <option value="semester">Semester leaderboard</option>
                    <option value="academic">Academic year leaderboard</option>
                    <option value="study">Studyprogram leaderboard</option>
                </select>
                
                <h2>Current semester</h2>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <h2>Previous semester</h2>
                <h3>Semestertekst</h3>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <h3>Semestertekst</h3>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
            </>
        );
    }
}

export default MyResults;