import '../../styles/components/HighlightCard.css'

const HighlightCard = ({children, accentColor, className}) => {
    return (
        <div className={`highlight-card ${className}`} style={{'--highlight-card-accent-color': accentColor}}>
            {children}
        </div>
    )
}

export default HighlightCard;
