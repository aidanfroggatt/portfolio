import React, {useEffect, useRef} from 'react';
import '../styles/pages/Experience.css';
import {AppInfo} from "../info/AppInfo";
import ExperienceCard from "../components/ExperienceCard";

const Experience = ({setExperienceRef}) => {
    const scrollToRef = useRef(null);

    useEffect(() => {
        setExperienceRef(scrollToRef);
    }, [setExperienceRef]);


    return (
        <div ref={scrollToRef} className="experience">
            <div className="experience-title">Experience</div>
            <div className={"experience-card-container"}>
                {
                    Object.keys(AppInfo.pages.Experience.timeline).map((item, index) => {
                        const alt = index % 2 === 0
                        return (
                            <ExperienceCard
                                alt={alt}
                                index={index}
                                date={AppInfo.pages.Experience.timeline[item].date}
                                company={AppInfo.pages.Experience.timeline[item].company}
                                role={AppInfo.pages.Experience.timeline[item].role}
                                bulletPoints={AppInfo.pages.Experience.timeline[item].bulletPoints}
                                technologies={AppInfo.pages.Experience.timeline[item].technologies}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Experience;
