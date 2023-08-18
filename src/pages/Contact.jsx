import React from "react";
import '../styles/Contact.css';
import {AppInfo} from "../info/AppInfo";
import AnimatedPage from "../animations/AnimatedPage";

const Contact = () => {

    return (
        <AnimatedPage>
            <div className="landing-page">
                <h1>{AppInfo.pages.Contact.name}.</h1>
                <h2>{AppInfo.pages.Contact.description}</h2>
            </div>
        </AnimatedPage>
    )
}

export default Contact;
