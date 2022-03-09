import './card.css';
import { Link } from 'react-router-dom';

/* Denne må endres når vi vet hvordan payload-en fra back-end ser ut. Komponentet er dermed ikke avansert at all */

function Card({ link='/test', type, courseCode, fullCourseName, placementRank, quizNumber, correctAnswers, incorrectAnswers }) {
    return (
        <li>
            <Link className="card" to={link}>
            {
                type === 'course' ? (
                        <div>
                            <h3>{courseCode} – {fullCourseName} </h3>
                            <p>Placement: {placementRank}</p>
                        </div>
                ) : (

                        <div>
                            <h3>Quiz {quizNumber} </h3>
                            <p>Correct answers: {correctAnswers}</p>
                            <p>Incorrect answers: {incorrectAnswers}</p>
                        </div>
                )
            }
            </Link>
        </li>
    );
}

export default Card;