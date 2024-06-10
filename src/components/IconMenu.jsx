import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {TfiArrowTopRight} from "react-icons/tfi";
import PropTypes from "prop-types";

/**
 * @author Aidan Froggatt
 * @description A menu component that toggles a list of links when clicked
 * @param {Object} props
 * @param {ReactNode} props.initialIcon The icon to display when the menu is closed
 * @param {ReactNode} props.toggleIcon The icon to display when the menu is open
 * @param {Object[]} props.menuOptions The links to display in the menu
 * @param {string} props.menuOptions[].name The name of the link
 * @param {string} props.menuOptions[].link The URL of the link
 * @returns {ReactNode} The IconMenu component
 */
const IconMenu = ({ initialIcon, toggleIcon, menuOptions }) => {
    const [isToggled, setIsToggled] = useState(false);

    return (
        <>
            {IconMorph(initialIcon, toggleIcon, [isToggled, setIsToggled])}
            {MenuModal(menuOptions, isToggled)}
        </>
    );
};

/**
 * @author Aidan Froggatt
 * @description A morphing icon component that toggles between two icons
 * @param {ReactNode} initialIcon The icon to display when the menu is closed
 * @param {ReactNode} toggleIcon The icon to display when the menu is open
 * @param {boolean} isToggled The state of the menu
 * @param {Function} setIsToggled The function to update the state of the menu
 * @returns {ReactNode} The IconMorph component
 */
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

/**
 * @author Aidan Froggatt
 * @description A modal component that displays a list of links
 * @param {Object[]} menuOptions The links to display in the menu
 * @param {string} menuOptions[].name The name of the link
 * @param {string} menuOptions[].link The URL of the link
 * @param {boolean} isToggled The state of the menu
 * @returns {ReactNode} The MenuModal component
 */
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
                    {menuOptions && menuOptions.map((link, index) => {
                        return (
                            <a
                                key={index}
                                className="flex flex-row w-full justify-between items-center"
                                href={link.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="flex flex-row justify-start items-center text-sm">
                                        {link.name}
                                </span>
                                <TfiArrowTopRight style={{height: "0.875rem", width: "auto"}}/>
                            </a>
                        )
                    })}
                </motion.div>
            }
        </AnimatePresence>
    );
};

export default IconMenu;
