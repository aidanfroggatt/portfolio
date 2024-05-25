import '../styles/components/Card.css'

const Card = ({ className, children }) => {
    return (
        <div className="card-container shadow-card ">
            <div className={`card ${className}`}>
                {children}
            </div>
        </div>
    )
}

export default Card;
