import Button from '../../Button/Button';

function Prompt({ modalTitle, bodyText, labelText }) {
    return (
        <fieldset>
            <div className='center-text'>
                <legend>{modalTitle}</legend>
                <p>{bodyText}</p>
            </div>
            <label htmlFor='prompt-input' className='small-label'>{labelText}</label>
            <input id='prompt-input'/>
            <div className='buttons-side-by-side'>
                <Button label='cancel' variant='secondary' />
                <Button type='submit' label='OK' />
            </div>
        </fieldset>
    );
}


export default Prompt;