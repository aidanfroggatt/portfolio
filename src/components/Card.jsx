import React from "react";
import '../styles/components/Card.css';

const Card = ({Heading, Subheading, Body, Image}) => {

        return (
            <div className={"card"}>
                <div className="card-subheading">
                    {Subheading}
                </div>
                <div className="card-heading">
                    {Heading}
                </div>
                <div>
                    {Body}
                </div>
            </div>
        )
}

export default Card;
