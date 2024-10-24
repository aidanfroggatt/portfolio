import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import { TfiArrowTopRight } from "react-icons/tfi";
import LilypadIcon from "~/assets/LilypadIcon";
import { routes, socials } from "~/data/general";
import { getLastCommitInfo } from "~/utils/GitHub";
import { getFirstWord } from "~/utils/String";

const Footer = () => {
    interface CommitInfo {
        time: string;
        author: string;
    }
    
    const [lastCommit, setLastCommit] = useState<CommitInfo | null>(null);

    useEffect(() => {
        getLastCommitInfo().then((data) => setLastCommit(data));
    }, []);

    return (
        <footer className="flex justify-center items-center relative bottom-0 bg-custom-dark text-custom-light border-t border-opacity-10 border-custom-light 2xl:h-96 md:h-80 2xl:py-20 py-16">
            <div className="h-full justify-evenly items-center flex flex-col md:grid md:grid-cols-2 2xl:w-page-2xl lg:w-page-lg md:w-page-md w-page-default gap-y-8">
                <div className="flex flex-row justify-start md:justify-end items-start gap-x-16 w-full h-full row-start-1 col-start-2">
                    <nav className="flex flex-col justify-center items-start gap-y-4">
                        <div className="text-xs 2xl:text-sm text-custom-light text-opacity-50">MAIN</div>
                        {routes &&
                            routes.map((route, index) => (
                                <Link
                                    key={index}
                                    className="text-base font-medium 2xl:text-lg hover:cursor-pointer"
                                    to={route.to}
                                >
                                    {route.name}
                                </Link>
                            ))}
                    </nav>
                    <div className="flex flex-col justify-center items-start gap-y-4">
                        <div className="text-xs 2xl:text-sm text-custom-light text-opacity-50">CONTACT</div>
                        {socials &&
                            socials.map((social, index) => (
                                <Link
                                    key={index}
                                    className="flex flex-row justify-start items-center text-base 2xl:text-lg gap-x-1 font-medium"
                                    to={social.to}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {social.name}
                                    <TfiArrowTopRight />
                                </Link>
                            ))}
                    </div>
                </div>
                <div className="w-full md:flex hidden h-full flex-col items-start justify-start row-start-1 col-start-1">
                    <LilypadIcon className="w-20 h-20 2xl:h-24 2xl:w-24 hover:rotate-[360deg] transition-all duration-500 ease-in-out" />
                </div>
                <div className="col-start-1 row-start-2 w-full h-full flex flex-col justify-end items-start">
                    <div className="font-medium text-base 2xl:text-lg">Aidan Froggatt</div>
                    <div className="text-sm 2xl:text-base text-custom-light text-opacity-50">Thanks for visiting!</div>
                </div>
                <div className="col-start-2 row-start-2 flex flex-col h-full w-full items-start md:items-end justify-end">
                    <div className="text-xs 2xl:text-sm text-custom-light text-opacity-50">
                        {!lastCommit ? 'Loading...' : lastCommit ? `Last updated by ${getFirstWord(lastCommit.author)} on ${lastCommit.time}` : 'No commits found'}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
