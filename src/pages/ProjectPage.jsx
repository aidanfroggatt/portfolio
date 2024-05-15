import '../styles/pages/ProjectPage.css';
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {storage} from "../config/firebase.config.js";
import {getDownloadURL, ref} from "firebase/storage";
import {getDataFromFirestore} from "../utils/firestoreUtils.js";
import {hexToRGBA} from "../utils/colorUtils.js";
import Button from "../components/Button.jsx";
import Loading from "../components/Loading.jsx";
import Tooltip from "../components/Tooltip.jsx";
import {calculateTimeElapsed, convertFirestoreTimestampToJSDate, formatMonthYear} from "../utils/dateTimeUtils.js";
import HighlightCard from "../components/cards/HighlightCard.jsx";
import {FaSeedling} from "react-icons/fa";
import {getIconByName} from "../utils/iconUtils.jsx";

const ProjectPage = () => {
    const {projectId} = useParams();
    const [projectInfo, setProjectInfo] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const transformData = (data) => {
        const userInfo = data[projectId];
        return {
            userID: projectId,
            ...userInfo
        };
    };

    useEffect(() => {
        getDataFromFirestore({collectionName: 'projects', documentId: projectId}).then(data => {
            setProjectInfo(transformData(data));
            setIsLoading(false);
        });
    }, []);

    const storageRef = ref(storage, "gs://portfolio-aidan-froggatt.appspot.com/projects/snapcycle/snapcycle_award.png");
    const [videoURL, setVideoURL] = useState('');
    getDownloadURL(storageRef).then((url) => {
        setVideoURL(url)
        console.log('Video URL:', videoURL)
    }).catch((error) => {
        console.error('Error fetching image:', error);
    });

    return (
        (isLoading || !projectInfo || !projectInfo.color) ? <Loading/> :
            <div
                className='project-page min-h-screen bg-custom-dark flex flex-col items-center text-custom-light'
                style={projectInfo.color ? {'--project-color': hexToRGBA(projectInfo.color, 0.5)} : {}}>
                <ProjectPageBackButton/>
                <ProjectPageHero projectInfo={projectInfo}/>
                {(projectInfo.overview) && <ProjectPageOverview projectInfo={projectInfo}/>}
                {(projectInfo.highlights) && <ProjectPageHighlights projectInfo={projectInfo}/>}
            </div>
    )
}

const ProjectPageBackButton = () => {
    const navigate = useNavigate();
    const [isBackClicked, setIsBackClicked] = useState(false);
    const handleBack = () => {
        setIsBackClicked(true);
        setTimeout(() => {
            navigate('/')
        }, 500); // Adjust timing to match transition duration
    };

    return (
        <div
            className={`fixed flex flex-row justify-center items-center top-0 left-0 h-20 p-12 ${isBackClicked && 'slide-off'}`}>
            <Button title="Back" leftArrow={true} handleClick={handleBack}/>
        </div>
    )
}

const ProjectPageHero = ({projectInfo}) => {
    return (
        <div className="flex flex-col justify-start items-center min-h-screen relative">
            <div className="flex justify-center items-center project-page-title font-bold text-center">{projectInfo.title && projectInfo.title}</div>
            <div className="flex justify-center items-center project-page-subtitle font-normal text-custom-light text-opacity-50 text-center">
                {projectInfo.association && projectInfo.association} — {projectInfo.endDate && formatMonthYear(convertFirestoreTimestampToJSDate(projectInfo.endDate))}
            </div>
            { projectInfo.image &&
                <img src={projectInfo.image.src} alt={projectInfo.image.alt} className="project-page-hero-image"/>
            }
        </div>
    )
}

const ProjectPageOverview = ({projectInfo}) => {
    return (
        <div className="flex flex-col justify-center items-center h-screen w-full gap-x-16">
            <div className="flex flex-row h-fit justify-center items-center">
                <div className="flex flex-col justify-start items-start w-1/2 gap-y-8">
                    {(projectInfo.overview.role.name || projectInfo.overview.role.description) &&
                        <div>
                            <h2 className="project-page-overview-subtitle">My Role</h2>
                            <p className="project-page-overview-body">
                                <span
                                    className="project-page-overview-body-span">{projectInfo.overview.role.title}&nbsp;</span>
                                — {projectInfo.overview.role.description}
                            </p>
                        </div>
                    }
                    {(projectInfo.overview.team) &&
                        <div>
                            <h2 className="project-page-overview-subtitle">Team</h2>
                            {projectInfo.overview.team.map((member, index) => (
                                <p key={index}
                                   className="project-page-overview-body">{member.name}, {member.role}</p>
                            ))}
                        </div>
                    }
                    {(projectInfo.overview.status && (projectInfo.endDate || projectInfo.startDate)) &&
                        <div>
                            <h2 className="project-page-overview-subtitle">Timeline & Status</h2>
                            <p className="project-page-overview-body">
                                {calculateTimeElapsed((projectInfo.startDate), (projectInfo.endDate))},&nbsp;
                                <span
                                    className="project-page-overview-body-span">{projectInfo.overview.status}</span>
                            </p>
                        </div>
                    }
                </div>
                <div className="flex flex-col justify-start items-start h-full w-1/2 gap-y-8">
                    {(projectInfo.overview.overview) &&
                        <div className="flex flex-col">
                            <div className="project-page-overview-subtitle">Overview</div>
                            <div className="project-page-overview-body">
                                {projectInfo.overview.overview}
                            </div>
                        </div>
                    }
                    <div className="flex flex-row justify-start gap-x-8 items-center">
                        {projectInfo.overview.technologies.map((technology, index) => (
                            <Tooltip key={index} text={technology.name} backgroundColor={projectInfo.color}>
                                {getIconByName(technology.icon)}
                            </Tooltip>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const ProjectPageHighlights = ({projectInfo}) => {
    return (
        <HighlightCard accentColor={projectInfo.color}>
            <div className="flex flex-col justify-between items-center gap-y-4">
                <FaSeedling color={projectInfo.color} style={{width: '3vmax', height: '3vmax'}}/>
                <p className="project-page-highlights-title">
                    HIGHLIGHTS
                </p>
                <h1 className="project-page-highlights-subtitle">
                    {projectInfo.highlightsDescription}
                </h1>
            </div>
            {projectInfo.highlights.map((highlight, index) => (
                <div key={index} className="w-full flex flex-col">
                    {highlight.asset.type === 'video' ? (
                        <video src={highlight.asset.src} controls>
                            <source src={highlight.asset.src} type="video/mp4"/>
                        </video>
                    ) : highlight.asset.type === 'image' ? (
                        <img src={highlight.asset.src} alt={highlight.asset.alt}/>
                    ) : (
                        <p>Invalid asset type: {highlight.asset.type}</p>
                    )}
                    <h2 className="text-xs text-custom-light text-opacity-50 font-bold mt-2 text-end">
                        {highlight.asset.alt} {highlight.asset.type}
                    </h2>
                </div>
            ))}
        </HighlightCard>
    )
}

export default ProjectPage;
