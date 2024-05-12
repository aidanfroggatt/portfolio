import '../styles/components/Button.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeftLong, faArrowRightLong} from "@fortawesome/free-solid-svg-icons";

const Button = ({leftArrow, rightArrow, title, handleClick}) => {

    return (
        <div
            className="button cursor-pointer min-w-20 min-h-8 flex flex-row gap-x-2 items-center fixed left-12 px-4 py-2 bg-custom-light bg-opacity-10 border-custom-light border border-opacity-20 rounded-full hover:bg-opacity-30 transition-all duration-300 ease-in-out z-50"
            onClick={handleClick}
        >
            {leftArrow && <FontAwesomeIcon className="button-arrow left" icon={faArrowLeftLong}/>}
            {rightArrow && <FontAwesomeIcon className="button-arrow right" icon={faArrowRightLong}/>}
            {title}
        </div>
    )
}

export default Button;