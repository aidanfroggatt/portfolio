import React, {useState} from "react";
import '../styles/components/Card.css';

const Card = ({Heading, Subheading, Body, Image, ImageAlt, alt}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className={`flip-card ${isFlipped ? 'flipped' : ''}`}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className={alt ? "flip-card-inner flip-card-inner-alt" : "flip-card-inner"}>
                <div className="flip-card-front">
                    <div className="card-subheading">
                        {Subheading}
                    </div>
                    <div className="card-heading">
                        {Heading}
                    </div>
                </div>
                <div className="flip-card-back">
                    <div className="card-subheading">
                        {Subheading}
                    </div>
                    <div className="card-heading">
                        {Heading}
                    </div>
                    <div className="card-body">
                        {Body}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
