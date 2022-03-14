import './confirm.css';
import Button from '../../Button/Button';

function Confirm({ modalTitle, bodyText }) {
    return (
        <fieldset>
            <div className='center-text'>
                <legend>{modalTitle}</legend>
                <p>{bodyText}</p>
            </div>
            <div className='buttons-side-by-side'>
                <Button label='cancel' variant='secondary' />
                <Button type='submit' label='OK' />
            </div>
        </fieldset>
    );
}


export default Confirm;