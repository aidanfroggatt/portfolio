import React from "react";
import '../styles/Navbar.css';
import {AppInfo} from "../info/AppInfo";
import {useNavigate} from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
    const goToDestination = (destination) => {
        navigate(destination)
    }

    return (
        <div className="navbar">
            <div className="my-name-container">
                <div className="my-name" onClick={() => goToDestination(AppInfo.landingPage.route)}>
                    {AppInfo.name}
                </div>
            </div>
            <div className="page-container">
                {
                    AppInfo.pages.map((page, index) => {
                        return (
                            <div className="page" key={index} onClick={() => goToDestination(page.route)}>
                                {page.name}
                            </div>
                        )
                    })
                }
            </div>
            <div className="social-media-container">
                {
                    AppInfo.socialMedia.map((socialMedia, index) => {
                        return (
                            <a className="social-media-icon" key={index} href={socialMedia.url} target="_blank">
                                {socialMedia.icon}
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Navbar;
