import Button from '../../Button/Button';

function Alert({ modalTitle, bodyText, handleClose, type }) {
    return (
        <fieldset>
            <div className='center-text'>
                <legend>{modalTitle}</legend>
                <p>{bodyText}</p>
            </div>
            <Button type='submit' label='OK' onClick={() => handleClose(type)} />
        </fieldset>
    );
}


export default Alert;