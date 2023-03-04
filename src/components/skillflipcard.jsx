import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

function SkillFlipCard({icon,text}) {
    const [flip, setFlip] = useState(false);
    return (
        <ReactCardFlip isFlipped={flip} flipDirection="vertical">
            <button className="flex flex-col justify-center items-center h-20 w-20 xl:h-48 xl:w-48" onClick={() => setFlip(!flip)}>
                {icon}
            </button>
            <button className="flex flex-col justify-center items-center h-20 w-20 xl:h-48 xl:w-48 text-white text-sm xl:text-lg" onClick={() => setFlip(!flip)}>
                {text}
            </button>
        </ReactCardFlip>
    );
}

export default SkillFlipCard;