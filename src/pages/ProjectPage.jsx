import '../styles/pages/ProjectPage.css';
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {storage} from "../config/firebase.config.js";
import {getDownloadURL, ref} from "firebase/storage";
import {getDataFromFirestore} from "../utils/firestoreUtils.js";
import {hexToRGBA} from "../utils/colorUtils.js";
import Button from "../components/Button.jsx";
import Loading from "../components/Loading.jsx";
import {SiFirebase, SiReact, SiTailwindcss, SiVite} from "react-icons/si";
import Tooltip from "../components/Tooltip.jsx";
import {calculateTimeElapsed, convertFirestoreTimestampToJSDate, formatMonthYear} from "../utils/dateTimeUtils.js";
import HighlightCard from "../components/HighlightCard.jsx";
import {FaSeedling} from "react-icons/fa";
import VideoPlayer from "../components/VideoPlayer.jsx";

const ProjectPage = () => {
    const {projectId} = useParams();
    const [projectInfo, setProjectInfo] = useState();
    const [isBackClicked, setIsBackClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    const transformData = (data) => {
        const userInfo = data[projectId];
        console.log('User Info:', userInfo)
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
            console.log('Project Info:', projectInfo)
        });
    }, []);

    // const storageRef = ref(storage, "gs://portfolio-aidan-froggatt.appspot.com/projects/burloak-insight/burloak_insight_hero.png");
    // const [videoURL, setVideoURL] = useState('');
    // getDownloadURL(storageRef).then((url) => {
    //     setVideoURL(url)
    //     console.log('Video URL:', videoURL)
    // }).catch((error) => {
    //     console.error('Error fetching image:', error);
    // });

    return (
        (isLoading || !projectInfo || !projectInfo.color) ? <Loading/> :
            <div
                className='project-page min-h-screen bg-custom-dark flex flex-col items-center text-custom-light'
                style={projectInfo.color ? {'--project-color': hexToRGBA(projectInfo.color, 0.5)} : {}}>
                <div
                    className={`fixed flex flex-row justify-center items-center top-0 left-0 h-20 p-12 ${isBackClicked && 'slide-off'}`}>
                    <Button title="Back" leftArrow={true} handleClick={handleBack}/>
                </div>

                <div className="flex flex-col justify-start items-center min-h-screen relative">
                    <div className="flex justify-center items-center project-page-title font-bold text-center">{projectInfo.title && projectInfo.title}</div>
                    <div className="flex justify-center items-center project-page-subtitle font-normal text-custom-light text-opacity-50 text-center">
                        {projectInfo.association && projectInfo.association} — {projectInfo.endDate && formatMonthYear(convertFirestoreTimestampToJSDate(projectInfo.endDate))}
                    </div>
                    { projectInfo.image &&
                        <img src={projectInfo.image.src} alt={projectInfo.image.alt} className="project-page-hero-image"/>
                    }
                </div>

                {(projectInfo.overview) &&
                    <div className="flex flex-row justify-center items-center min-h-screen w-full gap-x-16">
                        <div className="flex flex-col justify-start items-start w-1/2 gap-y-8">
                            {(projectInfo.overview.role.name || projectInfo.overview.role.description) &&
                                <div>
                                    <h2 className="text-sm text-custom-light font-bold mb-2">My Role</h2>
                                    <p className="text-md text-custom-light text-opacity-50">
                                        <span
                                            className="text-md text-custom-light">{projectInfo.overview.role.title}&nbsp;</span>
                                        — {projectInfo.overview.role.description}
                                    </p>
                                </div>
                            }
                            {(projectInfo.overview.team) &&
                                <div>
                                    <h2 className="text-sm text-custom-light font-bold mb-2">Team</h2>
                                    {projectInfo.overview.team.map((member, index) => (
                                        <p key={index}
                                           className="text-md text-custom-light text-opacity-50">{member.name}, {member.role}</p>
                                    ))}
                                </div>
                            }
                            {(projectInfo.overview.status && (projectInfo.endDate || projectInfo.startDate)) &&
                                <div>
                                    <h2 className="text-sm text-custom-light font-bold mb-2">Timeline & Status</h2>
                                    <div className="text-md text-custom-light text-opacity-50">
                                        <p className="text-md text-custom-light text-opacity-50">
                                            {calculateTimeElapsed((projectInfo.startDate), (projectInfo.endDate))},&nbsp;
                                            <span className="text-md text-custom-light">{projectInfo.overview.status}</span>
                                        </p>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="flex flex-col justify-between w-1/2 gap-y-8">
                            {(projectInfo.overview.overview) &&
                                <div className="flex flex-col h-full">
                                    <div className="text-sm text-custom-light font-bold mb-2">Overview</div>
                                    <div className="text-md text-custom-light text-opacity-50 flex-grow">
                                        {projectInfo.overview.overview}
                                    </div>
                                </div>
                            }
                            <div className="flex flex-row justify-start gap-x-8 items-center">
                                <Tooltip text="Firebase" backgroundColor={projectInfo.color}>
                                    <SiFirebase className="w-10 h-10"/>
                                </Tooltip>
                                <Tooltip text="Vite" backgroundColor={projectInfo.color}>
                                    <SiVite className="w-10 h-10"/>
                                </Tooltip>
                                <Tooltip text="ReactJS" backgroundColor={projectInfo.color}>
                                    <SiReact className="w-10 h-10"/>
                                </Tooltip>
                                <Tooltip text="TailwindCSS" backgroundColor={projectInfo.color}>
                                    <SiTailwindcss className="w-10 h-10"/>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                }

                {(projectInfo.highlights) &&
                    <HighlightCard accentColor={projectInfo.color}>
                        <div className="flex flex-col justify-between items-center gap-y-4">
                            <FaSeedling color={projectInfo.color} style={{width: '2.5vmax', height: '2.5vmax'}}/>
                            <p className="text-xs text-center text-custom-light font-bold text-opacity-50">
                                HIGHLIGHTS
                            </p>
                            <h1 className="text-center font-bold text-custom-light text-xl">
                                {projectInfo.highlightsDescription}
                            </h1>
                        </div>
                        { projectInfo.highlights.map((highlight, index) => (
                            <div key={index}>
                                <h2 className="text-sm text-custom-light text-opacity-50 font-bold mb-2">
                                    {highlight.asset.alt} {highlight.asset.type}
                                </h2>
                                {highlight.asset.type === 'video' ? (
                                    <VideoPlayer src={highlight.asset.src} loop={true} controls={false}/>
                                ) : highlight.asset.type === 'image' ? (
                                    <img src={highlight.asset.src} alt={highlight.asset.alt} />
                                ) : (
                                    <p>Invalid asset type: {highlight.asset.type}</p>
                                )}
                            </div>
                        ))}
                    </HighlightCard>
                }
            </div>
    )
}

export default ProjectPage;
