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
                <div className="experience-timeline-container">
                    <Timeline info={AppInfo}/>
                </div>

            </div>
        </AnimatedPage>
    )
}

export default Experience;
