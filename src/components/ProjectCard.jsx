import React, {useState} from "react";
import '../styles/components/Card.css';
import {FaAward, FaGithub, FaGlobe} from "react-icons/fa";

const ProjectCard = ({Heading, Subheading, Body, GitHub, Website, Devpost, Technologies, Awards, alt}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    Object.keys(Technologies).map((technology, index) => {
        console.log(technology)
    })

    return (
        <div
            className={`flip-card ${isFlipped ? 'flipped' : ''}`}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className={alt ? "flip-card-inner flip-card-inner-alt" : "flip-card-inner"}>
                <div className="flip-card-front">
                    <div className="card-subheading">{Subheading}</div>
                    <div className="card-heading">{Heading}</div>
                    <div className={alt ? "card-technologies-container card-technologies-container-alt" : "card-technologies-container"}>
                        {
                            Object.keys(Technologies).map((technology, index) => {
                                return (
                                    <div className={"card-technology"} key={index}>
                                        {Technologies[technology].icon}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="flip-card-back">
                    <div className="card-heading">{Heading}</div>
                    <div className="card-body">{Body}</div>
                    <div className={alt ? "card-link-container card-link-container-alt" : "card-link-container"}>
                        {GitHub ? <a className="card-link" href={GitHub} target="_blank"><FaGithub/></a> : <></> }
                        {Website ? <a className="card-link" href={Website} target="_blank"><FaGlobe/></a> : <></>}
                        {Devpost ? <a className="card-link" href={Devpost} target="_blank"><FaAward/></a> : <></>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
