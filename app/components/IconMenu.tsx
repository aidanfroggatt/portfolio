import { Link } from "@remix-run/react";
import { AnimatePresence, motion } from "framer-motion";
import {useState} from "react";
import {TfiArrowTopRight} from "react-icons/tfi";

interface IconMenuProps {
    initialIcon: JSX.Element;
    toggleIcon: JSX.Element;
    menuOptions: {name: string, to: string}[];
}

const IconMenu = ({ initialIcon, toggleIcon, menuOptions }: IconMenuProps) => {
    const [isToggled, setIsToggled] = useState(false);

    return (
        <>
            <IconMorph initialIcon={initialIcon} toggleIcon={toggleIcon} isToggled={isToggled} setIsToggled={setIsToggled} />
            <MenuModal menuOptions={menuOptions} isToggled={isToggled} />
        </>
    );
};

interface IconMorphProps {
    initialIcon: JSX.Element;
    toggleIcon: JSX.Element;
    isToggled: boolean;
    setIsToggled: (isToggled: boolean) => void;
}

const IconMorph = ({ initialIcon, toggleIcon, isToggled, setIsToggled }: IconMorphProps) => {
    const handleClick = () => {
        setIsToggled(!isToggled);
    };

    return (
        <button
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
        </button>
    );
};

interface MenuModalProps {
    menuOptions: {name: string, to: string}[];
    isToggled: boolean;
}

const MenuModal = ({isToggled, menuOptions}: MenuModalProps) => {
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
                            <Link
                                key={index}
                                className="flex flex-row w-full justify-between items-center"
                                to={link.to}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="flex flex-row justify-start items-center text-sm">
                                        {link.name}
                                </span>
                                <TfiArrowTopRight style={{height: "0.875rem", width: "auto"}}/>
                            </Link>
                        )
                    })}
                </motion.div>
            }
        </AnimatePresence>
    );
};

export default IconMenu;
    