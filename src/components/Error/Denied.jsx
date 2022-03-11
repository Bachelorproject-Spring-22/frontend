import { Link } from "react-router-dom";
import Button from "../Button/Button";
import './error.css';

function Denied() {
    return (
        <section className='error'>
            <h1>The Kahoot! League</h1>
            <div>
                <h3>Page Not Found!</h3>
                <p>
                    You do not have permission to view this page. You can return to the home page.
                </p>
            </div>
            <Link to='/'><Button label='Return Home' /></Link>
        </section>
    );
}

export default Denied;