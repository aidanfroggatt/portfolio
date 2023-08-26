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
            <div className={"experience-card-container"}>
                {
                    Object.keys(AppInfo.pages.Experience.timeline).map((item, index) => {
                        const alt = index % 2 === 0
                        return (
                            <ExperienceCard item={item} alt={alt} index={index}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Experience;
