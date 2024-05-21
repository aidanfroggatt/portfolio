import '../styles/pages/ProjectPage.css';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getDataFromFirestore} from "../utils/firestoreUtils.js";
import {hexToRGBA} from "../utils/colorUtils.js";
import Loading from "../components/Loading.jsx";
import Tooltip from "../components/Tooltip.jsx";
import {calculateTimeElapsed, convertFirestoreTimestampToJSDate, formatMonthYear} from "../utils/dateTimeUtils.js";
import HighlightCard from "../components/cards/HighlightCard.jsx";
import {getIconByName} from "../utils/iconUtils.jsx";
import {FaMountainSun} from "react-icons/fa6";
import AnimatedBackButton from "../components/AnimatedBackButton.jsx";
import {motion} from "framer-motion";

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

    return (
        (isLoading || !projectInfo || !projectInfo.color) ? <Loading/> :
            <div
                className='project-page min-h-screen bg-custom-dark flex flex-col items-center text-custom-light'
                style={projectInfo.color ? {'--project-color': hexToRGBA(projectInfo.color, 0.5)} : {}}>
                <AnimatedBackButton/>
                <ProjectPageHero projectInfo={projectInfo}/>
                {(projectInfo.overview) && <ProjectPageOverview projectInfo={projectInfo}/>}
                {(projectInfo.highlights) && <ProjectPageHighlights projectInfo={projectInfo}/>}
            </div>
    )
}

const ProjectPageHero = ({projectInfo}) => {
    return (
        <motion.div
            initial={{y: 100, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.5}}
            exit={{y: 100, opacity: 0}}
            className="flex flex-col justify-start items-center min-h-screen relative"
        >
            <div className="flex justify-center items-center project-page-title font-bold text-center">{projectInfo.title && projectInfo.title}</div>
            <div className="flex justify-center items-center project-page-subtitle font-normal text-custom-light text-opacity-50 text-center">
                {projectInfo.association && projectInfo.association} — {projectInfo.endDate && formatMonthYear(convertFirestoreTimestampToJSDate(projectInfo.endDate))}
            </div>
            { projectInfo.image &&
                <img src={projectInfo.image.src} alt={projectInfo.image.alt} className="project-page-hero-image"/>
            }
        </motion.div>
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
                            <Tooltip key={index} text={technology.name}>
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
                <div className="rounded-full bg-custom-dark bg-opacity-50 p-1.5 shadow-md shadow-custom-dark">
                    <FaMountainSun color={projectInfo.color} style={{width: '3vmax', height: '3vmax'}}/>
                </div>
                <p className="project-page-highlights-title">
                    HIGHLIGHTS
                </p>
                <h1 className="project-page-highlights-subtitle">
                    {projectInfo.highlightsDescription}
                </h1>
            </div>
            {projectInfo.highlights.map((highlight, index) => {
                return (
                    <div key={index} className="w-full flex flex-col">
                        {highlight.asset.type === 'VIDEO' ? (
                            <video src={highlight.asset.src} controls>
                                <source src={highlight.asset.src} type="video/mp4"/>
                            </video>
                        ) : highlight.asset.type === 'IMAGE' ? (
                            <img src={highlight.asset.src} alt={highlight.asset.alt}/>
                        ) : (
                            <p>Invalid asset type: {highlight.asset.type}</p>
                        )}
                        <div className="flex flex-row justify-end items-center gap-x-2 text-xs text-custom-light text-opacity-50 font-bold mt-2 text-end">
                            {highlight.asset.alt}
                            <span className="bg-custom-dark bg-opacity-50 rounded-full p-1.5 shadow-inner shadow-custom-dark">
                            {highlight.asset.type}
                        </span>
                        </div>
                    </div>
                )
            })}
        </HighlightCard>
    )
}

export default ProjectPage;
