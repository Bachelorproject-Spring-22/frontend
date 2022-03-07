import './cookie-banner.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

/* Det som trengs:

* Hvordan oppbevare konsent?
* Hvordan informere backend om dette?
* Fjerne hele banneren når brukeren trykker på decline/OK */

function CookieBanner() {
    
    return (
        <div className='banner'>
            <p>This website uses persistent cookies to remember your preferences, such as your logged-in status. <Link to="/#" >Read more in our Cookie Policy.</Link></p>
            <div className='buttons'>
                <Button label={"decline"} variant={'secondary'}/>
                <Button label={"ok"} variant={'secondary'}/>
            </div>
        </div>
    );
}

export default CookieBanner;