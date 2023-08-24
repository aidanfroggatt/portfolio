import React, {useEffect, useRef} from 'react';
import '../styles/pages/Experience.css';
import {AppInfo} from "../info/AppInfo";
import Tooltip from "../components/Tooltip";
import {motion} from "framer-motion";

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
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    visible: { opacity: 1, scale: 1 },
                                    hidden: { opacity: 0, scale: 0 }
                                }}
                            >
                                <div className={alt ? "experience-card" : "experience-card experience-card-alt"}>
                                    <div className="experience-card-date-container">
                                        <div className="experience-card-date">
                                            {AppInfo.pages.Experience.timeline[item].date}
                                        </div>
                                    </div>
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
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Experience;
