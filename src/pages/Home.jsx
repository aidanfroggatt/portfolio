import React, {useState} from "react";
import '../styles/pages/Home.css';
import {AppInfo} from "../info/AppInfo";
import AnimatedPage from "../animations/AnimatedPage";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Navbar from "../components/Navbar";

const Home = () => {
    const [experienceRef, setExperienceRef] = useState(null);
    const [projectsRef, setProjectsRef] = useState(null);

    return (
        <AnimatedPage>
            <Navbar experienceRef={experienceRef} projectsRef={projectsRef}/>
            <div className='landing-page'>
                <h1>{AppInfo.pages.AboutMe.heading}</h1>
                <h2>{AppInfo.pages.AboutMe.description}</h2>
            </div>
            <Experience setExperienceRef={setExperienceRef}/>
            <Projects setProjectsRef={setProjectsRef}/>
        </AnimatedPage>
    )
}

export default Home;
