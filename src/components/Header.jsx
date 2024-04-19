import LilypadIcon from "../assets/LilypadIcon.jsx";
import {useLocation, useNavigate} from "react-router-dom";

const Header = () => {
    const location = useLocation(); // Get current location
    const navigate = useNavigate(); // Get navigate function

    const handleNavigate = (destination) => {
        navigate(destination);
    }

    return (
        <div className="flex flex-row fixed justify-center items-center h-20 w-full p-12 text-custom-light z-50">
            <div className="flex flex-row gap-x-2 items-center fixed left-8">
                <LilypadIcon className={"w-8 h-8"}/>
                <div className="flex flex-col">
                    <text className="font-semibold text-md">Aidan Froggatt</text>
                    <text className="text-xs text-custom-light text-opacity-50">Frontend Developer</text>
                </div>
            </div>
            <div className="flex justify-center items-center font-medium bg-custom-light w-44 h-12 rounded-full bg-opacity-10 text-sm border border-opacity-10 border-custom-light backdrop-blur hover:border-opacity-20">
                <div
                    className={`${'/' === location.pathname && 'bg-custom-light bg-opacity-10'} flex justify-center items-center w-20 h-9 rounded-full hover:cursor-pointer`}
                    onClick={() => handleNavigate('/')}
                >
                    <text>Work</text>
                    {'/' === location.pathname && <div className="absolute top-0 transform -mt-0.5 w-6 h-0.5 rounded-t-full bg-custom-light"></div>}
                </div>
                <div
                    className={`${'/info' === location.pathname && 'bg-custom-light bg-opacity-10'} flex justify-center items-center w-20 h-9 rounded-full hover:cursor-pointer`}
                    onClick={() => handleNavigate('/info')}
                >
                    <text>Info</text>
                    {'/info' === location.pathname && <div className="absolute top-0 transform -mt-0.5 w-6 h-0.5 rounded-t-full bg-custom-light"></div>}
                </div>
            </div>
            <div className="flex font-medium fixed right-8">
                <a className="text-sm px-3 py-2 hover:bg-custom-light hover:bg-opacity-10 rounded-full" href="https://www.linkedin.com/in/aidanfroggatt/" target="_blank"
                   rel="noopener noreferrer">LinkedIn</a>
                <a className="text-sm px-3 py-2 hover:bg-custom-light hover:bg-opacity-10 rounded-full" href="" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
        </div>
    )
}

export default Header;
