import React, { useEffect } from 'react';
import Card from '../../Card/Card';
import Loading from '../../Loading/Loading';
import SEO from "../../SEO/SEO";
import Table from "../../Table/Table";

function MainLeaderboard(props) {
    const { semesterLeaderBoard, courses, loading, fetchLeaderboard } = props;
    console.log(courses);

    useEffect(() => {
        fetchLeaderboard();
    }, [fetchLeaderboard])

    return (
        <section className='leaderboard'>
            <SEO title='Leaderboard' />

            <header><h1>Leaderboards</h1></header>
            <article>
                <h2>Semester Leaderboard</h2>
                <p>The top students this semester.</p>

                {props.loading ? <Loading /> : <Table data={semesterLeaderBoard} />}
            </article>

            <article>
                <h2>Individual Course Leaderboards</h2>
                <p>Explore the leaderboards for the courses you have this semester</p>

                {loading ? <ul><Card type='loading' /></ul> : <ul className='cards-grid-container'>
                    {typeof(courses) !== 'string' ? courses.map((course) => (
                        <Card key={course.course.courseId} type='course' link={`/leaderboard/${course.course.courseId}`} courseCode={course.course.code} fullCourseName={course.course.name} rank={course.rank} />
                    )) : <Card type='course' disabledLink={true} courseCode='Unfortunately' fullCourseName='No leaderboards found' />}
                </ul>}
            </article>
        </section>
    )
}

export default MainLeaderboard;