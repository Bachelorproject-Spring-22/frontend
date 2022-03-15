import React, { useState } from 'react';
import './upload-quiz.css';
import Button from '../../Button/Button';

function UploadQuiz({ modalTitle, bodyText, handleClose, uploadQuiz }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const formData = new FormData();
    const courseId = 'IDG2100_f2019';
    formData.append('file', selectedFile);
    formData.append('text', courseId);
    formData.append('name', 'kahoot');
    formData.append('variant', 'quiz');

    const handleFileSelect = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        
        uploadQuiz(formData);
    }

    return (
        <fieldset>
            <div className='center-text'>
                <legend>{modalTitle}</legend>
                <p>{bodyText}</p>
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='file'>Select a file</label>
                <input
                    type="file"
                    name="file"
                    id="file"
                    onChange={handleFileSelect}
                    required
                />
                <p>File must be xyz</p>

                <div className='buttons-side-by-side'>
                    <Button variant='secondary' label='cancel' onClick={() => handleClose('uploadPop')} />
                    <Button type='submit' label='upload file' />
                </div>
            </form>

        </fieldset>
    );
}


export default UploadQuiz;