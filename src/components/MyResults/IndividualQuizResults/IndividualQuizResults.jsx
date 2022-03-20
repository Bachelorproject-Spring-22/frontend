import './individual-quiz-results.css';
import Card from "../../Card/Card";
import Loading from "../../Loading/Loading";
import React, { useEffect, lazy, Suspense } from "react";
import { appendSuffix } from "../../../helpers/functions";
import { useParams } from "react-router-dom";

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

    if (!loading) {
        suffix = appendSuffix(fetchQuizData.kahootsInPeriod.finalScores.rank);
    }

    return (
        <section>
            {loading ? null : <>
                <h1>{fetchQuizData.coursesInPeriod.name}</h1>
                <p className='subtitle'>{`Quiz ${fetchQuizData.quizNumber}`}</p></>}

            <ul className='individual-quiz'>
                {loading ? <Card type='loading' /> :
                    <>
                        <Card type='individual' number={fetchQuizData.kahootsInPeriod.finalScores.correctAnswers} label='Correct' />
                        <Card type='individual' number={fetchQuizData.kahootsInPeriod.finalScores.incorrectAnswers} label='Incorrect' />
                        <Card type='individual' number={fetchQuizData.kahootsInPeriod.finalScores.totalScore} label='Score' />
                        <Card type='individual' number={fetchQuizData.kahootsInPeriod.finalScores.rank} suffix={suffix} label='Place' />
                    </>}
            </ul>


            <Suspense fallback={<Loading />}>
                <div className="chart-container-pie">
                    {loading ? <Card type='loading' /> : <PieChart correct={fetchQuizData.kahootsInPeriod.finalScores.correctAnswers} incorrect={fetchQuizData.kahootsInPeriod.finalScores.incorrectAnswers} />}
                </div>
            </Suspense>


            <h2>More Quizzes</h2>
            <p>Coming soon</p>
            {/* <ul>
                <Card type='quiz' quizNumber={2} correctAnswers={3} incorrectAnswers={8} />
            </ul> */}

        </section>
    );
}

export default IndividualQuizResults;