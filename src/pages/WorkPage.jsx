import MacWindowCard from "../components/MacWindowCard.jsx";
import ProjectCard from "../components/ProjectCard.jsx";

const WorkPage = () => {

    return (
        <div className="min-h-screen flex flex-col justify-evenly items-center bg-custom-dark text-custom-light">
            <MacWindowCard/>
            <ProjectCard/>
        </div>
    )
}

export default WorkPage;
