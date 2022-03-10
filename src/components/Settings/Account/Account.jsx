import Button from "../../Button/Button";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import SEO from "../../SEO/SEO";

function Account(props) {
    const data = props.data;

    return (
        <>
            <section className='account-settings'>
                <SEO title='Account Settings' />
                <h1>Account</h1>
                <p className="subtitle">{data.user.username}</p>

                <article>
                    <div>
                        <p>Email</p>
                        <p className="user-text">Edit</p>
                    </div>
                    <div>
                        <p>Password</p>
                        <p className="user-text">Edit</p>
                    </div>
                    <div>
                        <p>Cookie Consent</p>
                        <p className="user-text">Edit</p>
                    </div>
                </article>
                <Button label='Log Out' icon={<LogoutRoundedIcon />} variant='secondary destructive' onClick={data.logoutUser} />
            </section>
        </>
    );
}

export default Account;