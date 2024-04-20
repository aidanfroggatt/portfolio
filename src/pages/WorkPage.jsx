import MacWindowCard from "../components/MacWindowCard.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import {useNavigate} from "react-router-dom";

const WorkPage = () => {
    const navigate = useNavigate()
    const handleProjectClick = ({projectID}) => {
        navigate(`/project/${projectID}`);
    }
    return (
        <div className="min-h-screen flex flex-col justify-evenly items-center bg-custom-dark text-custom-light" style={{paddingTop: '25vh', paddingBottom: '25vh', gap: '7.5vh'}}>
            <MacWindowCard/>
            <ProjectCard
                title="SnapCycle"
                association="MacHacks3"
                description="AI recylability detection"
                handleClick={() => handleProjectClick({projectID: 'snapcycle'})}
            />
        </div>
    )
}

export default WorkPage;
