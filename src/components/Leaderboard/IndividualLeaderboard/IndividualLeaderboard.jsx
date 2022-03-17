import React, { useState, useEffect } from 'react';
import Button from '../../Button/Button';
import Card from '../../Card/Card';
import Table from '../../Table/Table';
import './individual-leaderboard.css';
import Icon from '../../Icon/Icon';

function IndividualLeaderboard(props) {
    const role = props.data.user.role;
    const location = props.location;
    const data = props.courseData;
    const loading = props.loading;
    const fetchCourse = props.fetchCourse;
    const timeSlot = props.timeSlot;

    const [isDesktop, setDesktop] = useState(window.innerWidth > 415);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 415);
    }

    useEffect(() => {
        fetchCourse(location);
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    }, [fetchCourse, location]);

    return (
        <>
            <header>
                {loading ? null : <h1>{data[0].course.name}</h1>}
                <p className='subtitle'>Leaderboard</p>
            </header>

            <section>
                {timeSlot ?
                    (<>
                        <p className='middle-emphasis'>The leaderboard display data from {new Date(timeSlot.startDate.split('T')[0]).toLocaleDateString()} to {new Date(timeSlot.endDate.split('T')[0]).toLocaleDateString()}.</p> 
                        <Button variant='text-only' label='Reset' onClick={() => fetchCourse(location)} />
                    </>) :
                    (<p className='middle-emphasis'>The leaderboard display the top students from the X last quizzes.</p>)}

                {loading ? <ul><Card type='loading' /></ul> : <div className='inidividual-leaderboard'>
                    {(role === 'teacher' || role === 'superAdmin') && (isDesktop ? <Button onClick={() => props.handleOpen('uploadPop', data[0].course.courseId)} icon={<Icon iconId='file_upload' />} label='' size='no-size' variant='fab' /> : <Button onClick={() => props.handleOpen('uploadPop', data[0].course.courseId)} label='upload new quiz' />)}
                    <Table data={data} />
                </div>}

                <Button label='Choose a time frame' variant='secondary' icon={<Icon iconId='restore' />} onClick={() => props.handleOpen('timeFramePop', data[0].course.courseId)} />

            </section>
        </>
    );
};

export default IndividualLeaderboard;