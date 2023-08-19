import React, {useState} from "react";
import '../styles/components/Card.css';
import {FaAward, FaGithub, FaGlobe} from "react-icons/fa";

const Card = ({Heading, Subheading, Body, GitHub, Website, Devpost, alt}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className={`flip-card ${isFlipped ? 'flipped' : ''}`}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className={alt ? "flip-card-inner flip-card-inner-alt" : "flip-card-inner"}>
                <div className="flip-card-front">
                    <div className="card-subheading">{Subheading}</div>
                    <div className="card-heading">{Heading}</div>
                </div>
                <div className="flip-card-back">
                    <div className="card-heading">{Heading}</div>
                    <div className="card-body">{Body}</div>
                    <div className="card-link-container">
                        {GitHub ? <a className="card-link" href={GitHub} target="_blank"><FaGithub/></a> : <></> }
                        {Website ? <a className="card-link" href={Website} target="_blank"><FaGlobe/></a> : <></>}
                        {Devpost ? <a className="card-link" href={Devpost} target="_blank"><FaAward/></a> : <></>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
