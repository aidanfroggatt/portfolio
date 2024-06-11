import LilypadIcon from "../assets/LilypadIcon.jsx";
import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {convertDateFormat} from "../utils/dateTimeUtils.js";
import {GeneralInfoContext} from "../contexts/GeneralInfoContext.jsx";
import {getLastCommitInfo} from "../utils/githubUtils.js";
import {getFirstWord} from "../utils/stringUtils.js";
import {TfiArrowTopRight} from "react-icons/tfi";

/**
 * @author Aidan Froggatt
 * @description Footer component
 * @returns {JSX.Element|null} Footer component
 */
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
        <div className="flex justify-center items-center relative bottom-0 bg-custom-dark text-custom-light border-t border-opacity-10 border-custom-light 2xl:h-96 md:h-80 2xl:py-20 py-16">
            <div className="h-full justify-evenly items-center flex flex-col md:grid md:grid-cols-2 2xl:w-page-2xl lg:w-page-lg md:w-page-md w-page-default gap-y-8">
                <div className="flex flex-row justify-start md:justify-end items-start gap-x-16 w-full h-full row-start-1 col-start-2">
                    <div className="flex flex-col justify-center items-start gap-y-4">
                        <div className="text-xs 2xl:text-sm text-custom-light text-opacity-50">MAIN</div>
                        <div className="text-base font-medium 2xl:text-lg hover:cursor-pointer"
                             onClick={() => handleNavigate("/")}>
                            Work
                        </div>
                        <div className="text-base font-medium 2xl:text-lg hover:cursor-pointer"
                             onClick={() => handleNavigate("/info")}>
                            Info
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-y-4">
                        <div className="text-xs 2xl:text-sm text-custom-light text-opacity-50">CONTACT</div>
                        {generalInfo.links && generalInfo.links.map((link, index) => {
                            return (
                                <a
                                    key={index}
                                    className="flex flex-row justify-start items-center text-base 2xl:text-lg gap-x-1 font-medium"
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
                </div>
                <div className="w-full md:flex hidden h-full flex-col items-start justify-start row-start-1 col-start-1">
                    <LilypadIcon className={"w-20 h-20 2xl:h-24 2xl:w-24"}/>
                </div>
                <div className="col-start-1 row-start-2 w-full h-full flex flex-col justify-end items-start">
                    {(generalInfo.firstName && generalInfo.lastName) && <div
                        className="font-medium text-base 2xl:text-lg">{generalInfo.firstName} {generalInfo.lastName}</div>}
                    <div className="text-sm 2xl:text-base text-custom-light text-opacity-50">Thanks for visiting!</div>
                </div>
                <div className="col-start-2 row-start-2 flex flex-col h-full w-full items-start md:items-end justify-end">
                    {lastCommit &&
                        <div className="text-xs 2xl:text-sm text-custom-light text-opacity-50">
                            Last updated by {getFirstWord(lastCommit.author)} on {convertDateFormat(lastCommit.time)}
                        </div>
                    }
                </div>
            </div>
        </div>

    )
}

export default Footer;
