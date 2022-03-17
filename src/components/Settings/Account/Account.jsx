import React from "react";
import Button from "../../Button/Button";
import Icon from '../../Icon/Icon';
import Popup from "../../PopUp/PopUp";
import SEO from "../../SEO/SEO";
import Card from "../../Card/Card";

function Account(props) {
    const data = props.data;
    const togglePop = props.togglePop;

    return (
        <>
        {props.email ? <Popup content={<Card />} handleClose={() => togglePop('email')} /> : null}
            <section className='account-settings'>
                <SEO title='Account Settings' />
                <h1>Account</h1>
                <p className="subtitle">{data.user.username}</p>

                <article>
                    <div /* onClick={() => togglePop('email')} */>
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
                <Button label='Log Out' variant='secondary destructive' onClick={data.logoutUser} icon={<Icon iconId="logout"/>}/>
            </section>
        </>
    );
}

export default Account;