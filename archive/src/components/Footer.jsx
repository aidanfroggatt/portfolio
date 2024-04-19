import React from "react";
import '../styles/components/Footer.css';
import wave from '../assets/components/footer-wave.svg';
import {AppInfo} from "../info/AppInfo";

const Footer = ({experienceRef, projectsRef, skillsRef}) => {
    const handleClick = (page) => {
        let ref = null
        switch (page){
            case "Experience":
                ref = experienceRef
                break
            case "Projects":
                ref = projectsRef
                break
            case "Skills":
                ref = skillsRef
                break
            default:
                break
        }
        if (ref && ref.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };
    return (
        <div className="footer">
            <div className="wave-overlay-container">
                <img className="wave-overlay" src={wave} alt="wave overlay image"/>
            </div>
            <div className="footer-content">
                <div className="thanks">
                    Thanks for visiting!
                </div>
                <div className="footer-column-pages">
                    {
                        Object.keys(AppInfo.pages).map((page, index) => {
                            if (page === "AboutMe") return null
                            return (
                                <div
                                    className={"footer-page"}
                                    key={index}
                                    onClick={() => handleClick(page)}
                                >
                                    {page}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="footer-column-social-media">
                    {
                        Object.keys(AppInfo.socialMedia).map((socialMedia, index) => {
                            return (
                                <a className="footer-social-media-icon"
                                   href={AppInfo.socialMedia[socialMedia].url}
                                   target="_blank"
                                   rel="noreferrer"
                                   key={index}
                                >
                                    {AppInfo.socialMedia[socialMedia].icon}
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer;
