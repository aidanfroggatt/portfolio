import React, {useRef, useState} from "react";
import '../styles/pages/Home.css';
import {AppInfo} from "../info/AppInfo";
import AnimatedPage from "../animations/AnimatedPage";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Navbar from "../components/Navbar";
import DownArrow from "../components/DownArrow";

const Home = () => {
    const [experienceRef, setExperienceRef] = useState(null);
    const [projectsRef, setProjectsRef] = useState(null);

    const scrollToHome = useRef(null);

    const handleScrollToHome = () => {
        if (scrollToHome.current) {
            scrollToHome.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <AnimatedPage>
            <Navbar experienceRef={experienceRef} projectsRef={projectsRef} handleScrollToHome={handleScrollToHome}/>
            <div ref={scrollToHome} className='landing-page'>
                <div className="home-heading">{AppInfo.pages.AboutMe.heading}</div>
                <div className="home-subheading">{AppInfo.pages.AboutMe.description}</div>
                <DownArrow/>
            </div>
            <Experience setExperienceRef={setExperienceRef}/>
            <Projects setProjectsRef={setProjectsRef}/>
        </AnimatedPage>
    )
}

export default Home;
