import { useState } from 'react';

const Tooltip = ({ text, children }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            {showTooltip && (
                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 p-2 bg-gray-800 rounded-md shadow-md text-center"
                    style={{backgroundColor: "var(--background)", fontSize: "1vmax", color: "var(--primary)"}}>
                    {text}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
