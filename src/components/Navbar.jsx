import React, {useEffect, useState} from "react";
import '../styles/Navbar.css';
import {AppInfo} from "../info/AppInfo";
import {useLocation, useNavigate} from "react-router-dom";

const Navbar = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [navbar, setNavbar] = useState(false)
    const goToDestination = (destination) => {
        navigate(destination)
    }
    const changeBackground = () => {
        if (window.scrollY >= 66) setNavbar(true)
        else setNavbar(false)
    }
    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    }, [])

    return (
        <div className={navbar ? "navbar scrolled" : "navbar"}>
            <div className="navbar-my-name-container">
                <div className="navbar-my-name" onClick={() => goToDestination(AppInfo.pages.AboutMe.route)}>
                    {AppInfo.pages.AboutMe.name}
                </div>
            </div>
            <div className="navbar-page-container">
                {
                    Object.keys(AppInfo.pages).map((page, index) => {
                        if (page === "AboutMe") return null
                        return (
                            <div className={location.pathname.replaceAll("/", "") === page.toLowerCase() ? "navbar-page navbar-current" : "navbar-page"} key={index} onClick={() => goToDestination(AppInfo.pages[page].route)}>
                                {AppInfo.pages[page].name}
                            </div>
                        )
                    })
                }
            </div>
            <div className="navbar-social-media-container">
                {
                    Object.keys(AppInfo.socialMedia).map((socialMedia, index) => {
                        return (
                            <a className="navbar-social-media-icon"
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
    )
}

export default Navbar;
