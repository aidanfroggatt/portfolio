import React, {useState} from "react";
import ReactCardFlip from "react-card-flip";

function SkillFlipCard({project,text,moreInfo, projectTitle}) {
    const [flip, setFlip] = useState(false);
    return (
        <ReactCardFlip isFlipped={flip} flipDirection="vertical">
            <button className="" onClick={() => setFlip(!flip)}>
                {project}
            </button>
            <button className="bg-gray-800" onClick={() => setFlip(!flip)}>
                <div className="flex flex-col bg-gray-800 justify-center text-xl xl:text-4xl items-center p-4 shadow-lg shadow-black">
                    <div className="pb-4">{projectTitle}</div>
                    <div className="flex flex-col justify-center items-center max-w-1/2 xl:h-64 w-projectPicMobile h-projectPicMobile xl:w-projectPic border-4 border-gray-900 xl:text-xl">
                        {text}
                        <br/>
                        <br/>
                        {moreInfo}
                    </div>
                </div>
            </button>




        </ReactCardFlip>
    );
}

export default SkillFlipCard;