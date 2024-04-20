import '../styles/components/MacWindowCard.css';

const MacWindowCard = ({children}) => {
    return (
        <div className="window-container">
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
