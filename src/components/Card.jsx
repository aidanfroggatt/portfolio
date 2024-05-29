import '../styles/components/Card.css'

const Card = ({ cardContainerClassName, cardContentClassName, children }) => {
    return (
        <div className={`card-container shadow-card-mobile md:shadow-card ${cardContainerClassName}`}>
            <div className={`card ${cardContentClassName}`}>
                {children}
            </div>
        </div>
    )
}

export default Card;
