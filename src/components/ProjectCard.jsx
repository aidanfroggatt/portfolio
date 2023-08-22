import React, {useState} from "react";
import '../styles/components/ProjectCard.css';
import {FaAward, FaGithub, FaGlobe} from "react-icons/fa";
import Tooltip from "./Tooltip";

const ProjectCard = ({Heading, Subheading, Body, GitHub, Website, Devpost, Technologies, Awards, alt}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    Object.keys(Technologies).map((technology, index) => {
        console.log(technology)
    })

    return (
        <div
            className={`project-flip-card ${isFlipped ? 'flipped' : ''}`}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className={alt ? "project-flip-card-inner project-flip-card-inner-alt" : "project-flip-card-inner"}>
                <div className="project-flip-card-front">
                    <div className="project-card-subheading">{Subheading}</div>
                    <div className="project-card-heading">{Heading}</div>
                    <div className={alt ? "project-card-technologies-container project-card-technologies-container-alt" : "project-card-technologies-container"}>
                        {
                            Object.keys(Technologies).map((technology, index) => {
                                return (
                                    <Tooltip content={Technologies[technology].name} alt={alt}>
                                        <div className={"project-card-technology"} key={index}>
                                            {Technologies[technology].icon}
                                        </div>
                                    </Tooltip>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="project-flip-card-back">
                    <div className="project-card-heading">{Heading}</div>
                    <div className="project-card-body">{Body}</div>
                    <div className={alt ? "project-card-link-container project-card-link-container-alt" : "project-card-link-container"}>
                        {Devpost ? <Tooltip content={"Devpost"}><a className="project-card-link" href={Devpost} target="_blank"><FaAward/></a></Tooltip> : <></>}
                        {Website ? <a className="project-card-link" href={Website} target="_blank"><FaGlobe/></a> : <></>}
                        {GitHub ? <a className="project-card-link" href={GitHub} target="_blank"><FaGithub/></a> : <></> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
