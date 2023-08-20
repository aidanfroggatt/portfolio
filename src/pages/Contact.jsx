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
                    <h2>{AppInfo.pages.Contact.description}</h2>
                </div>
                <ContactForm/>
            </div>
        </AnimatedPage>
    )
}

export default Contact;
