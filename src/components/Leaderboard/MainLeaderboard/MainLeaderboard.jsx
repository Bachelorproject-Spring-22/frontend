import React, { useEffect } from 'react';
import Card from '../../Card/Card';
import Loading from '../../Loading/Loading';
import SEO from "../../SEO/SEO";
import Table from "../../Table/Table";

function MainLeaderboard(props) {
    const { semesterLeaderBoard, courses, loading, fetchLeaderboard } = props;

    useEffect(() => {
        fetchLeaderboard();
    }, [fetchLeaderboard])

    return (
        <section className='leaderboard'>
            <SEO title='Leaderboard' />

            <header><h1>Leaderboards</h1></header>
            <article>
                <h2>Semester Leaderboard</h2>

                {loading ? <Loading /> : <Table data={semesterLeaderBoard} caption={'The top students this semester.'}/>}
            </article>

            {courses.length !== 0 ? <article>
                <h2>Individual Course Leaderboards</h2>
                <p>Explore the leaderboards for the courses you have this semester</p>

                <ul>
                    {courses.map(({ course: { courseId, code, name, rank } }) => <Card key={courseId} type='course' link={`/leaderboard/${courseId}`} courseCode={code} fullCourseName={name} rank={rank} />)}
                </ul>
            </article> : null}
        </section>
    )
}

export default MainLeaderboard;