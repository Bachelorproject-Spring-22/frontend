import React, { useState } from 'react';
import './choose-time-frame.css';
import Button from '../../Button/Button';

function ChooseTimeFrame({ modalTitle, bodyText, handleClose, chooseTimeFrame, courseId }) {
    const currentDate = new Date().toISOString().split("T")[0]; /* https://stackoverflow.com/a/49916376/14447555 */
    const minimumDate = new Date(new Date().getFullYear(), 0, 1).toISOString().split("T")[0]; /* https://stackoverflow.com/a/14434873/14447555 */

    const [selectedStartDate, setSelectedStartDate] = useState('');  
    const [selectedEndDate, setSelectedEndDate] = useState('');


    const handleSelectedStartDate = (e) => {
        setSelectedStartDate(e.target.value);
    }

    const handleSelectedEndDate = (e) => {
        setSelectedEndDate(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const startDate = new Date(selectedStartDate).toISOString();
        const endDate = new Date(selectedEndDate).toISOString();
        const data = {
            startDate,
            endDate
        };
        chooseTimeFrame(data, courseId);
    }

    return (
        <fieldset>
            <div className='center-text'>
                <legend>{modalTitle}</legend>
                <p>{bodyText}</p>
            </div>
            <form onSubmit={handleSubmit}>


                <label htmlFor="start">Start date:</label>
                <input required type="date" id="start" name="quiz-start" value={selectedStartDate} min={minimumDate} max={selectedEndDate ? selectedEndDate : currentDate} onChange={handleSelectedStartDate}/>

                <label htmlFor="end">End date:</label>
                <input required type="date" id="end" name="quiz-start" value={selectedEndDate} min={selectedStartDate} max={currentDate} onChange={handleSelectedEndDate} disabled={selectedStartDate ? '' : 'disabled'}/>



                <div className='buttons-side-by-side'>
                    <Button variant='secondary destructive' label='cancel' onClick={() => handleClose('timeFramePop')} />
                    <Button type='submit' label='choose time frame' />
                </div>
            </form>

        </fieldset>

    );
}


export default ChooseTimeFrame;