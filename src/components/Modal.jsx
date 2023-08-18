import React from 'react';
import '../styles/components/Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                {children}
                <button onClick={onClose}>Close Modal</button>
            </div>
        </div>
    );
};

export default Modal;
