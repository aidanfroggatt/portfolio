import React, {useEffect, useRef} from 'react';
import '../styles/components/Experience.css';
import {AppInfo} from "../info/AppInfo";
import Tooltip from "./Tooltip";

const Experience = ({setExperienceRef}) => {
    const scrollToRef = useRef(null);

    useEffect(() => {
        setExperienceRef(scrollToRef);
    }, [setExperienceRef]);

    return (
        <div ref={scrollToRef} className="experience">
            <div className={"experience-card-container"}>
                {
                    Object.keys(AppInfo.pages.Experience.timeline).map((item, index) => {
                        const alt = index % 2 === 0
                        return (
                            <div className={alt ? "experience-card" : "experience-card experience-card-alt"}>
                                <div className="experience-card-subheading">{AppInfo.pages.Experience.timeline[item].company}</div>
                                <div className="experience-card-heading">{AppInfo.pages.Experience.timeline[item].role}</div>
                                <div className="experience-card-bullet-container">
                                    {
                                        AppInfo.pages.Experience.timeline[item].bulletPoints.map((bullet, bulletKey) => {
                                            return (
                                                <div key={bulletKey} className="experience-card-bullet">{bullet}</div>
                                            )
                                        })
                                    }
                                </div>
                                <div className={alt ? "experience-card-skills-container" : "experience-card-skills-container experience-card-skills-container-alt"}>
                                    {
                                        Object.keys(AppInfo.pages.Experience.timeline[item].technologies).map((tech, techKey) => {
                                            return (
                                                <Tooltip content={AppInfo.pages.Experience.timeline[item].technologies[tech].name}>
                                                    <div key={techKey} className="experience-card-skill">
                                                        {AppInfo.pages.Experience.timeline[item].technologies[tech].icon}
                                                    </div>
                                                </Tooltip>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Experience;
