import LilypadIcon from "../assets/LilypadIcon.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import {useContext, useState} from "react";
import { GeneralInfoContext } from "../contexts/GeneralInfoContext.jsx";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import {FaAt, FaTimes} from "react-icons/fa";
import MorphingIcon from "./MorphingIcon.jsx";

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
        <div className="flex flex-row fixed justify-center items-center h-20 w-full p-14 text-custom-light z-50">
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
                            className="shadow-tab absolute top-0 transform -mt-0.5 w-6 h-0.5 rounded-t-full bg-custom-light"
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
                            className="shadow-tab absolute top-0 transform -mt-0.5 w-6 h-0.5 rounded-t-full bg-custom-light"
                        />
                    )}
                </div>
            </div>
            <div className="hidden md:flex font-medium fixed right-12">
                {generalInfo.links && Object.keys(generalInfo.links).map((link, index) => (
                    <a
                        key={index}
                        className="flex flex-row justify-start items-center text-sm px-3 py-2 gap-x-1 hover:bg-custom-light hover:bg-opacity-10 rounded-full"
                        href={generalInfo.links[link]}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {link}
                        <FaArrowUpLong className="rotate-45" style={{ height: "0.875rem", width: "auto" }} />
                    </a>
                ))}
            </div>
            {/*<div className="md:hidden fixed sm:right-12 right-6 flex justify-center items-center font-medium bg-custom-light w-12 h-12 rounded-full bg-opacity-5 text-sm border border-opacity-10 border-custom-light backdrop-blur">*/}
            {/*    <FaAt className={"w-9 h-9"}/>*/}
            {/*</div>*/}
            <MorphingIcon initialIcon={<FaTimes className="w-9 h-9"/>} toggleIcon={<FaAt className="w-9 h-9"/>}/>
        </div>
    )
}

export default Header;
