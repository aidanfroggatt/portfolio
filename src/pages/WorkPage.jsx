import MacWindowCard from "../components/MacWindowCard.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getDocs, collection} from "firebase/firestore";
import {firestore} from ".././config/firebase.config.js";

const WorkPage = () => {
    const navigate = useNavigate()
    const handleProjectClick = ({projectID}) => {
        navigate(`/project/${projectID}`);
    }

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjects = async () => {
            const querySnapshot = await getDocs(collection(firestore, 'projects'));
            const projectsData = [];
            querySnapshot.forEach((doc) => {
                projectsData.push({ id: doc.id, ...doc.data() });
            });
            setProjects(projectsData);
        }
        getProjects().then(r => console.log('projects fetched')).catch(e => console.error(e));
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-evenly items-center bg-custom-dark text-custom-light" style={{paddingTop: '25vh', paddingBottom: '25vh', gap: '7.5vh'}}>
            <MacWindowCard/>
            {
                projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        association={project.association}
                        description={project.description}
                        handleClick={() => handleProjectClick({projectID: project.id})}
                    />
                ))
            }
        </div>
    )
}

export default WorkPage;
