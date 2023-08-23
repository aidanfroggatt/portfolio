import React, {useEffect, useRef} from 'react';
import {AppInfo} from "../info/AppInfo";
import '../styles/pages/Skills.css';
import Tooltip from "../components/Tooltip";

const Skills = ({setSkillsRef}) => {
    const scrollToRef = useRef(null);

    useEffect(() => {
        setSkillsRef(scrollToRef);
    }, [setSkillsRef]);
    //                                 {AppInfo.pages.Skills[skill].name}
    return (
        <div ref={scrollToRef} className="skills">
            <div className="skills-container">
                {
                    Object.keys(AppInfo.pages.Skills).map((skill, index) => {
                        const alt = index % 2 === 0
                        return (
                                <div key={index} className={alt ? "skills-item" : "skills-item skills-item-alt"}>
                                    <Tooltip content={AppInfo.pages.Skills[skill].name} alt={alt}>
                                        {AppInfo.pages.Skills[skill].icon}
                                    </Tooltip>
                                </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills;
