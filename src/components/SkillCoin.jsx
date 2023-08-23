import React from 'react';
import '../styles/components/SkillCoin.css';

const SkillCoin = ({icon, skill, alt}) => {
    const [isFlipped, setIsFlipped] = React.useState(false);

    return (
        <div
            className={`skill-coin ${isFlipped ? 'flipped' : ''}`}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className={alt ? "skill-coin-inner skill-coin-inner-alt" : "skill-coin-inner"}>
                <div className="skill-coin-front">
                    {icon}
                </div>
                <div className="skill-coin-back">
                    {skill}
                </div>
            </div>
        </div>
    )
}

export default SkillCoin;
