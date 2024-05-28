import {FaArrowLeftLong, FaArrowRightLong} from "react-icons/fa6";

const Button = ({leftArrow, rightArrow, title, handleClick}) => {

    return (
        <div
            className="cursor-pointer min-w-20 min-h-8 flex flex-row gap-x-2 items-center px-4 py-2 bg-custom-light bg-opacity-10 border-custom-light border border-opacity-20 rounded-full hover:bg-opacity-30 transition-all duration-300 ease-in-out z-50"
            onClick={handleClick}
        >
            {leftArrow && <FaArrowLeftLong className="left"/>}
            {rightArrow && <FaArrowRightLong className="right"/>}
            {title}
        </div>
    )
}

export default Button;
