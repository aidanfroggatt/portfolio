import '../styles/components/ProjectCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const Card = () => {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-header">
                    <div className="card-title">SnapCycle</div>
                    <div className="card-subtitle">MacHacks3&nbsp;<span className="card-subtitle-alt">- AI recyclability detection.</span></div>
                    <FontAwesomeIcon className="card-arrow" icon={faArrowRightLong}/>
                    <div className="image-container">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
