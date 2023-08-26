import React from 'react';
import {AppInfo} from "../info/AppInfo";
import Tooltip from "./Tooltip";
import {motion} from "framer-motion";

const ExperienceCard = ({item, alt, index}) => {
    const [showMore, setShowMore] = React.useState(false);

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
            key={index}
        >
            <div className={alt ? "experience-card" : "experience-card experience-card-alt"} key={index}>
                <div className="experience-card-date-container">
                    <div className="experience-card-date">
                        {AppInfo.pages.Experience.timeline[item].date}
                    </div>
                </div>
                <div className="experience-card-subheading">{AppInfo.pages.Experience.timeline[item].company}</div>
                <div className="experience-card-heading">{AppInfo.pages.Experience.timeline[item].role}</div>
                {
                    showMore ?
                        <>
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
                                            <div key={techKey} >
                                                <Tooltip content={AppInfo.pages.Experience.timeline[item].technologies[tech].name}>
                                                    <div className="experience-card-skill">
                                                        {AppInfo.pages.Experience.timeline[item].technologies[tech].icon}
                                                    </div>
                                                </Tooltip>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </>
                        :
                        <>
                        </>
                }
            </div>
        </motion.div>
    )
}

export default ExperienceCard;
