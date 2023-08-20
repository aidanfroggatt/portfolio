import React from 'react';
import '../styles/pages/Experience.css';
import {AppInfo} from "../info/AppInfo";
import myResume from "../assets/Resume.pdf";
import AnimatedPage from "../animations/AnimatedPage";
import Timeline from "../components/Timeline";

const Experience = () => {

    return (
        <AnimatedPage>
            <div className="experience">
                <div className="landing-page experience-landing-page">
                    <h1>{AppInfo.pages.Experience.name}.</h1>
                    <h2>{AppInfo.pages.Experience.description}</h2>
                </div>
                {/*<div className="experience-timeline-container">*/}
                {/*    <Timeline/>*/}
                {/*</div>*/}
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
