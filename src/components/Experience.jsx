import React, {useEffect, useRef} from 'react';
import '../styles/components/Experience.css';
import {AppInfo} from "../info/AppInfo";
import Timeline from "./Timeline";

const Experience = ({setExperienceRef}) => {
    const scrollToRef = useRef(null);

    useEffect(() => {
        setExperienceRef(scrollToRef);
    }, [setExperienceRef]);

    return (
        <div ref={scrollToRef} className="experience">
            {/*<div className="experience-title">Experience</div>*/}
            <div className="experience-timeline-container">
                <Timeline info={AppInfo}/>
            </div>
        </div>
    )
}

export default Experience;
