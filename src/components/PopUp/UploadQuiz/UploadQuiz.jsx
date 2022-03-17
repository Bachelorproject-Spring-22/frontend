import React, { useState } from 'react';
import './upload-quiz.css';
import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';

function UploadQuiz({ modalTitle, bodyText, handleClose, uploadQuiz }) {
    const [selectedFile, setSelectedFile] = useState(null);

    const courses = ['IDG2100', 'idg0002', 'idg0003', 'idg0004']; /* ← API fra backend */
    const semesters = ['f2019', 's2020', 'f2020', 's2021', 'f2021', 's2022']; /* ← API fra backend */

    const [selectedCourse, setSelectedCourse] = useState(courses[0]);  /* ← Sette inn mest nylig course i useSate() for eksempel useSate(IDG2100)*/
    const [selectedSemester, setSelectedSemester] = useState(semesters[0]); /* ← Sette inn current semester i useSate() for eksempel useSate(f2021)*/

    const formData = new FormData();

    const courseId = `${selectedCourse}_${selectedSemester}`;

    /* Sets a new value for an existing key inside a FormData object, or adds the key/value if it does not already exist. */
    formData.set('file', selectedFile);
    formData.set('courseId', courseId);
    formData.set('name', 'kahoot');
    formData.set('variant', 'quiz');

    const handleFileSelect = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const handleSelectedCourse = (e) => {
        setSelectedCourse(e.target.value);
    }

    const handleSelectedSemester = (e) => {
        setSelectedSemester(e.target.value);
    }

    const removeSelectedFile = () => {
        formData.delete('file');
        setSelectedFile(null);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       
        if (!formData.has('file')) {
            //console.error('No file selected upon submit!');
            return
        }

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
                <p>{selectedFile ? <>Selected file: {selectedFile.name} ({Math.round(selectedFile.size / 1000)}kb) <span onMouseDown={removeSelectedFile}>(remove)</span></> : 'File must be .xls or .xlsx'}</p>

                <label className='required' htmlFor='course-code-selector'>Choose corresponding course code</label>

                <select value={selectedCourse} className='custom-select' id='course-code-selector' onChange={handleSelectedCourse}>

                    {/*  ↓ map liste med eksisterende emner her (bytt ut arrayet) ↓*/}
                    {courses.map(course =>
                        <option key={course} value={course}>{course.toUpperCase()}</option>
                    )};
                </select>

                <label className='required' htmlFor='semester-selector'>Choose corresponding semester</label>
                <select value={selectedSemester} className='custom-select' id='semester-selector' onChange={handleSelectedSemester}>

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