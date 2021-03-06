import React, { useState, useEffect } from 'react';
import './individual-leaderboard.css';
import Button from '../../Button/Button';
import Loading from '../../Loading/Loading';
import Error from '../../Error/Error';
import Icon from '../../Icon/Icon';
import Table from '../../Table/Table';
import NotFound from '../../Error/NotFound';

function IndividualLeaderboard(props) {
    const courseInformation = props.courseInformation
    const role = props.data.user.role;
    const location = props.location;
    const data = props.courseData;
    const loading = props.loading;
    const fetchCourse = props.fetchCourse;
    const timeSlot = props.timeSlot;
    const error = props.error;
    let startDate, endDate;

    if (timeSlot) {
        startDate = new Date(timeSlot.startDate.split('T')[0]).toLocaleDateString();
        endDate = new Date(timeSlot.endDate.split('T')[0]).toLocaleDateString();
    }

    const [isDesktop, setDesktop] = useState(window.innerWidth > 415);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 415);
    }

    useEffect(() => {
        fetchCourse(location);
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    }, [fetchCourse, location]);

    if (error) {
        return <Error />;
    }

    return (
        <>
            {loading ? <Loading /> : data && courseInformation ?
                <>
                    <header>
                        <h1>{courseInformation.course.name}</h1>
                        <p className='subtitle'>Leaderboard</p>
                    </header>

                    <section>
                        <div className='inidividual-leaderboard'>
                            {(role === 'teacher' || role === 'superAdmin') && (isDesktop ?
                                <Button onClick={() => props.handleOpen('uploadPop', courseInformation.course.courseId)} icon={<Icon iconId='file_upload' />} label='' size='no-size' variant='fab' /> :
                                <Button onClick={() => props.handleOpen('uploadPop', courseInformation.course.courseId)} label='upload new quiz' />)}

                            <Table data={data} caption={timeSlot ? `The leaderboard display data from ${startDate} to ${endDate}.` : `The leaderboard displays the top students from the ${courseInformation.totalAmountOfQuizzes} last quizzes.`} />
                        </div>
                        <Button label='Choose a time frame' variant='secondary' icon={<Icon iconId='restore' />} onClick={() => props.handleOpen('timeFramePop', courseInformation.course.courseId)} />
                        {timeSlot ?
                            <Button variant='text-only destructive' label='Reset' onClick={() => fetchCourse(location)} /> :
                            null}
                    </section>
                </> : <NotFound />
            }
        </>
    );
};

export default IndividualLeaderboard;