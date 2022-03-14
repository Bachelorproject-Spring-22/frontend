import Card from "../../Card/Card";
import SEO from "../../SEO/SEO";

function MainResults(props) {
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
                {/* ↓Her trenger vi en map som looper gjennom alle emnene studenten har nåværende semester. ↓ */}

                <Card link='/home/idg2100' type='course' courseCode='IDG2100' fullCourseName='Full-Stack Web Development' placementRank={1} />
                <Card type='course' courseCode='IDG2009' fullCourseName='Kommunikasjon' placementRank={3} />
                <Card type='course' courseCode='IDG3101' fullCourseName='Fordypningsprosjekt' placementRank={3} />
                <Card type='course' courseCode='IDG3006' fullCourseName='Tingenes web' placementRank={3} />


            </ul>
            <hr />

            <h2>Previous semester</h2>
            {/* ↓ Her trenger vi en map som looper gjennom alle tidligere emner studenten har tatt før nåværende semester ↓*/}

            <h3>Semestertekst</h3> {/* For eksempel: "Spring 2021" */}
            <ul className='cards-grid-container'>
                <Card type='course' courseCode='IDG1200' fullCourseName='Cloud Technologies' placementRank={3} />
                <Card type='course' courseCode='IDG1200' fullCourseName='Information Structures and Database Systems' placementRank={3} />
                <Card type='course' courseCode='IDG1200' fullCourseName='Full-stack development' placementRank={3} />
                <Card type='course' courseCode='IDG1200' fullCourseName='Service Design ' placementRank={3} />
            </ul>
        </section>
    );
}

export default MainResults;