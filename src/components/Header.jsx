import LilypadIcon from "../assets/LilypadIcon.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {GeneralInfoContext} from "../contexts/GeneralInfoContext.jsx";
import {motion} from "framer-motion";
import IconMenu from "./IconMenu.jsx";
import {FiAtSign, FiX} from "react-icons/fi";
import {TfiArrowTopRight} from "react-icons/tfi";

/**
 * @author Aidan Froggatt
 * @description Header component
 * @returns {JSX.Element|null} Header component
 */
const Header = () => {
    const location = useLocation(); // Get current location
    const navigate = useNavigate(); // Get navigate function
    const generalInfo = useContext(GeneralInfoContext);

    const handleNavigate = (destination) => {
        navigate(destination);
    }

    if (!generalInfo) { return null }

    const tabVariants = {
        initial: { x: 0 },
        center: { x: 0 },
    };

    const direction = location.pathname === '/' ? 'infoToWork' : 'workToInfo';

    return (
        <div className="bg-header-mobile md:bg-header flex flex-row fixed justify-center items-center w-full px-14 py-8 text-custom-light z-50">
            <div className="flex flex-row gap-x-2 items-center fixed sm:left-12 left-6">
                <LilypadIcon className={"w-9 h-9"}/>
                <div className="hidden md:flex flex-col">
                    {(generalInfo.firstName && generalInfo.lastName) && <div className="font-semibold text-md">{generalInfo.firstName} {generalInfo.lastName}</div>}
                    {generalInfo.currentRole.title && <div className="text-xs text-custom-light text-opacity-50">{generalInfo.currentRole.title}</div>}
                </div>
            </div>
            <div className="flex justify-center items-center font-medium bg-custom-light w-44 h-12 rounded-full bg-opacity-5 text-sm border border-opacity-10 border-custom-light backdrop-blur hover:border-opacity-20">
                <div
                    className={`relative ${'/' === location.pathname ? 'bg-custom-light bg-opacity-10' : ''} flex justify-center items-center w-20 h-9 rounded-full hover:cursor-pointer`}
                    onClick={() => handleNavigate('/')}
                >
                    <div>Work</div>
                    {location.pathname === '/' && (
                        <motion.div
                            layoutId="underline"
                            initial="initial"
                            animate="center"
                            variants={tabVariants}
                            custom={direction}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="shadow-tab fixed top-0 transform -mt-0.5 w-6 h-0.5 rounded-t-full bg-custom-light"
                        />
                    )}
                </div>
                <div
                    className={`relative ${'/info' === location.pathname ? 'bg-custom-light bg-opacity-10' : ''} flex justify-center items-center w-20 h-9 rounded-full hover:cursor-pointer`}
                    onClick={() => handleNavigate('/info')}
                >
                    <div>Info</div>
                    {location.pathname === '/info' && (
                        <motion.div
                            layoutId="underline"
                            initial="initial"
                            animate="center"
                            variants={tabVariants}
                            custom={direction}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="shadow-tab fixed top-0 transform -mt-0.5 w-6 h-0.5 rounded-t-full bg-custom-light"
                        />
                    )}
                </div>
            </div>
            <div className="hidden md:flex font-medium fixed right-12">
                {generalInfo.links && generalInfo.links.map((link, index) => {
                    return (
                        <a
                            key={index}
                            className="flex flex-row justify-start items-center text-sm px-3 py-2 gap-x-1 hover:bg-custom-light hover:bg-opacity-10 rounded-full"
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {link.name}
                            <TfiArrowTopRight/>
                        </a>
                    )
                })}
            </div>
            <div className="fixed sm:right-12 right-6 md:hidden flex">
                <IconMenu initialIcon={<FiX className="w-9 h-9"/>} toggleIcon={<FiAtSign className="w-9 h-9"/>} menuOptions={generalInfo.links}/>
            </div>
</div>
)
}

export default Header;
