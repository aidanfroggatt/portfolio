import React, {useEffect, useRef} from 'react';
import {AppInfo} from "../info/AppInfo";
import '../styles/pages/Skills.css';

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
                            <div key={index} className="skills-item">
                                {AppInfo.pages.Skills[skill].icon}
                                {AppInfo.pages.Skills[skill].name}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills;
