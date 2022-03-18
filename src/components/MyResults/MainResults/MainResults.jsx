import React, { useEffect } from 'react';
import Card from "../../Card/Card";
import SEO from "../../SEO/SEO";

function MainResults(props) {
    const fetchHome = props.fetchHome;
    const fetchHomeData = props.fetchHomeData;
    const loading = props.loading;

    useEffect(() => {
        fetchHome();
    }, [fetchHome])

    return (
        <section className='main-results'>
            <SEO title='My Results' />
            <h1>My Results</h1>

            {/* <h2>Aggregated leaderboards</h2> */}
            {/* <label htmlFor="leaderboard-type">Select a leaderboard:</label>

                <select className='custom-select' name="leaderboard-type" id="leaderboard-type"> 
                    <option value="semester">Semester leaderboard</option>
                    <option value="academic">Academic year leaderboard</option>
                    <option value="study">Studyprogram leaderboard</option>
                </select> */}

            <h2>Current semester</h2>
            <ul className='cards-grid-container'>
                {loading ? <Card type='loading' /> : fetchHomeData.map((data) => (
                    <Card link={`/home/${data.player.courseId}`} key={data.player.courseId} type='course' courseCode={data.player.code} fullCourseName={data.player.courseName} rank={data.rank} />
                ))}
            </ul>
            <hr />

            <h2>Previous semester</h2>
            {/* ↓ Her trenger vi en map som looper gjennom alle tidligere emner studenten har tatt før nåværende semester ↓*/}

            {/* <h3>Semestertekst</h3> {/* For eksempel: "Spring 2021"
            <ul className='cards-grid-container'>
                <Card type='course' courseCode='IDG1200' fullCourseName='Cloud Technologies' placementRank={3} />
                <Card type='course' courseCode='IDG1200' fullCourseName='Information Structures and Database Systems' placementRank={3} />
                <Card type='course' courseCode='IDG1200' fullCourseName='Full-stack development' placementRank={3} />
                <Card type='course' courseCode='IDG1200' fullCourseName='Service Design ' placementRank={3} />
            </ul> */}
        </section>
    );
}

export default MainResults;