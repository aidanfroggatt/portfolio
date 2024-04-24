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
            navigate('/')
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
                className='project-page min-h-screen bg-custom-dark flex flex-col items-center text-custom-light'
                style={{'--project-color': hexToRGBA(projectInfo.color, 0.5)}}>
                <div
                    className={`fixed flex flex-row justify-center items-center top-0 left-0 h-20 p-12 ${isBackClicked && 'slide-off'}`}>
                    <Button title="Back" leftArrow={true} handleClick={handleBack}/>
                </div>
                <div className="project-page-title font-bold">{projectInfo.title}</div>
                <div className="project-page-subtitle font-normal text-custom-light text-opacity-50">Burloak
                    Technologies — August 2023
                </div>
                <div className="flex justify-center items-center min-h-screen">
                    <img src={projectInfo.heroImage} alt="Project Hero" className=""/>
                </div>

                <div className="project-page-overview-container">
                    <div className="flex flex-col justify-between items-start gap-y-8 w-1/2">
                        <div className="">
                            <h2 className="text-sm text-custom-light">My Role</h2>
                            <p className="text-md text-custom-light text-opacity-50">Frontend Developer - Blah, blah,
                                blah!</p>
                        </div>
                        <div className="">
                            <h2 className="text-sm text-custom-light">Team</h2>
                            <p className="text-md text-custom-light text-opacity-50">Aidan Froggatt</p>
                            <p className="text-md text-custom-light text-opacity-50">John Doe</p>
                        </div>
                        <div className="">
                            <h2 className="text-sm text-custom-light">Timeline & Status</h2>
                            <p className="text-md text-custom-light text-opacity-50">Couple months n stuff</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <h2 className="text-sm text-custom-light">Overview</h2>
                        <p className="text-md text-custom-light text-opacity-50">Long description here...</p>
                    </div>
                </div>

                <div className="">
                    <h1>Technologies - make a card with icons for technologies</h1>
                </div>

                <div className="">
                    <h1>Highlights - make a long card with images and brief descriptions of key features</h1>
                </div>


            </div>
    )
}

export default ProjectPage;
