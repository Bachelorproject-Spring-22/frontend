import React, { useMemo } from 'react';
import makeData from '../../Table/makeData';
import Table from "../../Table/Table";

function IndividualLeaderboard(props) {
    const data = useMemo(() => makeData(30), []);

    return (
        <section className='inidividual-leaderboard'>
            <header>
                <h1>Full-Stack Web Development</h1>
                <p className='subtitle'>Leaderboard</p>
            </header>
            <p className='middle-emphasis'>The leaderboard display the top students from the last 8 quizes.</p>
            <Table data={data} />
        </section>
    );
};

export default IndividualLeaderboard;