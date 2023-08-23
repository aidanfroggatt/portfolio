import React, {useEffect, useRef} from 'react';
import {AppInfo} from "../info/AppInfo";

const Skills = ({setSkillsRef}) => {
    const scrollToRef = useRef(null);

    useEffect(() => {
        setSkillsRef(scrollToRef);
    }, [setSkillsRef]);

    return (
        <div ref={scrollToRef} className="skills">
            <div className="skills-container">
                {
                    Object.keys(AppInfo.pages.Skills).map((skill, index) => {
                        return (
                            <div className="skills-item" key={index}>
                                <div className="skills-item-icon">{AppInfo.pages.Skills[skill].icon}</div>
                                <div className="skills-item-name">{AppInfo.pages.Skills[skill].name}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills;
