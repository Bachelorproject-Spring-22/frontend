import './card.css';
import { Link } from 'react-router-dom';

/* Denne må endres når vi vet hvordan payload-en fra back-end ser ut. Komponentet er dermed ikke avansert at all */

function Card(props) {
    return (
        <li>
            <Link className="card" to="/test">
            {
                props.type === 'course' ? (
                        <div>
                            <h3>{props.courseCode} – {props.fullCourseName} </h3>
                            <p>Placement: {props.placementRank}</p>
                        </div>
                ) : (

                        <div>
                            <h3>Quiz {props.quizNumber} </h3>
                            <p>Correct answers: {props.correctAnswers}</p>
                            <p>Incorrect answers: {props.incorrectAnswers}</p>
                        </div>
                )
            }
            </Link>
        </li>
    );
}

export default Card;