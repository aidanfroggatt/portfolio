import React, {useState} from "react";
import '../styles/components/ProjectCard.css';
import {FaAward, FaGithub, FaGlobe} from "react-icons/fa";
import Tooltip from "./Tooltip";

const ProjectCard = ({Heading, Subheading, Body, Date, GitHub, Website, Devpost, Technologies, Awards, Image, ImageAlt, alt}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className={`project-flip-card ${isFlipped ? 'flipped' : ''}`}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className={alt ? "project-flip-card-inner project-flip-card-inner-alt" : "project-flip-card-inner"}>
                <div className="project-flip-card-front">
                    <div className="project-card-subheading">
                        {Subheading}
                    </div>
                    <div className="project-card-heading">
                        {Heading}
                        {
                            Awards ? <div className="project-card-award-tag"><FaAward/></div> : <></>
                        }
                    </div>
                    <div className="project-card-image-container"><img className="project-card-image" src={Image} alt={ImageAlt}/></div>
                    <div className={alt ? "project-card-technologies-container project-card-technologies-container-alt" : "project-card-technologies-container"}>
                        {
                            Object.keys(Technologies).map((technology, index) => {
                                return (
                                    <div key={index}>
                                        <Tooltip content={Technologies[technology].name} alt={alt}>
                                            <div className={"project-card-technology"}>
                                                {Technologies[technology].icon}
                                            </div>
                                        </Tooltip>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="project-flip-card-back">
                    <div className="project-card-heading">{Heading}</div>
                    <div className="project-card-date">{Date}</div>
                    {
                        Body.map((text, index) => {
                            return (
                                <div key={index} className="project-card-body">{text}</div>
                            )
                        })
                    }
                    <div className={alt ? "project-card-link-container project-card-link-container-alt" : "project-card-link-container"}>
                        {Devpost ? <a className="project-card-link" href={Devpost} target="_blank"><FaAward/></a> : <></>}
                        {Website ? <a className="project-card-link" href={Website} target="_blank"><FaGlobe/></a> : <></>}
                        {GitHub ? <a className="project-card-link" href={GitHub} target="_blank"><FaGithub/></a> : <></> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
