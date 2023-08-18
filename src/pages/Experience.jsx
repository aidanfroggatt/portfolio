import React from 'react';
import '../styles/Experience.css';
import {AppInfo} from "../info/AppInfo";

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

            </div>
        </div>
    )
}

export default Experience;
