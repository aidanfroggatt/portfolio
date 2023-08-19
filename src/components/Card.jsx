import React, {useState} from "react";
import '../styles/components/Card.css';
import Modal from "./Modal";

const Card = ({Heading, Subheading, Body, Image, ImageAlt, alt}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <div className={alt ? "card card-alt" : "card"} onClick={() => setIsModalOpen(true)}>
                <div className="card-subheading">
                    {Subheading}
                </div>
                <div className="card-heading">
                    {Heading}
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                Heading={Heading}
                Subheading={Subheading}
                Body={Body}
                Image={Image}
                ImageAlt={ImageAlt}
                alt={alt}
            />
            </div>
    )
}

export default Card;
