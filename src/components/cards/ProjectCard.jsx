import '../../styles/components/ProjectCard.css'
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRightLong} from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ title='Title', association='Association', description='Description', image, imageAlt, arrow=true, handleClick, color }) => {
    return (
        <div className="project-card-container">
            <div onClick={handleClick} className="project-card" style={{'--project-card-color': color}}>
                <div className="project-card-header">
                    <div className="project-card-title">{title}</div>
                    <div className="project-card-association">{association}&nbsp;<span className="project-card-description">- {description}</span></div>
                    {arrow && <FontAwesomeIcon className="project-card-arrow" icon={faArrowRightLong}/>}
                    <img src={image} alt={imageAlt} className="project-card-image"/>
                </div>
            </div>
        </div>
    )
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    association: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    // image: PropTypes.string,
    imageAlt: PropTypes.string,
    arrow: PropTypes.bool,
    handleClick: PropTypes.func,
    color: PropTypes.string,
}

export default ProjectCard;
