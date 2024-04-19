import LilypadIcon from "../assets/LilypadIcon.jsx";
import ArrowLink from "./ArrowLink.jsx";
import {useLocation, useNavigate} from "react-router-dom";


const Header = () => {
    const location = useLocation(); // Get current location
    const navigate = useNavigate(); // Get navigate function

    const handleNavigate = (destination) => {
        navigate(destination);
    }

    return (
        <div className="flex flex-row fixed justify-between items-center h-20 w-full p-12 text-custom-light">
            <div className="flex flex-row gap-x-2">
                <LilypadIcon className={"w-10 h-10"}/>
                <div className="flex flex-col">
                    <text className="font-semibold text-md">Aidan Froggatt</text>
                    <text className="text-xs text-gray-500">Frontend Developer</text>
                </div>
            </div>
            <div className="flex justify-center items-center font-medium bg-white p-1.5 rounded-full bg-opacity-10 text-sm border border-opacity-10 border-white backdrop-blur hover:border-opacity-20">
                <div
                    className={`${'/' === location.pathname && 'bg-white bg-opacity-10'} flex justify-center items-center px-6 py-2 rounded-full hover:cursor-pointer`}
                    onClick={() => handleNavigate('/')}
                >
                    <text>Work</text>
                    {'/' === location.pathname && <div className="absolute top-0 transform -mt-0.5 w-6 h-0.5 rounded-t-full bg-custom-light"></div>}
                </div>
                <div
                    className={`${'/info' === location.pathname && 'bg-white bg-opacity-10'} flex justify-center items-center px-6 py-2 rounded-full hover:cursor-pointer`}
                    onClick={() => handleNavigate('/info')}
                >
                    <text>Info</text>
                    {'/info' === location.pathname && <div className="absolute top-0 transform -mt-0.5 w-6 h-0.5 rounded-t-full bg-custom-light"></div>}
                </div>
            </div>
            <div className="flex font-medium">
                <ArrowLink destination="https://www.linkedin.com/in/aidanfroggatt/" title="LinkedIn"/>
                <ArrowLink destination="" title="Resume"/>
            </div>
        </div>
    )
}

export default Header;
