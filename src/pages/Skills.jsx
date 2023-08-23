import React, {useEffect, useRef} from 'react';
import {AppInfo} from "../info/AppInfo";
import '../styles/pages/Skills.css';
import SkillCoin from "../components/SkillCoin";

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
                        const alt = index % 2 === 0
                        return (
                            <SkillCoin icon={AppInfo.pages.Skills[skill].icon} skill={skill} alt={alt}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills;
