import React, { useEffect, useRef } from "react";
import './popup.css';

function PopUp(props) {
    const wrapperRef = useRef(null);

    useEffect(() => {
        function handleOutsideClick(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                props.handleClose(props.type);
            }
        }

        let scrollPosition = window.pageYOffset;
        document.body.style.overflow = 'hidden'; // Er mulig all koden under er redundant, hidden fikset scrolling
        //document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = '100%';
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.body.style.removeProperty('overflow');
            //document.body.style.removeProperty('position');
            document.body.style.removeProperty('top');
            document.body.style.removeProperty('width');
            window.scrollTo(0, scrollPosition);
            document.removeEventListener("click", handleOutsideClick);
        }
    }, [wrapperRef, props]);

    return (
        <div className='popup-box'>
            <div ref={wrapperRef} className="box">
                {/* <span className='close-icon' onClick={props.handleClose}>x</span> */}
                {props.content}
            </div>
        </div>
    );
}

export default PopUp;