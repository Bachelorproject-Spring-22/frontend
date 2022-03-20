import './error.css';
import Button from "../Button/Button";
import Icon from '../Icon/Icon';
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <section className='error'>
            <h1>uniLeague</h1>
            <div>
                <Icon iconId='error' size='large'/>
                <h3>Page Not Found!</h3>
                <p>
                This server didn't have the requested URL. We don't have any more information than that. You can return to the home page.
                </p>
            </div>
            <Link to='/'><Button label='Return Home' /></Link>
        </section>
    );
}

export default NotFound;