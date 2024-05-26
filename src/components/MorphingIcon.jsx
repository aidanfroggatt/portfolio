import {useState} from "react";
import {motion} from "framer-motion";

const MorphingIcon = ({initialIcon, toggleIcon, className}) => {
    const [isToggled, setIsToggled] = useState(false);

    const handleClick = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div
            className={`md:hidden fixed sm:right-12 right-6 flex justify-center items-center font-medium bg-custom-light w-12 h-12 rounded-full bg-opacity-5 text-sm border border-opacity-10 border-custom-light backdrop-blur ${className}`}
            onClick={handleClick}
        >
            <motion.div
                animate={{ rotate: isToggled ? 360 : 0 }}
                transition={{ duration: 0.5 }}
            >
                {isToggled ?  initialIcon : toggleIcon}
            </motion.div>
        </div>
    );
};

export default MorphingIcon;
