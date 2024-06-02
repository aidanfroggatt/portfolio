import '../styles/components/HighlightCard.css'

/**
 * @author Aidan Froggatt
 * @description A card component with a coloured accent border
 * @param {Object} props
 * @param {string} props.accentColor The colour of the accent border
 * @param {string} props.className Additional classes to apply to the card
 * @param {ReactNode} props.children The content of the card
 * @returns {ReactNode} The HighlightCard component
 */
const HighlightCard = ({children, accentColor, className}) => {
    return (
        <div className={`highlight-card ${className}`} style={{'--highlight-card-accent-color': accentColor}}>
            {children}
        </div>
    )
}

export default HighlightCard;
