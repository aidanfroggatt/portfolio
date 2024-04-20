import '../styles/components/ProjectCard.css'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ title, association, description, image, imageAlt, arrow=true }) => {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-header">
                    <div className="title">{title}</div>
                    <div className="association">{association}&nbsp;<span className="description">- {description}.</span></div>
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
    title: PropTypes.string,
    association: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string | Blob | File,
    imageAlt: PropTypes.string,
    arrow: PropTypes.bool
}

export default ProjectCard;
