import { Link } from 'react-router-dom';

import SEO from '../../SEO/SEO';

function MainSettings(props) {
    const data = props.data;
    const username = data.user.username ? data.user.username : 'user';

    return (
        <section className='account'>
            <SEO title='Settings' />
            <h1>Settings</h1>
            <article>
                <Link to='/settings/account'>
                    <div>
                        
                        <p className='button-label'>Account</p>
                        <p className='user-text'>{username}</p>
                    </div>
                </Link>

                <Link to='/settings/anonymity'>
                    <div>
                        
                        <p className='button-label'>Anonymity</p>
                        <p className='user-text'>Disabled</p>
                    </div>
                </Link>
                <Link to='/settings/language'>
                    <div>
                        
                        <p className='button-label'>Language</p>
                        <p className='user-text'>English</p>
                    </div>
                </Link>

                <Link to='/settings/theme'>
                    <div>
                        
                        <p className='button-label'>Theme</p>
                        <p className='user-text'>Dark</p>
                    </div>
                </Link>
                <Link to='/settings/text'>
                    <div>
                        
                        <p className='button-label'>Text Size</p>
                        <p className='user-text'>Default</p>
                    </div>
                </Link>

                <Link to='/settings/help'>
                    <div>
                        
                        <p className='button-label'>Help</p>
                        <p className='user-text'>Any questions?</p>
                    </div>
                </Link>
            </article>
        </section>
    );
};

export default MainSettings;