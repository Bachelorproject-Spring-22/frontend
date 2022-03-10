import Card from "../../Card/Card";
import PieChart from '../../Chart/PieChart';
import './individual-quiz.css';

function IndividualQuiz(props) {
    return (
        <section>
            <h1>Full-Stack Web Development</h1>
            <p className='subtitle'>Quiz 1</p>

            <ul className='individual-quiz'>
                <Card link='#' type='individual' number={9} label='Correct' />
                <Card link='#' type='individual' number={1} label='Incorrect' />
                <Card link='#' type='individual' number={9876} label='Score' />
                <Card link='#' type='individual' number='4th' label='Place' />
            </ul>

            <div className="chart-container-pie">
                <PieChart />
            </div>

            <h2>More Quizzes</h2>
            <ul>
                <Card type='quiz' quizNumber={2} correctAnswers={3} incorrectAnswers={8} />
            </ul>

        </section>
    );
}

export default IndividualQuiz;