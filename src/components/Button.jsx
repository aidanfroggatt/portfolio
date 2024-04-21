import '../styles/components/Button.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightLong, faArrowLeftLong} from "@fortawesome/free-solid-svg-icons";

const Button = ({leftArrow, rightArrow, title, handleClick}) => {

    return (
        <div className="button" onClick={handleClick}>
            {leftArrow && <FontAwesomeIcon className="button-arrow left" icon={faArrowLeftLong}/>}
            {rightArrow && <FontAwesomeIcon className="button-arrow right" icon={faArrowRightLong}/>}
            {title}
        </div>
    )
}

export default Button;
