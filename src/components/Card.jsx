import '../styles/components/Card.css'

const Card = ({ className, children }) => {
    return (
        <div className="card-container shadow-1 ">
            <div className={`card ${className}`}>
                {children}
            </div>
        </div>
    )
}

export default Card;
