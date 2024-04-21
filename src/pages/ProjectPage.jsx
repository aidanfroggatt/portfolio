import '../styles/pages/ProjectPage.css';
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getDataFromFirestore} from "../utils/firestoreUtils.js";
import {hexToRGBA} from "../utils/colorUtils.js";
import Button from "../components/Button.jsx";
import Loading from "../components/Loading.jsx";
import {ScrollToTop} from "../utils/scrollUtils.js";

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
        const MIN_TIMEOUT_DURATION = 500; // Minimum timeout duration in milliseconds
        let fetchDataTimer;

        // Function to fetch data from Firestore
        const fetchData = async () => {
            const startTime = Date.now(); // Record the start time of fetching data
            const data = await getDataFromFirestore({ collectionName: 'projects', documentId: projectId });
            const elapsedTime = Date.now() - startTime; // Calculate elapsed time

            // If elapsed time is less than minimum timeout duration, calculate the remaining time
            const remainingTime = Math.max(0, MIN_TIMEOUT_DURATION - elapsedTime);

            // Set timeout to update state with fetched data after either the minimum duration or when fetching completes
            fetchDataTimer = setTimeout(() => {
                setProjectInfo(transformData(data));
                setIsLoading(false);
            }, remainingTime);
        };

        // Call fetchData function
        fetchData();

        // Cleanup function to clear timeout if component unmounts or effect re-runs
        return () => {
            clearTimeout(fetchDataTimer);
        };
    }, [projectId]); // Make sure to include projectId in dependencies if it's used inside the effect


    return (
        isLoading ? <Loading/> :
            <>
                <ScrollToTop/>
                <div
                    className='project-page min-h-screen bg-custom-dark flex justify-center items-center text-custom-light'
                    style={{'--project-color': hexToRGBA(projectInfo.color, 0.5)}}>
                    <div
                        className={`fixed flex flex-row justify-center items-center top-0 left-0 h-20 p-12 ${isBackClicked && 'slide-off'}`}>
                        <Button title="Back" leftArrow={true} handleClick={handleBack}/>
                    </div>
                    <div>{projectInfo.title}</div>
                </div>
            </>
    )
}

export default ProjectPage;
