import React, { useState } from 'react';
import './upload-quiz.css';
import Button from '../../Button/Button';

function UploadQuiz({ modalTitle, bodyText, handleClose }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const formData = new FormData();
        formData.append("file", selectedFile);

    const handleFileSelect = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    return (
        <fieldset>
            <div className='center-text'>
                <legend>{modalTitle}</legend>
                    <p>{bodyText}</p>
            </div>
            <label htmlFor='upload'>Select a file</label>
                <input
                    type="file"
                    name="upload"
                    id="upload"
                    onChange={handleFileSelect}
                />
                <p>File must be xyz</p>
                
                <div className='buttons-side-by-side'>
                    <Button variant='secondary' label='cancel' onClick={() => handleClose('uploadPop')} />
                    <Button type='submit' label='upload file'/>
                </div>
        </fieldset>
    );
}


export default UploadQuiz;