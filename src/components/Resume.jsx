import React from "react";
import myResume from "../assets/Resume.pdf";
import '../styles/components/Resume.css';

const Resume = () => {
    return (
        <div className="resume-container">
            Resume.
            <object
                data={myResume}
                className="resume">
            </object>
        </div>
    )
}

export default Resume;
