import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Icon from '../Icon/Icon';
import './error.css';

function Error() {
    const history = useNavigate();

    return (
        <section className='error'>
            <h1>The Kahoot! League</h1>
            <div>
                <Icon iconId='error' size='large'/>
                <h3>Oops!</h3>
                <p>
                    Something went wrong. Please try again or refresh the page!
                </p>
            </div>
            <Button label='Go Back' onClick={() => history(-1)} />
            <Button label='Return Home' variant='secondary' onClick={() => history('/')} />
        </section>
    );
}

export default Error;