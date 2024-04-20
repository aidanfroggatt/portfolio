import '../styles/pages/ProjectPage.css';
import {useParams} from "react-router-dom";

const ProjectPage = () => {
    const { id } = useParams();

    return (
        <div className="project-page min-h-screen bg-custom-dark flex justify-center items-center text-custom-light">
            test: {id}
        </div>
    )
}

export default ProjectPage;
