import React, {useEffect, useState} from "react";
import '../styles/components/Navbar.css';
import {AppInfo} from "../info/AppInfo";

const Navbar = ({experienceRef, projectsRef, skillsRef, handleScrollToHome}) => {
    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 66) setNavbar(true)
        else setNavbar(false)
    }
    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    }, [])

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
        <div className={navbar ? "navbar scrolled" : "navbar"}>
            <div className="navbar-my-name-container">
                <div className={"navbar-my-name"} onClick={handleScrollToHome}>
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
                                onClick={() => handleClick(page)}
                            >
                                {page}
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
