import React, { useEffect, lazy, Suspense, useState } from "react";
import Button from "../../Button/Button";
import Icon from '../../Icon/Icon';
import { Link, useParams } from "react-router-dom";
import Card from "../../Card/Card";
import './individual-results.css';
import Loading from '../../Loading/Loading';

const BarChart = lazy(() => import('../../Chart/BarChart'));
const Table = lazy(() => import('../../Table/Table'));

function IndividualResults(props) {
    const params = useParams();
    const location = params['*'];
    const courseId = location.split('/')[0];
    const tableData = props.fetchCourseTableData;
    const courseData = props.fetchCourseData;
    
    let label = [];
    let scores = [];
    if (courseData) {
        courseData.map((element, index) => scores.push(element.kahootsInPeriod.finalScores.totalScore) && label.push(`Quiz ${index + 1}`));
    }

    const fetchCourseTable = props.fetchCourseTable;

    const [showBarChart, setChart] = useState(false);

    const handleClick = () => {
        setChart(showBarChart => true);
    }

    useEffect(() => {
        fetchCourseTable(courseId)
    }, [fetchCourseTable, courseId]);

    return (
        <section className='individual-results'>
            {props.loading ? null : <><h1>{tableData[0].player.courseName}</h1>
            <p className='subtitle'>{tableData[0].player.code}</p></>}

            <Suspense fallback={<Loading />}>
                {props.loading ? <ul><Card type='loading' /></ul> : <Table data={tableData} caption={`The top five students in ${tableData[0].player.courseName}`}/>}
            </Suspense>
            <Link to={`/leaderboard/${courseId}`}>
                <Button label='See Full Leaderboard' icon={<Icon iconId="leaderboard" />} />
            </Link>

            <h2>Latest Quiz Performance</h2>

            <div className="chart-container">
                {showBarChart ?
                    <Suspense fallback={<Loading />}>
                        <BarChart labels={label} data={scores} />
                    </Suspense> :
                    <p onClick={handleClick}>Show bar chart</p>
                }
            </div>

            <h2>Latest Quizes</h2>
            <ul className="cards-grid-container">
                {props.loading ? (<Card type='loading' />) :
                    courseData.map((data, index) => (
                        <Card key={data.kahootsInPeriod.quizId} type='quiz' link={`/home/${courseId}/${data.kahootsInPeriod.quizId}`} quizNumber={index + 1} correctAnswers={data.kahootsInPeriod.finalScores.correctAnswers} incorrectAnswers={data.kahootsInPeriod.finalScores.incorrectAnswers} />
                    ))}
            </ul>
        </section>
    );
}

export default IndividualResults;