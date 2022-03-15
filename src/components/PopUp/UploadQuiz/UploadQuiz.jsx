import React, { useState } from 'react';
import './upload-quiz.css';
import Button from '../../Button/Button';

function UploadQuiz({ modalTitle, bodyText, handleClose, uploadQuiz }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const formData = new FormData();
    formData.append("file", selectedFile);

    const handleFileSelect = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const handleSubmit = () => {
        const data = {
            selectedFile,
            courseId: 'IDG2100_f2022'
        }
        console.log(data);
        uploadQuiz(data);
    }

    return (
        <fieldset>
            <div className='center-text'>
                <legend>{modalTitle}</legend>
                <p>{bodyText}</p>
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='upload'>Select a file</label>
                <input
                    type="file"
                    name="upload"
                    id="upload"
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