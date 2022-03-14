import React from 'react';
import Card from '../../Card/Card';
import Loading from '../../Loading/Loading';
import SEO from "../../SEO/SEO";
import Table from "../../Table/Table";

function MainLeaderboard(props) {
    const { semesterLeaderBoard, courses, loading, getId } = props;
    console.log(props);

    return (
        <section className='leaderboard'>
            <SEO title='Leaderboard' />

            <header><h1>Leaderboards</h1></header>
            <article>
                <h2>Semester Leaderboard</h2>
                <p>The top students this semester.</p>

                {props.loading ? <Loading /> : <Table data={semesterLeaderBoard.totalScore} />}
            </article>

            <article>
                <h2>Individual Course Leaderboards</h2>
                <p>Explore the leaderboards for the courses you have this semester</p>
                
                {loading ? <Loading /> : <ul className='cards-grid-container'>
                {courses.map((course) => (
                    <Card key={course._id.courseId} type='course' getId={getId} id={course._id.courseId} link={`/leaderboard/${course._id.courseId}`} courseCode={course._id.code} fullCourseName={course._id.name} rank={course._id.rank} />
                ))}
                </ul>}
            </article>
        </section>
    )
}

export default MainLeaderboard;