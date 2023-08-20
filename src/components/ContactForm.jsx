import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/components/ContactForm.css';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("xknlrgqd");
    if (state.succeeded) {
        return (
            <div className={"contact-form contact-form-submitted"}>
                Thanks for reaching out!
            </div>
        )
    }
    return (
        <form className={"contact-form"} onSubmit={handleSubmit}>
            <div className={"contact-form-title"}>Reach Out!</div>
            <input
                id="email"
                type="email"
                name="email"
                placeholder={"Email"}
                className={"contact-form-input"}
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <textarea
                id="message"
                name="message"
                placeholder={"Message"}
                className={"contact-form-textarea"}
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button className={"contact-form-submit-button"} type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    );
}
export default ContactForm;
