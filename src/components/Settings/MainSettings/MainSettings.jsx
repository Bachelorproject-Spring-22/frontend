import { Link } from 'react-router-dom';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import TextFieldsRoundedIcon from '@mui/icons-material/TextFieldsRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';

function MainSettings(props) {
    const data = props.data;

    return (
        <section className='account'>
            <h1>Settings</h1>
            <article>
                <Link to='/settings/account'>
                    <div>
                        <AccountCircleRoundedIcon />
                        <p className='button-label'>Account</p>
                        <p className='user-text'>{data.user.username}</p>
                    </div>
                </Link>

                <Link to='/settings/anonymity'>
                    <div>
                        <LockRoundedIcon />
                        <p className='button-label'>Anonymity</p>
                        <p className='user-text'>Disabled</p>
                    </div>
                </Link>
                <Link to='/settings/language'>
                    <div>
                        <LanguageRoundedIcon />
                        <p className='button-label'>Language</p>
                        <p className='user-text'>English</p>
                    </div>
                </Link>

                <Link to='/settings/theme'>
                    <div>
                        <DarkModeRoundedIcon />
                        <p className='button-label'>Theme</p>
                        <p className='user-text'>Dark</p>
                    </div>
                </Link>
                <Link to='/settings/text'>
                    <div>
                        <TextFieldsRoundedIcon />
                        <p className='button-label'>Text Size</p>
                        <p className='user-text'>Default</p>
                    </div>
                </Link>

                <Link to='/settings/help'>
                    <div>
                        <HelpRoundedIcon />
                        <p className='button-label'>Help</p>
                        <p className='user-text'>Any questions?</p>
                    </div>
                </Link>
            </article>
        </section>
    );
};

export default MainSettings;