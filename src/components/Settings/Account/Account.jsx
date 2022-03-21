import Card from "../../Card/Card";
import Popup from "../../PopUp/PopUp";
import React from "react";
import SEO from "../../SEO/SEO";

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
            </section>
        </>
    );
}

export default Account;