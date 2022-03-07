import { Link } from "react-router-dom";
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import Button from "../Button/Button";
import './notFound.css';

function NotFound() {
    return (
        <section className='notFound'>
            <h1>The Kahoot! League</h1>
            <div>
                <ErrorRoundedIcon fontSize="large" />
                <h3>Page Not Found!</h3>
            </div>
            <p>
                This server didn't have the requested URL. We don't have any more information than that. You can return to the home page.
            </p>
            <Link to='/'><Button label='Return Home' /></Link>
        </section>
    );
}

export default NotFound;