import './upload-quiz.css';
import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';
import React, { useState } from 'react';

function UploadQuiz({ modalTitle, bodyText, handleClose, uploadQuiz, courseId, error }) {
    let currentCourse;
    if (courseId) {
        currentCourse = courseId.split('_');
    }

    const courses = ['IDG2100'];
    const semesters = ['S2022'];
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedCourse, setSelectedCourse] = useState(courseId ? currentCourse[0] : courses[0]);  /* ← Sette inn mest nylig course i useSate() for eksempel useSate(IDG2100)*/
    const [selectedSemester, setSelectedSemester] = useState(courseId ? currentCourse[1] : semesters[0]); /* ← Sette inn current semester i useSate() for eksempel useSate(f2021)*/

    const formData = new FormData();
    courseId = `${selectedCourse}_${selectedSemester}`;

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

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!formData.has('file')) {
            console.error('No file selected upon submit!');
            return
        }

        await uploadQuiz(formData);
    }

    /* useEffect(() => {
        getCourseAndSemester();

        const setCourseAndSemester = () => {
            setSelectedCourse(courses[0]);
            setSelectedSemester(semesters[0]);
        }

        if(!isLoading) {
            setCourseAndSemester();
        }
    }, [getCourseAndSemester]) */

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
                    {courses.map(course =>
                        <option key={course} value={course}>{course.toUpperCase()}</option>
                    )};
                </select>

                <label className='required' htmlFor='semester-selector'>Choose corresponding semester</label>
                <select value={selectedSemester} className='custom-select' id='semester-selector' onChange={handleSelectedSemester}>
                    {semesters.map(semester =>
                        <option key={semester} value={semester}>{semester.toUpperCase()}</option>
                    )};
                </select>

                <div className='buttons-side-by-side'>
                    <Button variant='secondary destructive' label='cancel' onClick={() => handleClose('uploadPop')} />
                    <Button type='submit' label='upload file' />
                </div>

                {error && <p className='danger'>{error}</p>}
            </form>

        </fieldset>

    );
}


export default UploadQuiz;