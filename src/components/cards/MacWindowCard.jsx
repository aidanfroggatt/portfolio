import '../../styles/components/MacWindowCard.css';

const MacWindowCard = ({children}) => {
    return (
        <div className="window-container">
            <div className="window-overlay"></div>
            <div className="shine-wrapper">
                <div className="shine-small"></div>
                <div className="shine-big"></div>
            </div>
            <div className="window">
                <div className="window-header">
                    <div className="dot red"></div>
                    <div className="dot amber"></div>
                    <div className="dot green"></div>
                </div>
                {children}
            </div>
        </div>
    )
}

export default MacWindowCard;
