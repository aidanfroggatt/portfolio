import React from "react";
import '../styles/pages/Contact.css';
import {AppInfo} from "../info/AppInfo";
import AnimatedPage from "../animations/AnimatedPage";
import ContactForm from "../components/ContactForm";

const Contact = () => {

    return (
        <AnimatedPage>
            <div className="landing-page">
                <h1>{AppInfo.pages.Contact.name}.</h1>
                <h2>{AppInfo.pages.Contact.description}</h2>
            </div>
            <div className="contact-form-container">
                <ContactForm/>
            </div>
        </AnimatedPage>
    )
}

export default Contact;
