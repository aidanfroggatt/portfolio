import React from 'react';
import Tooltip from "./Tooltip";
import {motion} from "framer-motion";
import '../styles/components/ExperienceCard.css';
import {FaArrowDown} from "react-icons/fa";

const ExperienceCard = ({alt, index, date, company, role, bulletPoints, technologies}) => {
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
                        {date}
                    </div>
                </div>
                <div className="experience-card-subheading">{company}</div>
                <div className="experience-card-heading">{role}</div>
                <div className="experience-card-bullet-container">
                    {
                        bulletPoints.map((bullet, bulletKey) => {
                            return (
                                <div key={bulletKey} className="experience-card-bullet">{bullet}</div>
                            )
                        })
                    }
                </div>
                <div className={alt ? "experience-card-skills-container" : "experience-card-skills-container experience-card-skills-container-alt"}>
                    {
                        Object.keys(technologies).map((tech, techKey) => {
                            return (
                                <div key={techKey} >
                                    <Tooltip content={technologies[tech].name}>
                                        <div className="experience-card-skill">
                                            {technologies[tech].icon}
                                        </div>
                                    </Tooltip>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default ExperienceCard;
