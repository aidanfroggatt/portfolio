import React from "react";
import '../styles/Navbar.css';
import {AppInfo} from "../info/AppInfo";

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="my-name-container">
                <div className="my-name">
                    Aidan Froggatt
                </div>
            </div>
            <div className="page-container">
                {
                    AppInfo.pages.map((page, index) => {
                        return (
                            <div className="page" key={index}>
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
                            <div className="social-media-icon" key={index}>
                                {socialMedia.name}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Navbar;
