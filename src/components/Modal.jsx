import React from 'react';
import '../styles/components/Modal.css';
import {FaWindowClose} from "react-icons/fa";

const Modal = ({ isOpen, onClose, Subheading, Heading, Body }) => {
    if (!isOpen) return null;
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal">
                <h2>{Subheading}</h2>
                <h1>{Heading}</h1>
                <p>{Body}</p>
                <button className={"close-button"} onClick={onClose}>
                    <FaWindowClose className={"w-4 h-4"}/>
                </button>
            </div>
        </div>
    );
};

export default Modal;
