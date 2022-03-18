import { useNavigate } from 'react-router-dom';
import Bob from '../../assets/bob-the-builder-fix-it.gif';
import Button from '../Button/Button';
import './work.css';

function WorkProgress() {
    const history = useNavigate();

    return (
        <>
        <h1>The Kahoot! League</h1>
            <p>I am sorry, but this page is work in progress, check back later!</p>
            <img className="bob-the-builder" src={Bob} alt="Bob the builder gif" />
            <Button label='Go back' onClick={() => history(-1)} />
            <Button variant='secondary' label='Home' onClick={() => history('/')} />
        </>
    );
}

export default WorkProgress;