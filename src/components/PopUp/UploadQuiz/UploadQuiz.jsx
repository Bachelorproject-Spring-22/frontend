import React, { useState } from 'react';
import './upload-quiz.css';
import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';

function UploadQuiz({ modalTitle, bodyText, handleClose, uploadQuiz }) {
    const [selectedFile, setSelectedFile] = useState(null);

    const courses = ['IDG2100', 'idg0002', 'idg0003', 'idg0004']; /* ← API fra backend */
    const semesters = ['h2019', 'v2020', 'h2020', 'v2021', 'h2021', 'v2022']; /* ← API fra backend */

    const [selectedCourse, setSelectedCourse] = useState(courses[0]);  /* ← Sette inn mest nylig course i useSate() for eksempel useSate(IDG2100)*/
    const [selectedSemester, setSelectedSemester] = useState(semesters[0]); /* ← Sette inn current semester i useSate() for eksempel useSate(f2021)*/

    const formData = new FormData();

    const courseId = 'IDG2100_f2019';
    const courseId2 = `${selectedCourse}_${selectedSemester}`; /* ← Bruk denne når alt er klart */

    formData.append('file', selectedFile);
    formData.append('text', courseId2);
    formData.append('name', 'kahoot');
    formData.append('variant', 'quiz');

    const handleFileSelect = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.info(formData.get('text'))

        uploadQuiz(formData);
    }

    return (
        <fieldset>
            <div className='center-text'>
                <legend>{modalTitle}</legend>
                <p>{bodyText}</p>
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='file' className='custom-file-upload'><Icon iconId='file_upload' />choose file</label>
                <input
                    type="file"
                    name="file"
                    id="file"
                    onChange={handleFileSelect}
                    accept=".xls,.xlsx"
                    required
                />
                <p>{selectedFile ? `Selected file: ${selectedFile.name}` : 'File must be .xls or .xlsx'}</p>

                <label className='required' htmlFor='course-code-selector'>Choose corresponding course code</label>

                <select value={selectedCourse} id='course-code-selector' onChange={e => setSelectedCourse(e.target.value)}>

                    {/*  ↓ map liste med eksisterende emner her (bytt ut arrayet) ↓*/}
                    {courses.map(course =>
                        <option key={course} value={course}>{course.toUpperCase()}</option>
                    )};
                </select>

                <label className='required' htmlFor='semester-selector'>Choose corresponding semester</label>
                <select value={selectedSemester} id='semester-selector' onChange={e => setSelectedSemester(e.target.value)}>

                    {/*  ↓ map liste med eksisterende semestere her. (bytt ut arrayet) ↓ */}
                    {semesters.map(semester =>
                        <option key={semester} value={semester}>{semester.toUpperCase()}</option>
                    )};
                </select>

                <div className='buttons-side-by-side'>
                    <Button variant='secondary destructive' label='cancel' onClick={() => handleClose('uploadPop')} />
                    <Button type='submit' label='upload file' />
                </div>
            </form>

        </fieldset>
    );
}


export default UploadQuiz;