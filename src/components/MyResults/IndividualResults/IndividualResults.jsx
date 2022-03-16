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
    console.log(courseData);
    let label = [];
    let scores = [];
    if (courseData) {
        courseData.map((element, index) => scores.push(element.kahootsInPeriod.finalScores.totalScore) && label.push(`Quiz ${index + 1}`));
    }

    console.log(label);


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
            <h1>Full-Stack Web Development</h1>
            <p className='subtitle'>IDG2100</p>

            <Suspense fallback={<Loading />}>
                {props.loading ? <Card type='loading' /> : <Table data={tableData} />}
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