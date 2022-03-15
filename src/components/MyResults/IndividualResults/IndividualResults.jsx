import React, { lazy, Suspense, /* useMemo, */ useState } from "react";
import Button from "../../Button/Button";
//import makeData from "../../Table/makeData";
import Icon from '../../Icon/Icon';
import { Link } from "react-router-dom";
import Card from "../../Card/Card";
import './individual-results.css';
import Loading from '../../Loading/Loading';

const BarChart = lazy(() => import('../../Chart/BarChart'));
//const Table = lazy(() => import('../../Table/Table'));

function IndividualResults(props) {
    //const data = useMemo(() => makeData(3), []);

    const [showBarChart, setChart] = useState(false);

    /* bare copy paste */
    const handleClick = () => {
        setChart(showBarChart => true);
    }

    return (
        <section className='individual-results'>
            <h1>Full-Stack Web Development</h1>
            <p className='subtitle'>IDG2100</p>

            <Suspense fallback={<Loading />}>
                {/* <Table data={data} /> */}
            </Suspense>
            <Link to='/leaderboard/idg2100'>
                <Button label='See Full Leaderboard' icon={<Icon iconId="leaderboard"/>} />
            </Link>

            <h2>Latest Quiz Performance</h2>

            <div className="chart-container">
                {showBarChart ?
                    <Suspense fallback={<Loading />}>
                        <BarChart labels={[]} data={[]} />
                    </Suspense> :
                    <p onClick={handleClick}>Show bar chart</p>
                }
            </div>

            <h2>Latest Quizes</h2>
            <ul className="cards-grid-container">
                <Card type='quiz' link='/home/idg2100/quiz1' quizNumber={1} correctAnswers={9} incorrectAnswers={1} />
                <Card type='quiz' link='/home/idg2100/quiz2' quizNumber={4} correctAnswers={12} incorrectAnswers={7} />
            </ul>
        </section>
    );
}

export default IndividualResults;