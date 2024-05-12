import '../styles/components/HighlightCard.css'

const HighlightCard = ({children, accentColor}) => {
    return (
        <div className="highlight-card" style={{'--highlight-card-accent-color': accentColor}}>
            {children}
        </div>
    )
}

export default HighlightCard;
