import React from 'react';
import '../styles/components/Modal.css';
import {FaWindowClose} from "react-icons/fa";

const Modal = ({ isOpen, onClose, Subheading, Heading, Body, alt }) => {
    if (!isOpen) return null;
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };
    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className={alt ? "modal modal-alt" : "modal"}>
                <div className="modal-subheading">{Subheading}</div>
                <div className="modal-heading">{Heading}</div>
                <div className="modal-body">{Body}</div>
                {/*<button className={"close-button"} onClick={onClose}>*/}
                {/*    <FaWindowClose className={"w-4 h-4"}/>*/}
                {/*</button>*/}
            </div>
        </div>
    );
};

export default Modal;
