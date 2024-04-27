import '../styles/pages/ProjectPage.css';
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getDataFromFirestore} from "../utils/firestoreUtils.js";
import {hexToRGBA} from "../utils/colorUtils.js";
import Button from "../components/Button.jsx";
import Loading from "../components/Loading.jsx";
import {SiFirebase, SiReact, SiTailwindcss, SiVite} from "react-icons/si";
import Tooltip from "../components/Tooltip.jsx";
import {calculateTimeElapsed, convertFirestoreTimestampToJSDate, formatMonthYear} from "../utils/dateTimeUtils.js";

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
                style={projectInfo.color ? {'--project-color': hexToRGBA(projectInfo.color, 0.5)} : {}}>
                <div
                    className={`fixed flex flex-row justify-center items-center top-0 left-0 h-20 p-12 ${isBackClicked && 'slide-off'}`}>
                    <Button title="Back" leftArrow={true} handleClick={handleBack}/>
                </div>

                <div className="">
                    <div className="project-page-title font-bold text-center">{projectInfo.title && projectInfo.title}</div>
                    <div className="project-page-subtitle font-normal text-custom-light text-opacity-50 text-center">
                        {projectInfo.association && projectInfo.association} — {projectInfo.endDate && formatMonthYear(convertFirestoreTimestampToJSDate(projectInfo.endDate))}
                    </div>
                    { projectInfo.image &&
                        <div className="flex justify-center items-center min-h-screen">
                            <img src={projectInfo.image.src} alt={projectInfo.image.alt} className=""/>
                        </div>
                    }
                </div>

                {(projectInfo.overview) &&
                    <div className="flex flex-row justify-between items-stretch w-full gap-x-16">
                        <div className="flex flex-col justify-between items-start w-1/2 gap-y-8">
                            {(projectInfo.overview.role.name || projectInfo.overview.role.description) &&
                                <div>
                                    <h2 className="text-sm text-custom-light">My Role</h2>
                                    <p className="text-md text-custom-light text-opacity-50">
                                        <span
                                            className="text-md text-custom-light">{projectInfo.overview.role.title}&nbsp;</span>
                                        — {projectInfo.overview.role.description}
                                    </p>
                                </div>
                            }
                            {(projectInfo.overview.team) &&
                                <div>
                                    <h2 className="text-sm text-custom-light">Team</h2>
                                    {projectInfo.overview.team.map((member, index) => (
                                        <p key={index}
                                           className="text-md text-custom-light text-opacity-50">{member.name}, {member.role}</p>
                                    ))}
                                </div>
                            }
                            {(projectInfo.overview.status && (projectInfo.endDate || projectInfo.startDate)) &&
                                <div>
                                    <h2 className="text-sm text-custom-light">Timeline & Status</h2>
                                    <p className="text-md text-custom-light text-opacity-50">
                                        <p className="text-md text-custom-light text-opacity-50">
                                            {calculateTimeElapsed((projectInfo.startDate), (projectInfo.endDate))},&nbsp;
                                            <span className="text-md text-custom-light">{projectInfo.overview.status}</span>
                                        </p>
                                    </p>
                                </div>
                            }
                        </div>
                        <div className="flex flex-col justify-between w-1/2 gap-y-8">
                            {(projectInfo.overview.overview) &&
                                <div className="flex flex-col h-full">
                                    <div className="text-sm text-custom-light">Overview</div>
                                    <div className="text-md text-custom-light text-opacity-50 flex-grow">
                                        {projectInfo.overview.overview}
                                    </div>
                                </div>
                            }
                            <div className="flex flex-row justify-start gap-x-8 items-center">
                                <Tooltip text="Firebase">
                                    <SiFirebase className="w-10 h-10"/>
                                </Tooltip>
                                <Tooltip text="Vite">
                                    <SiVite className="w-10 h-10"/>
                                </Tooltip>
                                <Tooltip text="React">
                                    <SiReact className="w-10 h-10"/>
                                </Tooltip>
                                <Tooltip text="Tailwind CSS">
                                    <SiTailwindcss className="w-10 h-10"/>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                }

                {(projectInfo.highlights) &&
                    <div className="">
                        <h1>Highlights - make a long card with images and brief descriptions of key features</h1>
                    </div>
                }
            </div>
    )
}

export default ProjectPage;
