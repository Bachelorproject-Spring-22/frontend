import { useEffect } from 'react';
import Button from '../../../Button/Button';
import Loading from '../../../Loading/Loading';

function IndividualCourseQuizzes({ getSpecificCourse, courseId, specificCourse, specificCourseInformation, isLoading, handleOpen }) {

    useEffect(() => {
        getSpecificCourse(courseId);
    }, [getSpecificCourse, courseId]);

    return (
        <>
            {isLoading ? <Loading /> :
                <>
                    <header>
                        <h1>{specificCourseInformation.code} - {specificCourseInformation.name}</h1>
                        <p className='subtitle'>Manage</p>
                    </header>

                    <p>Click on a quiz to delete it.</p>

                    <section>
                        <ul className='option-list-flex-container'>
                            {specificCourse.map((data) => (
                                <li key={data.quizId}>
                                    <div>
                                        <p>{data.title}</p>
                                        <Button label='delete' variant='text-only' onClick={() => handleOpen('deleteQuiz', data.quizId)} />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                </>}
        </>
    );
}

export default IndividualCourseQuizzes;