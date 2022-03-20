import Icon from '../../Icon/Icon';
import SEO from '../../SEO/SEO';
import { Link } from 'react-router-dom';

/* override styles for icons in the settings page */
const iconStyle = {
    fill: 'rgba(255, 255, 255, 0.87)'
};

function MainSettings(props) {
    const data = props.data;
    const username = data.user.username ? data.user.username : 'user';

    return (
        <section className='account'>
            <SEO title='Settings' />
            <header>
                <h1>Settings</h1>
            </header>

            <article>
                <Link to='/settings/account'>
                    <div>
                        <Icon iconId='account_circle' style={iconStyle} />
                        <p className='button-label'>Account</p>
                        <p className='user-text'>{username}</p>
                    </div>
                </Link>

                <Link to='/settings/anonymity'>
                    <div>
                        <Icon iconId='lock' style={iconStyle} />
                        <p className='button-label'>Anonymity</p>
                        <p className='user-text'>Disabled</p>
                    </div>
                </Link>
                <Link to='/settings/language'>
                    <div>
                        <Icon iconId='language' style={iconStyle} />
                        <p className='button-label'>Language</p>
                        <p className='user-text'>English</p>
                    </div>
                </Link>

                <Link to='/settings/theme'>
                    <div>
                        <Icon iconId='dark_mode' style={iconStyle} />
                        <p className='button-label'>Theme</p>
                        <p className='user-text'>Dark</p>
                    </div>
                </Link>
                <Link to='/settings/text'>
                    <div>
                        <Icon iconId='text_fields' style={iconStyle} />
                        <p className='button-label'>Text Size</p>
                        <p className='user-text'>Default</p>
                    </div>
                </Link>

                <Link to='/settings/help'>
                    <div>
                        <Icon iconId='help' style={iconStyle} />
                        <p className='button-label'>Help</p>
                        <p className='user-text'>Any questions?</p>
                    </div>
                </Link>
            </article>
        </section>
    );
};

export default MainSettings;