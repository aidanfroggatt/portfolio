import '../styles/components/Card.css'

/**
 * @author Aidam Froggatt
 * @description Card Component
 * @param {string} cardContainerClassName - Class name for card container
 * @param {string} cardContentClassName - Class name for card content
 * @param {object} cardContainerStyle - Style for card container
 * @param {object} cardContentStyle - Style for card content
 * @param {function} onClick - Function to be called when card is clicked
 * @param {object} children - Child components to be rendered inside card
 * @returns {JSX.Element} - Card Component
 */
const Card = ({ cardContainerClassName, cardContentClassName, children, onClick, cardContainerStyle, cardContentStyle }) => {
    return (
        <div onClick={onClick} className={`card-container shadow-card-mobile md:shadow-card ${cardContainerClassName}`} style={cardContainerStyle}>
            <div className={`card ${cardContentClassName}`} style={cardContentStyle}>
                {children}
            </div>
        </div>
    )
}

export default Card;
