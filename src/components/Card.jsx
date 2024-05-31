import '../styles/components/Card.css'

const Card = ({ cardContainerClassName, cardContentClassName, children, onClick }) => {
    return (
        <div onClick={onClick} className={`card-container shadow-card-mobile md:shadow-card ${cardContainerClassName}`}>
            <div className={`card ${cardContentClassName}`}>
                {children}
            </div>
        </div>
    )
}

export default Card;
