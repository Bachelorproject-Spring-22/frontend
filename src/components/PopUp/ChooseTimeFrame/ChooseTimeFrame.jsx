import './choose-time-frame.css';
import Button from '../../Button/Button';
import React, { useState } from 'react';

function ChooseTimeFrame({ modalTitle, bodyText, handleClose, chooseTimeFrame, courseId, timeSlot }) {
    const currentDate = new Date().toISOString().split("T")[0]; /* https://stackoverflow.com/a/49916376/14447555 */
    const minimumDate = new Date(new Date().getFullYear(), 0, 1).toISOString().split("T")[0]; /* https://stackoverflow.com/a/14434873/14447555 */
    const startDateToShow = timeSlot ? timeSlot.startDate.split('T')[0] : '';
    const endDateToShow = timeSlot ? timeSlot.endDate.split('T')[0] : '';

    const [selectedStartDate, setSelectedStartDate] = useState(startDateToShow);  
    const [selectedEndDate, setSelectedEndDate] = useState(endDateToShow);


    const handleSelectedStartDate = (e) => {
        setSelectedStartDate(e.target.value);
    }

    const handleSelectedEndDate = (e) => {
        setSelectedEndDate(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const startDate = new Date(selectedStartDate).toISOString();
        const endDate = selectedEndDate.concat('T23:59:00.000Z');
        
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
                <input required type="date" id="start" name="quiz-start" value={selectedStartDate} min={minimumDate} max={selectedEndDate ? selectedEndDate : currentDate} onChange={handleSelectedStartDate} autoFocus/>

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