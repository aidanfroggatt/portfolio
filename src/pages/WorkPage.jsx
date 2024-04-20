import '../styles/pages/WorkPage.css';
import MacWindowCard from "../components/MacWindowCard.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {getDataFromFirestore} from "../utils/firestoreUtils.js";
import {GeneralInfoContext} from "../contexts/GeneralInfoContext.jsx";

const WorkPage = () => {
    const generalInfo = useContext(GeneralInfoContext)
    const [projects, setProjects] = useState();

    const navigate = useNavigate()
    const handleProjectClick = ({projectID}) => {
        navigate(`/project/${projectID}`);
    }

    const getData = async ({collection, setData, fields=[], documentId}) => {
        try {
            const response = await getDataFromFirestore({collectionName: collection, fields: fields, documentId: documentId});
            setData(response);
        } catch (error) {console.error('Error fetching data:', error)}
    }

    useEffect(() => {
        getData({collection: 'projects', setData: setProjects}).then(r => console.log("Fetched projects"));
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-evenly items-center bg-custom-dark text-custom-light" style={{paddingTop: '25vh', paddingBottom: '25vh', gap: '7.5vh'}}>
            { generalInfo &&
                <MacWindowCard>
                    <div className="name-container">Hi, I'm&nbsp;<span className="name">{generalInfo.firstName}.</span></div>
                    <div className="additional-info-container">
                        <div className="job">{generalInfo.currentJob} at {generalInfo.currentCompany}.</div>
                        <div className="location">Based in {generalInfo.location}.</div>
                    </div>
                </MacWindowCard>
            }
            { projects ? Object.keys(projects).map((key) => (
                <ProjectCard
                    key={key}
                    title={projects[key].title}
                    association={projects[key].association}
                    description={projects[key].description}
                    image={projects[key].image}
                    imageAlt={projects[key].imageAlt}
                    handleClick={() => handleProjectClick({projectID: key})}
                />
                )) : <div>Loading...</div>
            }
        </div>
    )
}

export default WorkPage;
