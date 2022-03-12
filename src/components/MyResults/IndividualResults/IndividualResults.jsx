import React, { lazy, Suspense, useMemo } from "react";
import Button from "../../Button/Button";
import makeData from "../../Table/makeData";
import Icon from '../../Icon/Icon';
import { Link } from "react-router-dom";
import Card from "../../Card/Card";
import './individual-results.css'

const BarChart = lazy(() => import('../../Chart/BarChart'));
const Table = lazy(() => import('../../Table/Table'));

function IndividualResults(props) {
    const data = useMemo(() => makeData(3), []);

    return (
        <section className='individual-results'>
            <h1>Full-Stack Web Development</h1>
            <p className='subtitle'>IDG2100</p>

            <Suspense fallback={<div>Loading...</div>}>
                <Table data={data} />
            </Suspense>
            <Link to='/leaderboard/idg2100'>
                <Button label='See Full Leaderboard' icon={<Icon iconId="leaderboard"/>} />
            </Link>

            <h2>Latest Quiz Performance</h2>

            <Suspense fallback={<div>Loading...</div>}>
                <div className="chart-container">
                    <BarChart labels={[]} data={[]} /> {/* Dataen bør vel bli gitt via props... */}
                </div>
            </Suspense>



            <h2>Latest Quizes</h2>
            <ul>
                <Card type='quiz' link='/home/idg2100/quiz1' quizNumber={1} correctAnswers={9} incorrectAnswers={1} />
            </ul>
        </section>
    );
}

export default IndividualResults;