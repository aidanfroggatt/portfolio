import React from 'react';
import '../styles/pages/Experience.css';
import {AppInfo} from "../info/AppInfo";
import myResume from "../assets/old-resume.pdf";
import AnimatedPage from "../animations/AnimatedPage";

const Experience = () => {

    return (
        <AnimatedPage>
            <div className="experience">
                <div className="landing-page experience-landing-page">
                    <h1>{AppInfo.pages.Experience.name}.</h1>
                    <h2>{AppInfo.pages.Experience.description}</h2>
                </div>
                <div className="experience-timeline-container">

                </div>
                <div className="resume-container">
                    Resume.
                    <object
                        data={myResume}
                        className="resume">
                    </object>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default Experience;
