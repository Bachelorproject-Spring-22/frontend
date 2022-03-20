import './card.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


function Card({ link = '/test', type, courseCode, fullCourseName, rank, quizNumber, correctAnswers, incorrectAnswers, number, label, disabledLink, suffix }) {

    return (
        <li>
            {
                type === 'course' ? (
                    <Link className={`card ${disabledLink ? 'disabled-link' : ''}`} to={link} >
                        <div>
                            <h3>{courseCode} – {fullCourseName} </h3>
                            {rank ? <p>Placement: {rank}</p> : null}
                        </div>
                    </Link>
                ) : type === 'quiz' ? (

                    <Link className={`card ${disabledLink ? 'disabled-link' : ''}`} to={link}>
                        <div>
                            <h3>Quiz {quizNumber} </h3>
                            <p>Correct answers: {correctAnswers}</p>
                            <p>Incorrect answers: {incorrectAnswers}</p>
                        </div>
                    </Link>
                ) : type === 'individual' ? (
                    <div className='card individual'>
                        <h3>{number.toLocaleString()} {suffix ? <sup>{suffix}</sup> : null}</h3>
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
    type: PropTypes.oneOf(['course', 'quiz', 'individual', 'loading']),
}

export default Card;