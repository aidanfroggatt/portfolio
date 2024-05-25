import '../styles/pages/WorkPage.css';
import '../styles/components/MacWindowCard.css';
import MacWindowCard from "../components/MacWindowCard.jsx";
import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {getDataFromFirestore} from "../utils/firestoreUtils.js";
import {GeneralInfoContext} from "../contexts/GeneralInfoContext.jsx";
import Header from "../components/Header.jsx";
import {hexToRGBA} from "../utils/colorUtils.js";
import Loading from "../components/Loading.jsx";
import {FaArrowRightLong} from "react-icons/fa6";


const ProjectCard = ({ title='Title', association='Association', description='Description', image, imageAlt, arrow=true, handleClick, color }) => {
    return (
        <div className="
            project-card-container
            w-full h-[95vh] 2xl:w-work-card-2xl 2xl:h-work-card-2xl lg:w-work-card-lg lg:h-work-card-lg md:w-work-card-md md:h-work-card-md
        ">
            <div onClick={handleClick} className="project-card" style={{'--project-card-color': color}}>
                <div className="project-card-header">
                    <div className="project-card-title">{title}</div>
                    <div className="project-card-association">{association}&nbsp;<span className="project-card-description">- {description}</span></div>
                    {arrow && <FaArrowRightLong className="project-card-arrow"/>}
                    <img src={image} alt={imageAlt} className="project-card-image"/>
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
            {isLoading ? <Loading/> :
                <div
                    className="work-page min-h-screen flex flex-col justify-evenly items-center bg-custom-dark text-custom-light">
                    {generalInfo &&
                        <MacWindowCard>
                            <div className="font-bold text-left top-[30%] left-[15%] inline-block absolute text-7xl 2xl:text-8xl leading-[90%] tracking-[-2px]">Hi, I'm&nbsp;<span
                                className="name italic font-accent">{generalInfo.firstName}.</span></div>
                            <div className="right-[15%] bottom-[35%] flex flex-col absolute text-custom-light text-lg 2xl:text-2xl">
                                <div className="font-bold">{generalInfo.currentRole.title} at {generalInfo.currentRole.company.name}.</div>
                                <div className="text-custom-light text-opacity-50">Based in {generalInfo.location}.</div>
                            </div>
                        </MacWindowCard>
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
