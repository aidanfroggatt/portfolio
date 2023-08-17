import React from "react";
import '../styles/Home.css';
import {AppInfo} from "../info/AppInfo";

const Home = () => {

    return (
        <div className='landing-page'>
            <h1>{AppInfo.landingPage.heading}</h1>
            <h2>{AppInfo.landingPage.description}</h2>
        </div>
    )
}

export default Home;
