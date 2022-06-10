import Button from '../../Button/Button';

function Confirm({ modalTitle, bodyText, handleClose, handleSubmit, type }) {
    return (
        <fieldset>
            <div className='center-text'>
                <legend>{modalTitle}</legend>
                <p>{bodyText}</p>
            </div>
            <div className='buttons-side-by-side'>
                <Button label='cancel' variant='secondary' onClick={() => handleClose(type)} />
                <Button type='submit' label='OK' onClick={handleSubmit} />
            </div>
        </fieldset>
    );
}


export default Confirm;