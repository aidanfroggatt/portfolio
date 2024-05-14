import '../styles/components/Card.css'

const ProjectCard = ({ className, children }) => {
    return (
        <div className="card-container">
            <div className={`card ${className}`}>
                {children}
            </div>
        </div>
    )
}

export default ProjectCard;
