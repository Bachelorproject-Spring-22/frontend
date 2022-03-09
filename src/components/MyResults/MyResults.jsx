import React, { Component } from 'react';
import Card from '../Card/Card';
import SEO from '../SEO/SEO';
import './my-results.css';

class MyResults extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <SEO title='My Results' />
                <h1>My Results</h1>
                
                <h2>Aggregated leaderboards</h2>
                <label htmlFor="leaderboard-type">Select a leaderboard:</label>

                <select className='custom-select' name="leaderboard-type" id="leaderboard-type"> {/* Denne trenger styles */}
                    <option value="semester">Semester leaderboard</option>
                    <option value="academic">Academic year leaderboard</option>
                    <option value="study">Studyprogram leaderboard</option>
                </select>
                
                <h2>Current semester</h2>
                
                <div className='my-results grid-container'>
                    <Card type='course' courseCode='IDG1200' fullCourseName='Cloud Technologies' placementRank={3}/>
                    <Card type='course' courseCode='IDG1200' fullCourseName='Information Structures and Database Systems' placementRank={3}/>
                    <Card type='course' courseCode='IDG1200' fullCourseName='Full-stack development' placementRank={3}/>
                    <Card type='course' courseCode='IDG1200' fullCourseName='Service Design ' placementRank={3}/>
                </div>
                
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