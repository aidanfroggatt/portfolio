import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {TfiArrowTopRight} from "react-icons/tfi";

const IconMenu = ({ initialIcon, toggleIcon, menuOptions }) => {
    const [isToggled, setIsToggled] = useState(false);

    return (
        <>
            {IconMorph(initialIcon, toggleIcon, [isToggled, setIsToggled])}
            {MenuModal(menuOptions, isToggled)}
        </>
    );
};

const IconMorph = (initialIcon, toggleIcon, [isToggled, setIsToggled]) => {
    const handleClick = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div
            className={`flex justify-center items-center font-medium bg-custom-light w-12 h-12 rounded-full bg-opacity-5 text-sm border border-opacity-10 border-custom-light backdrop-blur`}
            onClick={handleClick}
            key={"icon-morph"}
        >
            <motion.div
                key={"icon-morph-motion"}
                animate={{rotate: isToggled ? 360 : 0}}
                transition={{duration: 0.5}}
            >
                {isToggled ? initialIcon : toggleIcon}
            </motion.div>
        </div>
    );
};

const MenuModal = (menuOptions, isToggled) => {
    return (
        <AnimatePresence key={"menu-modal-animate-presence"}>
            {isToggled &&
                <motion.div
                    key={"menu-modal-motion"}
                    className="absolute flex top-full w-32 mt-2 p-4 gap-y-4 right-0 flex-col justify-center items-start font-medium bg-custom-light rounded-xl bg-opacity-5 text-sm border border-opacity-10 border-custom-light backdrop-blur"
                    initial={{
                        opacity: 0,
                        scale: 0,
                        originX: 1,
                        originY: 0,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                            duration: 0.5, // Animation duration for the "in" transition
                        },
                    }}
                    exit={{
                        opacity: 0,
                        scale: 0,
                        transition: {
                            duration: 0.25, // Animation duration for the "out" transition
                        },
                    }}
                >
                    {Object.entries(menuOptions).map(([name, link], index) => {
                            return (
                                <div key={index} className="flex flex-row w-full justify-between items-center">
                                    <a
                                        className="flex flex-row justify-start items-center text-sm"
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {name}
                                    </a>
                                    <TfiArrowTopRight style={{height: "0.875rem", width: "auto"}}/>
                                </div>
                            )
                        }
                    )}
                </motion.div>
            }
        </AnimatePresence>
    );
};

export default IconMenu;
