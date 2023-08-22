import React, { useState } from 'react';
import '../styles/components/Tooltip.css';

const Tooltip = ({ children, content, alt }) => {
    const [show, setShow] = useState(false);

    return (
        <div
            className="tooltip-container"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            {children}
            {show && <div className={alt ? "tooltip-content tooltip-content-alt" : "tooltip-content"}>{content}</div>}
        </div>
    );
};

export default Tooltip;
