import React, { useState, useMemo, useEffect } from 'react';
import makeData from '../../Table/makeData';
import Table from "../../Table/Table";
import Button from '../../Button/Button';
import './individual-leaderboard.css';

function IndividualLeaderboard(props) {
    const role = props.data.user.role;
    const data = useMemo(() => makeData(26), []); // Denne fjernes når dataen hentes fra backend
    
    const [isDesktop, setDesktop] = useState(window.innerWidth > 415);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 415);
    }

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <>
            <header>
                <h1>Full-Stack Web Development</h1>
                <p className='subtitle'>Leaderboard</p>
            </header>
            <section>
                <p className='middle-emphasis'>The leaderboard display the top students from the last 8 quizzes.</p>

                <div className='inidividual-leaderboard'>
                    {(role === 'teacher' || role === 'superAdmin') && (isDesktop ? <Button onClick={() => props.handleOpen('uploadPop')} label='' size='no-size' variant='fab'/> : <Button onClick={() => props.handleOpen('uploadPop')} label='upload new quiz'/>)}
                    <Table data={data} />
                </div>

                <Button label='Choose a time frame' variant='secondary'/>

            </section>
        </>
    );
};

export default IndividualLeaderboard;