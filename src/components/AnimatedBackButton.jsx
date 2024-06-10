import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {FaArrowLeftLong} from "react-icons/fa6";
import PropTypes from "prop-types";

/**
 * @author Aidan Froggatt
 * @description Animated back button component
 * @param className {string} Additional classes/tailwind styling to apply to the button
 * @returns {JSX.Element} Animated back button
 */
const AnimatedBackButton = ({className}) => {
    const navigate = useNavigate();
    const [isBackClicked, setIsBackClicked] = useState(false);

    useEffect(() => {
        if (isBackClicked) {
            const timer = setTimeout(() => {
                navigate('/');
            }, 0); // Duration of the exit animation
            return () => clearTimeout(timer);
        }
    }, [isBackClicked, navigate]);

    const handleBack = () => {
        setIsBackClicked(true);
    };

    return (
        <motion.div
            initial={{y: -100, opacity: 0}}
            animate={{
                y: 0,
                opacity: 1,
                transition: {duration: 0.5, ease: 'easeInOut'}
            }}
            exit={{
                y: -100,
                opacity: 0,
                transition: {duration: 0.25, ease: 'easeInOut'}
            }}
            className={`cursor-pointer min-w-20 min-h-8 flex flex-row gap-x-2 items-center px-4 py-2 bg-custom-light bg-opacity-10 border-custom-light border border-opacity-20 rounded-full hover:bg-opacity-30 transition-all duration-300 ease-in-out z-50 ${className}`}
            onClick={handleBack}
        >
            <FaArrowLeftLong className="left"/>
            Back
        </motion.div>
    )
}

AnimatedBackButton.propTypes = {
    className: PropTypes.string.isRequired,
}

export default AnimatedBackButton;