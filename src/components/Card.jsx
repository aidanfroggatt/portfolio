import '../styles/components/Card.css'

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
