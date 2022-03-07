import { Link } from 'react-router-dom';
import Bob from '../../assets/bob-the-builder-fix-it.gif';
import './work.css';

function WorkProgress() {
    return (
        <>
        <h1>The Kahoot! League</h1>
            <p>I am sorry, but this page is work in progress, check back later!</p>
            <img className="bobTheBuilder" src={Bob} alt="Bob the builder gif" />
            <Link to='/'><button>Home</button></Link>
        </>
    );
}

export default WorkProgress;