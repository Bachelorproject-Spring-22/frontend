import './card.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/* Denne må endres når vi vet hvordan payload-en fra back-end ser ut. Komponentet er dermed ikke avansert at all */

function Card({ id, link = '/test', type, courseCode, fullCourseName, rank, quizNumber, correctAnswers, incorrectAnswers, number, label, getId }) {

    return (
        <li>
            {
                type === 'course' ? (
                    <Link className="card" to={link} onClick={() => getId(id)}>
                        <div>
                            <h3>{courseCode} – {fullCourseName} </h3>
                            {rank ? <p>Placement: {rank}</p> : null}
                        </div>
                    </Link>
                ) : type === 'quiz' ? (

                    <Link className="card" to={link}>
                        <div>
                            <h3>Quiz {quizNumber} </h3>
                            <p>Correct answers: {correctAnswers}</p>
                            <p>Incorrect answers: {incorrectAnswers}</p>
                        </div>
                    </Link>
                ) : type === 'individual' ? (
                    <div className='card individual'>
                        <h3>{number.toLocaleString()}</h3>
                        {label ? <p className='subtitle'>{label}</p> : <p>–</p>}
                    </div>
                ) : type === 'loading' ? (
                    <div className='card loading'>
                        
                    </div>
                ) : (null)
            }
        </li>
    );
}

Card.propTypes = {
    type: PropTypes.oneOf(['course', 'quiz', 'individual']),
}

export default Card;