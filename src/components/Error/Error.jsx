import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Icon from '../Icon/Icon';
import './error.css';

function Error() {
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
            <Link to='/'><Button label='Return Home' /></Link>
        </section>
    );
}

export default Error;