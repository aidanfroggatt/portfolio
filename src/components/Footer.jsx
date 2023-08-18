import React from "react";
import '../styles/components/Footer.css';
import wave from '../assets/footer-wave.svg';
import {AppInfo} from "../info/AppInfo";
import {useLocation, useNavigate} from "react-router-dom";

const Footer = () => {
        const navigate = useNavigate()
        const location = useLocation()
        const goToDestination = (destination) => {
            navigate(destination)
            window.scroll(0, 0)
        }

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
                                        className={location.pathname.replaceAll("/", "") === page.toLowerCase() ? "footer-page footer-current" : "footer-page"}
                                        key={index}
                                        onClick={() => goToDestination(AppInfo.pages[page].route)}
                                    >
                                        {AppInfo.pages[page].name}
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
