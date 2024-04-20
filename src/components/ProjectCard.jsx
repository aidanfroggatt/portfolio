import '../styles/components/ProjectCard.css'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ title='Title', association='Association', description='Description', image, imageAlt, arrow=true, handleClick, color }) => {
    return (
        <div className="card-container">
            <div onClick={handleClick} className="card" style={{'--card-color': color}}>
                <div className="card-header">
                    <div className="title">{title}</div>
                    <div className="association">{association}&nbsp;<span className="description">- {description}</span></div>
                    {arrow && <FontAwesomeIcon className="card-arrow" icon={faArrowRightLong}/>}
                    <div className="image-container">
                        <img src={image} alt={imageAlt}/>
                    </div>
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
