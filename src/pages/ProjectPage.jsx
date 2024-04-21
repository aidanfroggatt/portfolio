import '../styles/pages/ProjectPage.css';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getDataFromFirestore} from "../utils/firestoreUtils.js";
import {hexToRGBA} from "../utils/colorUtils.js";

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

    useEffect(() => {
        getDataFromFirestore({collectionName: 'projects', documentId: projectId}).then(data => setProjectInfo(transformData(data)));
    }, []);

    console.log(projectInfo);

    return (
        <div className="project-page min-h-screen bg-custom-dark flex justify-center items-center text-custom-light">
            test: {projectId}
        </div>
    )
}

export default ProjectPage;
