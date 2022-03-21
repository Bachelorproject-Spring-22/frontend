import './individual-quiz-results.css';
import Card from "../../Card/Card";
import Loading from "../../Loading/Loading";
import React, { useEffect, lazy, Suspense } from "react";
import { appendSuffix } from "../../../helpers/functions";
import { useParams } from "react-router-dom";
import NotFound from '../../Error/NotFound';

const PieChart = lazy(() => import('../../Chart/PieChart'));

function IndividualQuizResults({ fetchQuiz, fetchQuizData, loading }) {
    const params = useParams();
    const location = params['*'];
    const courseId = location.split('/')[0];
    const quizId = location.split('/')[1];
    let suffix;

    useEffect(() => {
        fetchQuiz(courseId, quizId);
    }, [courseId, fetchQuiz, quizId]);

    if (!loading && fetchQuizData.length !== 0) {
        suffix = appendSuffix(fetchQuizData.kahootsInPeriod.finalScores.rank);
    }

    return (
        <section>
            {loading ? <Loading /> : fetchQuizData.length !== 0 ?
                <>
                    <h1>{fetchQuizData.coursesInPeriod.name}</h1>
                    <p className='subtitle'>{`Quiz ${fetchQuizData.quizNumber}`}</p>

                    <ul className='individual-quiz'>
                        <Card type='individual' number={fetchQuizData.kahootsInPeriod.finalScores.correctAnswers} label='Correct' />
                        <Card type='individual' number={fetchQuizData.kahootsInPeriod.finalScores.incorrectAnswers} label='Incorrect' />
                        <Card type='individual' number={fetchQuizData.kahootsInPeriod.finalScores.totalScore} label='Score' />
                        <Card type='individual' number={fetchQuizData.kahootsInPeriod.finalScores.rank} suffix={suffix} label='Place' />
                    </ul>


                    <Suspense fallback={<Loading />}>
                        <div className="chart-container-pie">
                            <PieChart correct={fetchQuizData.kahootsInPeriod.finalScores.correctAnswers} incorrect={fetchQuizData.kahootsInPeriod.finalScores.incorrectAnswers} />
                        </div>
                    </Suspense>


                    <h2>More Quizzes</h2>
                    <p>Coming soon</p>
                </> : 
                <NotFound />
            }
        </section>
    );
}

export default IndividualQuizResults;