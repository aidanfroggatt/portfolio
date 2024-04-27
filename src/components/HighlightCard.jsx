import '../styles/components/HighlightCard.css'

const ProjectCard = ({children, accentColor}) => {
    return (
        <div className="highlight-card" style={{'--highlight-card-accent-color': accentColor}}>
            {children}
        </div>
    )
}

export default ProjectCard;
