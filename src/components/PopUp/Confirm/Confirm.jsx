import Button from '../../Button/Button';

function Confirm({ modalTitle, bodyText, handleClose }) {
    return (
        <fieldset>
            <div className='center-text'>
                <legend>{modalTitle}</legend>
                <p>{bodyText}</p>
            </div>
            <div className='buttons-side-by-side'>
                <Button label='cancel' variant='secondary' onClick={() => handleClose('confirm')} />
                <Button type='submit' label='OK' onClick={() => handleClose('confirm')} />
            </div>
        </fieldset>
    );
}


export default Confirm;