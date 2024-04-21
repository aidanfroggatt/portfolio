import '../styles/pages/ProjectPage.css';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getDataFromFirestore} from "../utils/firestoreUtils.js";
import {hexToRGBA} from "../utils/colorUtils.js";
import Button from "../components/Button.jsx";

const ProjectPage = () => {
    const { projectId } = useParams();
    const [projectInfo, setProjectInfo] = useState();

    const transformData = (data) => {
        const userInfo = data[projectId];
        return {
            userID: projectId,
            ...userInfo
        };
    };

    const handleBack = () => {
        window.history.back();
    };

    useEffect(() => {
        getDataFromFirestore({collectionName: 'projects', documentId: projectId}).then(data => setProjectInfo(transformData(data)));
    }, []);

    if (!projectInfo) return null;

    return (
        <div className="project-page min-h-screen bg-custom-dark flex justify-center items-center text-custom-light" style={{'--project-color': hexToRGBA(projectInfo.color, 0.5)}}>
            <div className="fixed flex flex-row justify-center items-center top-0 left-0 h-20 p-12">
                <Button title="Back" leftArrow={true} handleClick={handleBack}/>
            </div>
            test: {projectId}
        </div>
    )
}

export default ProjectPage;
