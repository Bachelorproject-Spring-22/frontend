import React, { useMemo } from 'react';
import SEO from "../../SEO/SEO";
import makeData from '../../Table/makeData';
import Table from "../../Table/Table";

function MainLeaderboard(props) {
    const data = useMemo(() => makeData(5), []);
    //console.log(data);

    return (
        <section className='leaderboard'>
            <SEO title='Leaderboard' />

            <h1>Leaderboards</h1>
            <article>
                <h2>Semester Leaderboard</h2>
                <p>The top students this semester.</p>

                <Table data={data} />
            </article>
        </section>
    )
}

export default MainLeaderboard;