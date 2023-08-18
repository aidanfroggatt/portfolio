import React from 'react';
import '../styles/Experience.css';
import {AppInfo} from "../info/AppInfo";
import myResume from "../assets/old-resume.pdf";

const Experience = () => {

    return (
        <div className="experience">
            <div className="landing-page">
                <h1>{AppInfo.pages.Experience.name}</h1>
                <h2>{AppInfo.pages.Experience.description}</h2>
            </div>
            <div className="experience-timeline">

            </div>
            <div className="resume-container">
                Resume.
                <object
                    data={myResume}
                    className="resume">
                </object>
            </div>
        </div>
    )
}

export default Experience;
