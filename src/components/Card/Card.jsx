import './card.css';

/* Denne må endres når vi vet hvordan payload-en fra back-end ser ut. Komponentet er dermed ikke avansert at all */

function Card(props) {
    return (
        <>
            {
                props.type === 'course' ? (

                    <div className={`card ${props.type}`.trim()}>
                        <div>
                            <h3>{props.courseCode} – {props.fullCourseName} </h3>
                            <p>Placement: {props.placementRank}</p>
                        </div>
                    </div>

                ) : (

                    <div className={`card ${props.type}`.trim()}>
                        <div>
                            <h3>Quiz {props.quizNumber} </h3>
                            <p>Correct answers: {props.correctAnswers}</p>
                            <p>Incorrect answers: {props.incorrectAnswers}</p>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default Card;