import '../styles/components/Header.css';
import LilypadIcon from "../assets/LilypadIcon.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {GeneralInfoContext} from "../contexts/GeneralInfoContext.jsx";

const Header = () => {
    const location = useLocation(); // Get current location
    const navigate = useNavigate(); // Get navigate function
    const generalInfo = useContext(GeneralInfoContext);

    const handleNavigate = (destination) => {
        navigate(destination);
    }

    if (!generalInfo) {return null}
    return (
        <div className="flex flex-row fixed justify-center items-center h-20 w-full p-14 text-custom-light z-50">
            <div className="flex flex-row gap-x-2 items-center fixed left-12">
                <LilypadIcon className={"w-8 h-8"}/>
                <div className="flex flex-col">
                    {(generalInfo.firstName && generalInfo.lastName) && <div className="font-semibold text-md">{generalInfo.firstName} {generalInfo.lastName}</div>}
                    {generalInfo.currentJob && <div className="text-xs text-custom-light text-opacity-50">{generalInfo.currentJob}</div>}
                </div>
            </div>
            <div
                className="flex justify-center items-center font-medium bg-custom-light w-44 h-12 rounded-full bg-opacity-5 text-sm border border-opacity-10 border-custom-light backdrop-blur hover:border-opacity-20">
                <div
                    className={`${'/' === location.pathname && 'bg-custom-light bg-opacity-10'} flex justify-center items-center w-20 h-9 rounded-full hover:cursor-pointer`}
                    onClick={() => handleNavigate('/')}
                >
                    <div>Work</div>
                    {'/' === location.pathname && <div
                        className="tab absolute top-0 transform -mt-0.5 w-6 h-0.5 rounded-t-full bg-custom-light"></div>}
                </div>
                <div
                    className={`${'/info' === location.pathname && 'bg-custom-light bg-opacity-10'} flex justify-center items-center w-20 h-9 rounded-full hover:cursor-pointer`}
                    onClick={() => handleNavigate('/info')}
                >
                    <div>Info</div>
                    {'/info' === location.pathname && <div
                        className="tab absolute top-0 transform -mt-0.5 w-6 h-0.5 rounded-t-full bg-custom-light"></div>}
                </div>
            </div>
            <div className="flex font-medium fixed right-12">
                {generalInfo.github && <a className="text-sm px-3 py-2 hover:bg-custom-light hover:bg-opacity-10 rounded-full" href={generalInfo.github} target="_blank" rel="noopener noreferrer">Github</a>}
                {generalInfo.linkedIn && <a className="text-sm px-3 py-2 hover:bg-custom-light hover:bg-opacity-10 rounded-full" href={generalInfo.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
                {generalInfo.resume && <a className="text-sm px-3 py-2 hover:bg-custom-light hover:bg-opacity-10 rounded-full" href="" target="_blank" rel="noopener noreferrer">Resume</a>}
            </div>
        </div>

    )
}

    export default Header;
