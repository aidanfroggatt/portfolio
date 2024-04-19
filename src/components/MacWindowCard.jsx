import '../styles/components/MacWindowCard.css';

const MacWindowCard = () => {
    return (
        <div className="window-container">
            <div className="window">
                <div className="window-header">
                    <div className="dot red"></div>
                    <div className="dot amber"></div>
                    <div className="dot green"></div>
                </div>
                <div className="window-content">
                    <div className="name-container">Hi, I'm<span className="name">&nbsp;Aidan.</span></div>
                    <div className="additional-info-container">
                        <text className="job">Frontend Developer at IBM.</text>
                        <text className="location">Based in Toronto.</text>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MacWindowCard;
