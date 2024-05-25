import '../styles/pages/WorkPage.css';
import '../styles/components/MacWindowCard.css';
import MacWindowCard from "../components/MacWindowCard.jsx";
import {useNavigate} from "react-router-dom";
import React, {useContext, useEffect, useState} from "react";
import {getDataFromFirestore} from "../utils/firestoreUtils.js";
import {GeneralInfoContext} from "../contexts/GeneralInfoContext.jsx";
import Header from "../components/Header.jsx";
import {hexToRGBA} from "../utils/colorUtils.js";
import Loading from "../components/Loading.jsx";
import {FaArrowRightLong} from "react-icons/fa6";
import ScrollToTop from "../components/ScrollToTop.jsx";
import {motion} from "framer-motion";

const ProjectCard = ({ title='Title', association='Association', description='Description', image, imageAlt, arrow=true, handleClick, color }) => {
    return (
        <div className="
            project-card-container
            flex justify-center items-center relative
            border-1 border-solid border-custom-light border-opacity-10 rounded-3xl p-2 bg-custom-light bg-opacity-4 shadow-card
            w-full h-[95vh] 2xl:w-work-card-2xl 2xl:h-work-card-2xl lg:w-work-card-lg lg:h-work-card-lg md:w-work-card-md md:h-work-card-md
            before:absolute before:top-0 before:left-0 before:w-full before:h-[0.15vh] before:z-10 before:rounded-3xl
        ">
            <div onClick={handleClick} className="project-card" style={{'--project-card-color': color}}>
                <div className="flex flex-col justify-start w-full 2xl:gap-y-4 2xl:m-10 gap-y-2 m-8">
                    <div className="2xl:text-4xl text-2xl font-extrabold">{title}</div>
                    <div className="2xl:text-xl text-base">{association}&nbsp;<span className="text-custom-light text-opacity-50">- {description}</span></div>
                    {arrow && <FaArrowRightLong className="2xl:text-4xl text-2xl absolute top-0 right-0 2xl:m-10 m-8 transition-transform duration-500 ease-linear"/>}
                    <img src={image} alt={imageAlt}
                         className="project-card-image flex justify-center items-center content-center bottom-[-150px] 2xl:bottom-[-200px] absolute left-1/2 transform -translate-x-1/2 h-full w-auto overflow-hidden"
                    />
                </div>
            </div>
        </div>
    )
}

const WorkPage = () => {
    const generalInfo = useContext(GeneralInfoContext)
    const [projects, setProjects] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate()
    const handleProjectClick = ({projectID}) => {
        navigate(`/${projectID}`);
    }

    useEffect(() => {
        getDataFromFirestore({collectionName: 'projects', fields: ['title', 'association', 'description', 'image', 'color']}).then(data => {
            setProjects(data);
            setIsLoading(false);
        });
    }, []);

    return (
        <>
            <Header/>
            <ScrollToTop/>
            {isLoading ? <Loading/> :
                <div
                    className="work-page gap-y-10 relative py-40 2xl:py-60 min-h-screen flex flex-col justify-evenly items-center bg-custom-dark text-custom-light">
                    {generalInfo &&
                        <motion.div
                            initial={{
                                y: 100,
                                opacity: 0,
                                backdropFilter: 'blur(0px)',
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                                backdropFilter: 'blur(40px)',
                                transition: {duration: 0.5, ease: 'easeInOut'}
                            }}
                            exit={{
                                opacity: 0,
                                backdropFilter: 'blur(0px)',
                                transition: {duration: 0.25, ease: 'easeInOut'}
                            }}>
                            <MacWindowCard>
                                <div className="font-bold text-left top-[30%] left-[15%] inline-block absolute text-7xl 2xl:text-8xl leading-[90%] tracking-[-2px]">Hi, I'm&nbsp;<span
                                    className="name italic font-accent">{generalInfo.firstName}.</span></div>
                                <div className="right-[15%] bottom-[35%] flex flex-col absolute text-custom-light text-lg 2xl:text-2xl">
                                    <div className="font-bold">{generalInfo.currentRole.title} at {generalInfo.currentRole.company.name}.</div>
                                    <div className="text-custom-light text-opacity-50">Based in {generalInfo.location}.</div>
                                </div>
                            </MacWindowCard>
                        </motion.div>
                    }
                    {projects && Object.keys(projects).map((key) => (
                        <ProjectCard
                            key={key}
                            title={projects[key].title}
                            association={projects[key].association}
                            description={projects[key].description}
                            image={projects[key].image.src}
                            imageAlt={projects[key].image.alt}
                            handleClick={() => handleProjectClick({projectID: key})}
                            color={hexToRGBA(projects[key].color, 0.5)}
                        />
                    ))}
                </div>
            }
        </>
    )
}

export default WorkPage;
