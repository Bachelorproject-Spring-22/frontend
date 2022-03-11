import { useState } from "react";
import Button from "../../Button/Button";

import Popup from "../../PopUp/PopUp";
import SEO from "../../SEO/SEO";
import Card from "../../Card/Card";

function Account(props) {
    const data = props.data;
    const [popUp, setPopUp] = useState(false);

    const handleClick = () => {
        setPopUp(prevState => !prevState);
    }

    return (
        <>
        {popUp ? <Popup content={<Card />} handleClose={handleClick} /> : null}
            <section className='account-settings'>
                <SEO title='Account Settings' />
                <h1>Account</h1>
                <p className="subtitle">{data.user.username}</p>

                <article>
                    <div onClick={handleClick}>
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
                <Button label='Log Out'  variant='secondary destructive' onClick={data.logoutUser} />
            </section>
        </>
    );
}

export default Account;