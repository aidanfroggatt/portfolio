import React, {useEffect, useState} from "react";
import '../styles/components/Navbar.css';
import {AppInfo} from "../info/AppInfo";
import {BrowserView, MobileView} from "react-device-detect";
import HamburgerIcon from "../assets/components/HamburgerMenu.svg";
import Logo from "../assets/logo.png";
import WhiteX from "../assets/components/WhiteX.svg";

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

    const hamburgerNavClick = (page) => {
        updateHamburgerMenu()
        if (page === "") return handleScrollToHome()
        handleClick(page)
    }

    const [showHamburgerMenu, setHamburgerMenu] = useState(false);

    const updateHamburgerMenu = () => {
        setHamburgerMenu(showHamburgerMenu => !showHamburgerMenu);
        SwitchScrollBar();
    };

    const SwitchScrollBar = () => {
        if (showHamburgerMenu) {
            document.body.style.overflow = 'auto';
            document.querySelector('#HamburgerMenuActive').style.overflow = 'hidden';
        }
        else {
            setTimeout(() => {
                document.body.style.overflow = 'hidden';
                document.querySelector('#HamburgerMenuActive').style.overflow = 'auto';
            }, 500 );
        }
    };

    return (
        <>
            <BrowserView>
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
            </BrowserView>
            <MobileView>
                <div className={"phone-navbar"}>
                    <div>
                        <img src={HamburgerIcon} alt="Hamburger Icon" className='HamburgerIcon' onClick={() => updateHamburgerMenu()}/>
                        <div className='HamburgerMenuContainer' id={showHamburgerMenu ? 'HamburgerMenuActive' : 'HamburgerMenuInactive'}>
                            <div className='HamburgerMenu'>
                                <div className='BurgerTopContainer' id={ showHamburgerMenu ? 'BurgerTopContainerActive' : 'BurgerTopContainerInactive'}>
                                    <div className='BurgerLogoAndName'>
                                        <img src={Logo} alt="Aidan Froggatt Logo" className="HamburgerLogo" onClick={() => hamburgerNavClick("")}/>
                                        <div className='BurgerTitleContainer'>
                                            <div className='cover' id={showHamburgerMenu && 'LogoActive'}></div>
                                        </div>
                                    </div>
                                    <img src={WhiteX} alt="Close Button" className='WhiteX' onClick={() => updateHamburgerMenu()}/>
                                </div>
                                <div className='HamburgerPages'>
                                    {
                                        Object.keys(AppInfo.pages).map((key, index) => {
                                            if (key === 'AboutMe') return;
                                            return (
                                                <div className='HamburgerPage' key={index}>
                                                    <a href={AppInfo.pages[key].link} className='HamburgerPageLink' onClick={() => hamburgerNavClick(key)}>
                                                        {key}
                                                    </a>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                                <div className="navbar-social-media-container-hamburger">
                                    {
                                        Object.keys(AppInfo.socialMedia).map((socialMedia, index) => {
                                            return (
                                                <a className="navbar-social-media-icon-hamburger"
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
                    </div>
                </div>
            </MobileView>
        </>

    )
}

export default Navbar;
