import LilypadIcon from "../assets/LilypadIcon.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getLastUpdateTime} from "../utils/githubUtils.js";
import {convertDateFormat} from "../utils/dateTimeUtils.js";

const Footer = () => {
    const navigate = useNavigate();
    const handleNavigate = (destination) => {
        navigate(destination);
    }
    const [lastUpdate, setLastUpdate] = useState(null);

    useEffect(() => {
        const fetchLastCommit = async () => {
            const updateTime = await getLastUpdateTime();
            setLastUpdate(convertDateFormat(updateTime));
        };
        fetchLastCommit().then(r => console.log("Last commit fetched")).catch(e => console.log("Error fetching last commit"));
    }, []);


    return (
        <div className="relative bottom-0 bg-custom-dark text-custom-light border-t border-custom-light border-opacity-50 h-80 justify-evenly items-center flex flex-row py-20 px-40 gap-x-32">
            <div className="h-full w-full flex flex-col justify-between">
                <div className="flex h-full">
                    <LilypadIcon className={"w-20 h-20"}/>
                </div>
                <div className="flex flex-col h-full w-full justify-end items-start">
                    <div className="font-semibold text-md">Aidan Froggatt</div>
                    <div className="text-sm text-custom-light text-opacity-50">Thanks for visiting</div>
                </div>
            </div>
            <div className="h-full w-full flex flex-col justify-between items-end">
                <div className="flex flex-row justify-end items-start gap-x-16 w-full h-full">
                    <div className="flex flex-col justify-center items-center gap-y-4">
                        <div className="text-xs text-custom-light text-opacity-50">MAIN</div>
                        <div className="text-sm hover:cursor-pointer" onClick={() => handleNavigate("/")}>Work</div>
                        <div className="text-sm hover:cursor-pointer" onClick={() => handleNavigate("/info")}>Info</div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-y-4">
                        <div className="text-xs text-custom-light text-opacity-50">CONTACT</div>
                        <a className="text-sm" href="https://www.linkedin.com/in/aidanfroggatt/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a className="text-sm" href="" target="_blank" rel="noopener noreferrer">Resume</a>
                    </div>
                </div>
                <div className="flex flex-col h-full w-full items-end justify-end">
                    <div className="text-sm text-custom-light text-opacity-50">Last updated by Aidan, {lastUpdate}</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
