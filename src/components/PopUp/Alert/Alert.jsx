import Button from '../../Button/Button';

function Alert({ modalTitle, bodyText }) {
    return (
        <fieldset>
            <div className='center-text'>
                <legend>{modalTitle}</legend>
                <p>{bodyText}</p>
            </div>
            <Button type='submit' label='OK' />
        </fieldset>
    );
}


export default Alert;