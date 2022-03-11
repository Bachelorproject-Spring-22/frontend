import { Link } from "react-router-dom";
import Button from "../Button/Button";
import './error.css';

function NotFound() {
    return (
        <section className='error'>
            <h1>The Kahoot! League</h1>
            <div>
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