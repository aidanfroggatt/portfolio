import '../styles/pages/ProjectPage.css';
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getDataFromFirestore} from "../utils/firestoreUtils.js";
import {hexToRGBA} from "../utils/colorUtils.js";
import Button from "../components/Button.jsx";
import Loading from "../components/Loading.jsx";

const ProjectPage = () => {
    const {projectId} = useParams();
    const [projectInfo, setProjectInfo] = useState();
    const [isBackClicked, setIsBackClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    const transformData = (data) => {
        const userInfo = data[projectId];
        return {
            userID: projectId,
            ...userInfo
        };
    };

    const handleBack = () => {
        setIsBackClicked(true);
        setTimeout(() => {
            navigate(-1)
        }, 500); // Adjust timing to match transition duration
    };

    useEffect(() => {
        getDataFromFirestore({collectionName: 'projects', documentId: projectId}).then(data => {
            setProjectInfo(transformData(data));
            setIsLoading(false);
        });
    }, []);

    return (
        isLoading ? <Loading/> :
            <div
                className='project-page min-h-screen bg-custom-dark flex justify-center items-center text-custom-light'
                style={{'--project-color': hexToRGBA(projectInfo.color, 0.5)}}>
                <div
                    className={`fixed flex flex-row justify-center items-center top-0 left-0 h-20 p-12 ${isBackClicked && 'slide-off'}`}>
                    <Button title="Back" leftArrow={true} handleClick={handleBack}/>
                </div>
                <div>{projectInfo.title}</div>
            </div>
    )
}

export default ProjectPage;
