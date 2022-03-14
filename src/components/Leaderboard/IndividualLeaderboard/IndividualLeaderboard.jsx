import React, { useState, useEffect } from 'react';
import Button from '../../Button/Button';
import Card from '../../Card/Card';
import Table from '../../Table/Table';
import './individual-leaderboard.css';

function IndividualLeaderboard(props) {
    const role = props.data.user.role;
    const location = props.location;
    const data = props.courseData;
    const loading = props.loading;
    
    const [isDesktop, setDesktop] = useState(window.innerWidth > 415);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 415);
    }

    useEffect(() => {
        props.fetchCourse(location);
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    }, []);

    return (
        <>
            <header>
                <h1>Full-Stack Web Development</h1>
                <p className='subtitle'>Leaderboard</p>
            </header>
            <section>
                <p className='middle-emphasis'>The leaderboard display the top students from the last 8 quizzes.</p>

                {loading ? <ul><Card type='loading' /></ul> : <div className='inidividual-leaderboard'>
                    {(role === 'teacher' || role === 'superAdmin') && (isDesktop ? <Button onClick={() => props.handleOpen('uploadPop')} label='' size='no-size' variant='fab'/> : <Button onClick={() => props.handleOpen('uploadPop')} label='upload new quiz'/>)}
                    <Table data={data} />
                </div>}

                <Button label='Choose a time frame' variant='secondary'/>

            </section>
        </>
    );
};

export default IndividualLeaderboard;