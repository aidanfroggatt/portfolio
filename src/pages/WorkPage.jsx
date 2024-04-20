import MacWindowCard from "../components/MacWindowCard.jsx";
import ProjectCard from "../components/ProjectCard.jsx";

const WorkPage = () => {

    return (
        <div className="min-h-screen flex flex-col justify-evenly items-center bg-custom-dark text-custom-light" style={{paddingTop: '25vh', paddingBottom: '25vh', gap: '7.5vh'}}>
            <MacWindowCard/>
            <ProjectCard title="SnapCycle" association="MacHacks3" description="AI recylability detection"/>
        </div>
    )
}

export default WorkPage;
