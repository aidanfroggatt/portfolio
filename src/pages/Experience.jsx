import React from 'react';
import '../styles/Experience.css';
import {AppInfo} from "../info/AppInfo";

const Experience = () => {

    return (
        <div className="landing-page">
            <h1>{AppInfo.pages.Experience.name}</h1>
            <h2>{AppInfo.pages.Experience.description}</h2>
        </div>
    )
}

export default Experience;
