import '../styles/pages/WorkPage.css';
import MacWindowCard from "../components/MacWindowCard.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getDataFromFirestore} from "../utils/firestoreUtils.js";

const WorkPage = () => {
    const navigate = useNavigate()
    const userId = 'b8L4VSxJtJd8gcNUqOfJ'
    const handleProjectClick = ({projectID}) => {
        navigate(`/project/${projectID}`);
    }

    const [projects, setProjects] = useState();
    const [generalInfo, setGeneralInfo] = useState();

    const getData = async ({collection, setData, fields, documentId}) => {
        try {
            const response = await getDataFromFirestore({collectionName: collection, fields: fields, documentId: documentId});
            setData(response);
        } catch (error) {console.error('Error fetching data:', error)}
    }

    useEffect(() => {
        getData({collection: 'general-info', setData: setGeneralInfo, fields: ['firstName', 'currentCompany', 'currentJob', 'location'], documentId: userId}).then(r => console.log("Fetched general info"));
        getData({collection: 'projects', setData: setProjects}).then(r => console.log("Fetched projects"));
    }, []);

    console.log(generalInfo)

    return (
        <div className="min-h-screen flex flex-col justify-evenly items-center bg-custom-dark text-custom-light" style={{paddingTop: '25vh', paddingBottom: '25vh', gap: '7.5vh'}}>
            <MacWindowCard>
                { generalInfo ? Object.keys(generalInfo).map((key) => (
                    <div key={key}>
                        <div className="name-container">Hi, I'm&nbsp;<span className="name">{generalInfo[key].firstName}.</span></div>
                        <div className="additional-info-container">
                            <text className="job">{generalInfo[key].currentJob} at {generalInfo[key].currentCompany}.</text>
                            <text className="location">Based in {generalInfo[key].location}.</text>
                        </div>
                    </div>
                    )) : <div>Loading...</div>
                }
            </MacWindowCard>
            { projects ? Object.keys(projects).map((key) => (
                <ProjectCard
                    key={key}
                    title={projects[key].title}
                    association={projects[key].association}
                    description={projects[key].description}
                    handleClick={() => handleProjectClick({projectID: key})}
                />
                )) : <div>Loading...</div>
            }
        </div>
    )
}

export default WorkPage;
