import React, { useState } from 'react';
import '../styles/components/HamburgerMenu.css';
import {AppInfo} from "../info/AppInfo";
import WhiteX from '../assets/components/WhiteX.svg';
import HamburgerIcon from '../assets/components/HamburgerMenu.svg';
import Logo from '../assets/logo.png';

const HamburgerMenu = () => {
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
        <div>
            <img src={HamburgerIcon} alt="Hamburger Icon" className='HamburgerIcon' onClick={() => updateHamburgerMenu()}/>
            <div className='HamburgerMenuContainer' id={showHamburgerMenu ? 'HamburgerMenuActive' : 'HamburgerMenuInactive'}>
                <div className='HamburgerMenu'>
                    <div className='BurgerTopContainer' id={ showHamburgerMenu ? 'BurgerTopContainerActive' : 'BurgerTopContainerInactive'}>
                        <div className='BurgerLogoAndName'>
                            <img src={Logo} alt="Aidan Froggatt Logo" className="HamburgerLogo"/>
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
                                        <a href={AppInfo.pages[key].link} className='HamburgerPageLink' onClick={() => updateHamburgerMenu()}>
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
    );
}

export default HamburgerMenu;
