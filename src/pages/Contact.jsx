import React from "react";
import '../styles/pages/Contact.css';
import {AppInfo} from "../info/AppInfo";
import AnimatedPage from "../animations/AnimatedPage";
import ContactForm from "../components/ContactForm";

const Contact = () => {

    return (
        <AnimatedPage>
            <div className="contact">
                <ContactForm/>
            </div>
        </AnimatedPage>
    )
}

export default Contact;
