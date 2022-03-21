import './individual-results.css';
import Button from "../../Button/Button";
import Card from "../../Card/Card";
import Icon from '../../Icon/Icon';
import Loading from '../../Loading/Loading';
import React, { useEffect, lazy, Suspense, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NotFound from '../../Error/NotFound';

const BarChart = lazy(() => import('../../Chart/BarChart'));
const Table = lazy(() => import('../../Table/Table'));

function IndividualResults(props) {
    const params = useParams();
    const location = params['*'];
    const courseId = location.split('/')[0];
    const tableData = props.fetchCourseTableData;
    const courseData = props.fetchCourseData;
    const loading = props.loading;
    const [showBarChart, setChart] = useState(false);

    let label = [];
    let scores = [];
    if (courseData.length !== 0) {
        courseData.map((element, index) => scores.push(element.kahootsInPeriod.finalScores.totalScore) && label.push(`Quiz ${index + 1}`));
    }

    const fetchCourseTable = props.fetchCourseTable;

    const handleClick = () => {
        setChart(showBarChart => true);
        sessionStorage.setItem('showBarChart', true);
    }

    useEffect(() => {
        fetchCourseTable(courseId);

        if(sessionStorage.getItem('showBarChart')) {
            setChart(showBarChart => true);
        }
    }, [fetchCourseTable, courseId]);

    return (
        <section className='individual-results'>
            {loading ?
                <ul><Loading /></ul> : courseData.length !== 0 && tableData.length !== 0 ?
                    <>
                        <h1>{tableData[0].player.courseName}</h1>
                        <p className='subtitle'>{tableData[0].player.code}</p>

                        <Suspense fallback={<Loading />}>
                            <Table data={tableData} caption={`The top five students in ${tableData[0].player.courseName}`} />
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
                            {
                                courseData.map((data, index) => (
                                    <Card key={data.kahootsInPeriod.quizId} type='quiz' link={`/home/${courseId}/${data.kahootsInPeriod.quizId}`} quizNumber={index + 1} correctAnswers={data.kahootsInPeriod.finalScores.correctAnswers} incorrectAnswers={data.kahootsInPeriod.finalScores.incorrectAnswers} />
                                ))
                            }
                        </ul>
                    </> : <NotFound />
            }
        </section>
    );
}

export default IndividualResults;