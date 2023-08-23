import React, {useRef, useState} from "react";
import '../styles/pages/Home.css';
import {AppInfo} from "../info/AppInfo";
import AnimatedPage from "../animations/AnimatedPage";
import Experience from "./Experience";
import Projects from "./Projects";
import Navbar from "../components/Navbar";
import DownArrow from "../components/DownArrow";
import Skills from "./Skills";
import Footer from "../components/Footer";

const LandingPage = ({experienceRef, scrollToHome}) => {
    const handleClick = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };
    return (
        <div ref={scrollToHome} className='landing-page'>
            <div className="home-heading">{AppInfo.pages.AboutMe.heading}</div>
            <div className="home-subheading">{AppInfo.pages.AboutMe.description}</div>
            <div className="down-arrow-scroll-container" onClick={() => handleClick(experienceRef)}>
                <DownArrow/>
            </div>
        </div>
    )
}

const Home = () => {
    const [experienceRef, setExperienceRef] = useState(null);
    const [projectsRef, setProjectsRef] = useState(null);
    const [skillsRef, setSkillsRef] = useState(null);
    const scrollToHome = useRef(null);

    const handleScrollTo = (scrollTo) => {
        if (scrollTo.current) {
            scrollTo.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <AnimatedPage>
            <Navbar experienceRef={experienceRef} projectsRef={projectsRef} skillsRef={skillsRef} handleScrollToHome={() => handleScrollTo(scrollToHome)}/>
            <LandingPage experienceRef={experienceRef} scrollToHome={scrollToHome}/>
            <Experience setExperienceRef={setExperienceRef}/>
            <Projects setProjectsRef={setProjectsRef}/>
            <Skills setSkillsRef={setSkillsRef}/>
            <Footer experienceRef={experienceRef} projectsRef={projectsRef} skillsRef={skillsRef}/>
        </AnimatedPage>
    )
}

export default Home;
