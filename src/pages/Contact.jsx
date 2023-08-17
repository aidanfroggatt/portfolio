import React from "react";
import '../styles/Contact.css';
import {AppInfo} from "../info/AppInfo";

const Contact = () => {

    return (
        <div className="landing-page">
            <h1>{AppInfo.pages.Contact.name}</h1>
            <h2>{AppInfo.pages.Contact.description}</h2>
        </div>
    )
}

export default Contact;
