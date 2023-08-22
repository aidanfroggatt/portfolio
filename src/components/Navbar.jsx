import React, {useEffect, useState} from "react";
import '../styles/components/Navbar.css';
import {AppInfo} from "../info/AppInfo";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)

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
                <div className={"navbar-my-name"} >
                    {AppInfo.pages.AboutMe.name}
                </div>
            </div>
            <div className="navbar-page-container">
                {
                    Object.keys(AppInfo.pages).map((page, index) => {
                        if (page === "AboutMe") return null
                        return (
                            <div
                                className={"navbar-page"}
                                key={index}
                            >
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
