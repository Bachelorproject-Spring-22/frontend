import Button from '../../../Button/Button';

function IndividualCourseQuizzes(props) {
    return (
        <>
            <header>
                <h1>IDG2100 - Fullstack development</h1>
                <p className='subtitle'>Manage</p>
            </header>

            <p>Click on a quiz to delete it.</p>
            
            <section> {/* Kanskje dette kan være et egen komponent? */}
                <ul className='option-list-flex-container'>
                    <li>
                        <div>
                            <p>Quiz 1</p>
                            <Button label='delete' variant='text-only' />
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Quiz 2</p>
                            <Button label='delete' variant='text-only' />
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Quiz 3</p>
                            <Button label='delete' variant='text-only' />
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Quiz 4</p>
                            <Button label='delete' variant='text-only' />
                        </div>
                    </li>
                </ul>

            </section>
        </>
    );
}

export default IndividualCourseQuizzes;