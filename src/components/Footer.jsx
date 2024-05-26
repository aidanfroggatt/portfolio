import LilypadIcon from "../assets/LilypadIcon.jsx";
import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {convertDateFormat} from "../utils/dateTimeUtils.js";
import {GeneralInfoContext} from "../contexts/GeneralInfoContext.jsx";
import {getLastCommitInfo} from "../utils/githubUtils.js";
import {getFirstWord} from "../utils/stringUtils.js";
import {TfiArrowTopRight} from "react-icons/tfi";

const Footer = () => {
    const generalInfo = useContext(GeneralInfoContext);

    const navigate = useNavigate();
    const handleNavigate = (destination) => {
        navigate(destination);
    }

    const [lastCommit, setLastCommit] = useState();

    useEffect(() => {
        getLastCommitInfo().then((commit) => {
            setLastCommit(commit);
        });
    }, []);

    if (!generalInfo) return null;
    return (
        <div className="relative bottom-0 bg-custom-dark text-custom-light border-t border-custom-light border-opacity-50 h-80 2xl:h-footer-2xl justify-evenly items-center flex flex-row p-10 lg:py-20 lg:px-40 2xl:px-60 2xl:py-24 lg:gap-x-32">
            <div className="h-full w-full flex flex-col justify-between">
                <div className="flex h-full">
                    <LilypadIcon className={"w-20 h-20 2xl:h-24 2xl:w-24"}/>
                </div>
                <div className="flex flex-col h-full w-full justify-end items-start">
                    {(generalInfo.firstName && generalInfo.lastName) && <div className="font-semibold text-base 2xl:text-lg">{generalInfo.firstName} {generalInfo.lastName}</div>}
                    <div className="text-sm 2xl:text-base text-custom-light text-opacity-50">Thanks for visiting!</div>
                </div>
            </div>
            <div className="h-full w-full flex flex-col justify-between items-end">
                <div className="flex flex-row justify-end items-start gap-x-16 w-full h-full">
                    <div className="flex flex-col justify-center items-start gap-y-4">
                        <div className="text-xs 2xl:text-sm text-custom-light text-opacity-50">MAIN</div>
                        <div className="text-base 2xl:text-lg hover:cursor-pointer" onClick={() => handleNavigate("/")}>Work</div>
                        <div className="text-base 2xl:text-lg hover:cursor-pointer" onClick={() => handleNavigate("/info")}>Info</div>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-y-4">
                        <div className="text-xs 2xl:text-sm text-custom-light text-opacity-50">CONTACT</div>
                        { generalInfo.links && Object.keys(generalInfo.links).map((link, index) => (
                                <a
                                    key={index}
                                    className="flex flex-row justify-start items-center text-base 2xl:text-lg gap-x-1"
                                    href={generalInfo.links[link]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {link}
                                    <TfiArrowTopRight style={{height: "0.875rem", width: "auto"}}/>
                                </a>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col h-full w-full items-end justify-end">
                    {lastCommit &&
                        <div className="text-xs 2xl:text-sm text-custom-light text-opacity-50">
                            Last updated by {getFirstWord(lastCommit.author)}, {convertDateFormat(lastCommit.time)}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer;
