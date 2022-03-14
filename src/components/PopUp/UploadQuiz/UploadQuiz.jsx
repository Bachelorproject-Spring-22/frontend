import './upload-quiz.css';
import Button from '../../Button/Button';

function UploadQuiz({ modalTitle, bodyText }) {
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
                    onChange={console.info('change')}
                />
                <p>File must be xyz</p>
                
                <div className='buttons-side-by-side'>
                    <Button variant='secondary' label='cancel'/>
                    <Button type='submit' label='upload file'/>
                </div>
        </fieldset>
    );
}


export default UploadQuiz;