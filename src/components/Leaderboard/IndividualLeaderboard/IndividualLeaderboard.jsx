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
                <h1>Full-Stack Web Development</h1>
                <p className='subtitle'>Leaderboard</p>
            </header>

            {data ? 'here is the data': 'nodata'}

            <section>
                <p className='middle-emphasis'>The leaderboard display the top students from the X last quizzes.</p>

                {loading ? <ul><Card type='loading' /></ul> : <div className='inidividual-leaderboard'>
                    {(role === 'teacher' || role === 'superAdmin') && (isDesktop ? <Button onClick={() => props.handleOpen('uploadPop')} icon={<Icon iconId='file_upload'/>} label='' size='no-size' variant='fab'/> : <Button onClick={() => props.handleOpen('uploadPop')} label='upload new quiz'/>)}
                    <Table data={data} />
                </div>}

                <Button label='Choose a time frame' variant='secondary' icon={<Icon iconId='restore'/>}/>

            </section>
        </>
    );
};

export default IndividualLeaderboard;