import React from 'react';
import '../styles/components/Experience.css';
import {AppInfo} from "../info/AppInfo";
import Timeline from "./Timeline";

const Experience = () => {
    return (
        <div className="experience">
            <div className="experience-title">Experience</div>
            <div className="experience-timeline-container">
                <Timeline info={AppInfo}/>
            </div>
        </div>
    )
}

export default Experience;
