import React from "react";
import '../styles/Navbar.css';
import {AppInfo} from "../info/AppInfo";
import {useLocation, useNavigate} from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
    const goToDestination = (destination) => {
        navigate(destination)
    }

    const location = useLocation()

    return (
        <div className="navbar">
            <div className="my-name-container">
                <div className="my-name" onClick={() => goToDestination(AppInfo.pages.AboutMe.route)}>
                    {AppInfo.pages.AboutMe.name}
                </div>
            </div>
            <div className="page-container">
                {
                    Object.keys(AppInfo.pages).map((page, index) => {
                        if (page === "AboutMe") return null
                        console.log(location.pathname.replaceAll("/", ""), page.toLowerCase())
                        return (
                            <div className={location.pathname.replaceAll("/", "") === page.toLowerCase() ? "page-current" : "page"} key={index} onClick={() => goToDestination(AppInfo.pages[page].route)}>
                                {AppInfo.pages[page].name}
                            </div>
                        )
                    })
                }
            </div>
            <div className="social-media-container">
                {
                    Object.keys(AppInfo.socialMedia).map((socialMedia, index) => {
                        return (
                            <div className="social-media-icon" key={index} onClick={() => window.open(AppInfo.socialMedia[socialMedia].link, "_blank")}>
                                {AppInfo.socialMedia[socialMedia].icon}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Navbar;
