import React, { useMemo } from "react";
import Button from "../../Button/Button";
import makeData from "../../Table/makeData";
import Table from "../../Table/Table";
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import { Link } from "react-router-dom";
import Card from "../../Card/Card";

function IndividualResults(props) {
    const data = useMemo(() => makeData(3), []);

    return (
        <section className='individual-results'>
            <h1>Full-Stack Web Development</h1>
            <p className='subtitle'>IDG2100</p>

            <Table data={data} />
            <Link to='/leaderboard/idg2100'>
                <Button label='See Full Leaderboard' icon={<LeaderboardRoundedIcon />} />
            </Link>

            <h2>Latest Quiz Performance</h2>
            <p>PLACEHOLDER FOR GRAFER</p>

            <h2>Latest Quizes</h2>
            <ul>
                <Card type='quiz' link='/home/idg2100/quiz1' quizNumber={1} correctAnswers={9} incorrectAnswers={1} />
            </ul>
        </section>
    );
}

export default IndividualResults;