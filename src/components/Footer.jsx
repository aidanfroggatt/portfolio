import LilypadIcon from "../assets/LilypadIcon.jsx";
import {useNavigate} from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    const handleNavigate = (destination) => {
        navigate(destination);
    }
    return (
        <div className="relative bottom-0 bg-custom-dark text-custom-light border-t border-gray-500 h-80 justify-evenly items-center flex flex-row py-20 px-40 gap-x-32 select-none">
            <div className="h-full w-full flex flex-col justify-between">
                <div className="flex h-full">
                    <LilypadIcon className={"w-20 h-20"}/>
                </div>
                <div className="flex flex-col h-full w-full justify-end items-start">
                    <text className="font-semibold text-md">Aidan Froggatt</text>
                    <text className="text-sm text-gray-500">Thanks for visiting</text>
                </div>
            </div>
            <div className="h-full w-full flex flex-col justify-between items-end">
                <div className="flex flex-row justify-end items-start gap-x-16 w-full h-full">
                    <div className="flex flex-col justify-center items-center gap-y-4">
                        <text className="text-xs text-gray-500">MAIN</text>
                        <text className="text-sm hover:cursor-pointer" onClick={() => handleNavigate("/")}>Work</text>
                        <text className="text-sm hover:cursor-pointer" onClick={() => handleNavigate("/info")}>Info</text>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-y-4">
                        <text className="text-xs text-gray-500">CONTACT</text>
                        <a className="text-sm" href="https://www.linkedin.com/in/aidanfroggatt/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a className="text-sm" href="" target="_blank" rel="noopener noreferrer">Resume</a>
                    </div>
                </div>
                <div className="flex flex-col h-full w-full items-end justify-end">
                    <text className="text-sm text-gray-500">Last updated by Aidan, 2024-04-18</text>
                </div>
            </div>
        </div>
    )
}

export default Footer;
