import React from "react";
import '../styles/pages/Contact.css';
import {AppInfo} from "../info/AppInfo";
import AnimatedPage from "../animations/AnimatedPage";
import ContactForm from "../components/ContactForm";

const Contact = () => {

    return (
        <AnimatedPage>
            <div className="contact">
                <div className="landing-page contact-landing-page">
                    <h1>{AppInfo.pages.Contact.name}.</h1>
                    <p>{AppInfo.pages.Contact.description}</p>
                </div>
                <ContactForm/>
            </div>
        </AnimatedPage>
    )
}

export default Contact;
