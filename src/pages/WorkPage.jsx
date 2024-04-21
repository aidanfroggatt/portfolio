import '../styles/pages/WorkPage.css';
import MacWindowCard from "../components/MacWindowCard.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {getDataFromFirestore} from "../utils/firestoreUtils.js";
import {GeneralInfoContext} from "../contexts/GeneralInfoContext.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {hexToRGBA} from "../utils/colorUtils.js";

const WorkPage = () => {
    const generalInfo = useContext(GeneralInfoContext)
    const [projects, setProjects] = useState();

    const navigate = useNavigate()
    const handleProjectClick = ({projectID}) => {
        navigate(`/${projectID}`);
    }

    useEffect(() => {
        getDataFromFirestore({collectionName: 'projects', fields: ['title', 'association', 'description', 'image', 'imageAlt', 'color']}).then(data => setProjects(data));
    }, []);

    return (
        <>
            <Header/>
            <div
                className="work-page min-h-screen flex flex-col justify-evenly items-center bg-custom-dark text-custom-light">
                {generalInfo &&
                    <MacWindowCard>
                        <div className="name-container">Hi, I'm&nbsp;<span
                            className="name">{generalInfo.firstName}.</span></div>
                        <div className="additional-info-container">
                            <div className="job">{generalInfo.currentJob} at {generalInfo.currentCompany}.</div>
                            <div className="location">Based in {generalInfo.location}.</div>
                        </div>
                    </MacWindowCard>
                }
                {projects && Object.keys(projects).map((key) => (
                    <ProjectCard
                        key={key}
                        title={projects[key].title}
                        association={projects[key].association}
                        description={projects[key].description}
                        image={projects[key].image}
                        imageAlt={projects[key].imageAlt}
                        handleClick={() => handleProjectClick({projectID: key})}
                        color={hexToRGBA(projects[key].color, 0.5)}
                    />
                ))}
            </div>
            <Footer/>
        </>
    )
}

export default WorkPage;
