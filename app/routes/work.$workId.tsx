import { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import Back from "~/components/Back";
import Footer from "~/components/Footer";
import { work } from "~/data/work";
import { hexToRGBA } from "~/utils/Color";
import { getReactIconByName } from "~/utils/Icon";
import { FaMountainSun } from "react-icons/fa6";
import Tooltip from "~/components/Tooltip";
import { calculateDateDifference, formatMonthYear } from "~/utils/Date";

export async function loader({ params }: LoaderFunctionArgs) { 
    return {
        projectInfo: work.find((item) => item.id === params.workId),
    };
}


export const meta: MetaFunction = ({ data }) => {
    const { projectInfo } = data;
    return [
        { title: `Aidan Froggatt — ${projectInfo ? projectInfo.title : "Work Item"}` },
        { name: "description", content: "This is a list of all work samples." },
    ];
};

const WorkItemHero = () => {
    const { projectInfo } = useLoaderData<typeof loader>();
    
    if (!projectInfo) {
        return null;
    }
    
    return (
        <section id="work-item-hero" className="flex flex-col justify-start items-center relative w-page-default pt-12 md:pt-0 md:w-page-md lg:w-page-lg 2xl:w-page-2xl gap-y-4">
            <h1 id="work-item-hero-content" className="flex justify-center items-center text-shadow-mobile md:text-shadow text-center">{projectInfo.title && projectInfo.title}</h1>
            <span className="flex justify-center items-center text-base lg:text-lg 2xl:text-xl font-normal text-custom-light text-opacity-50 text-center">
                {projectInfo.association && projectInfo.association} — {projectInfo.endDate ? `${formatMonthYear(projectInfo.endDate)}` : "In development"}
            </span>
            {projectInfo.image &&
                <img src={projectInfo.image.src} alt={projectInfo.image.alt} className="pt-4 2xl:py-12 h-work-card-image-default md:h-work-card-image-md lg:h-work-card-image-lg 2xl:h-work-card-image-2xl"/>
            }
        </section>
    )
}

const WorkItemOverview = () => {
    const { projectInfo } = useLoaderData<typeof loader>();

    if (!projectInfo) {
        return null;
    }

    return (
        <section id="work-item-overview" className="flex flex-col justify-center items-center gap-x-16 py-16 md:py-40 w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl ">
            <div id="work-item-overview-content" className="flex flex-col md:flex-row justify-center items-stretch gap-x-10 gap-y-10 md:gap-y-0">
                <div className="flex flex-col justify-start items-start md:w-1/2 gap-y-10">
                    <div className="flex flex-col">
                        <h5>My Role</h5>
                        <p>
                            {projectInfo.overview?.role.title}&nbsp;—&nbsp;
                            <span className="text-opacity-50 text-custom-light">{projectInfo.overview?.role.description}</span>
                        </p>
                    </div>
                    {projectInfo.overview?.team && (
                        <div className="flex flex-col">
                                <h5>Team</h5>
                                {projectInfo.overview?.team.map((member, index) => (
                                    <p key={index} className="text-custom-light text-opacity-50">{member.name}, {member.role}</p>
                                ))}
                        </div>
                    )}
                    <div className="flex flex-col">
                        <h5>Timeline & Status</h5>
                        <p>
                            <span className="text-custom-light text-opacity-50">
                                {projectInfo.endDate ? 
                                    calculateDateDifference(new Date(projectInfo.startDate), new Date(projectInfo.endDate))
                                    : 
                                    "On-going"
                                },&nbsp;
                            </span>
                            {projectInfo.endDate ?
                                `Completed ${formatMonthYear(new Date(projectInfo.endDate))}`
                                :
                                "Started " + formatMonthYear(new Date(projectInfo.startDate))
                            }
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start h-full md:w-1/2 gap-y-10">
                    <div className="flex flex-col">
                        <h5>Overview</h5>
                        <p className="text-custom-light text-opacity-50">{projectInfo.overview?.description}</p>
                    </div>
                    <div className="flex flex-wrap md:flex-row w-full justify-evenly md:justify-start gap-8 items-center">
                        {projectInfo.overview?.technologies.map((technology, index) => (
                            <div key={index} className="icon-link" style={{'--link-color': projectInfo.color}}>
                                <Tooltip text={technology.name}>
                                    {getReactIconByName({ iconName: technology.icon, className: 'w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12' })}
                                </Tooltip>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

const WorkItemHighlights = () => {
    const { projectInfo } = useLoaderData<typeof loader>();
    
    if (!projectInfo) {
        return null;
    }

    return (
        <section id="work-item-highlights">
            <div id="work-item-highlights-content" className="highlight-card p-3 md:p-6 gap-y-8 md:gap-y-12 w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl" style={{'--highlight-card-accent-color': projectInfo.color}}>
                <div className="flex flex-col justify-between items-center gap-y-4">
                    <div className="rounded-full bg-custom-dark bg-opacity-50 p-1.5 2xl:p-2.5 shadow-md shadow-custom-dark">
                        <FaMountainSun color={projectInfo.color} className="w-8 h-8 md:w-10 md:h-10 2xl:w-12 2xl:h-12"/>
                    </div>
                    <h5 className="text-custom-light text-opacity-50">HIGHLIGHTS</h5>
                    <h5 className="text-center">{projectInfo?.highlights?.description}</h5>
                </div>
                {projectInfo.highlights?.items.map((highlight, index) => {
                    return (
                        <div key={index} className="w-full flex flex-col items-center">
                            {highlight.asset.type === 'VIDEO' ? (
                                <video className="z-10 max-h-[75vh] w-full" src={highlight.asset.src} controls>
                                    <source src={highlight.asset.src} type="video/mp4"/>
                                    <track kind="captions" srcLang="en" default />
                                </video>
                            ) : highlight.asset.type === 'IMAGE' ? (
                                <img className="z-10 max-h-[75vh] w-fit" src={highlight.asset.src} alt={highlight.asset.alt}/>
                            ) : (
                                <p>Invalid asset type: {highlight.asset.type}</p>
                            )}
                            <h5 className="flex flex-row w-full justify-end items-center gap-x-2 mt-2 text-end text-custom-light text-opacity-50">
                                {highlight.asset.alt}
                                <span className="bg-custom-dark bg-opacity-50 rounded-full p-1.5 shadow-inner shadow-custom-dark">
                                {highlight.asset.type}
                            </span>
                            </h5>
                        </div>
                    )
                })}
                <div className="flex flex-row border-t border-opacity-10 border-custom-light w-full justify-center items-center gap-x-8 md:gap-x-12 py-8 md:py-12">
                    {projectInfo.links ?
                        projectInfo.links.map((link, index) => {
                            return (
                                <Tooltip text={link.name} key={index} >
                                    <Link key={index} to={link.link} target="_blank" rel="noopener noreferrer" className="icon-link" style={{'--link-color': projectInfo.color}}>
                                        {getReactIconByName({
                                            iconName: link.icon,
                                            className: 'w-8 h-8 md:w-10 md:h-10 2xl:w-12 2xl:h-12',
                                        })}
                                    </Link>
                                </Tooltip>
                            )})
                        :
                        <div className="flex flex-col">
                            <p>This project is not publicly available.</p>
                            <p>Feel free to reach out for more information.</p>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

const WorkItem = () => {

    const { projectInfo } = useLoaderData<typeof loader>();
    
    return (
        <>
            <div className="z-50 fixed top-0 left-0 flex w-full justify-start items-center py-4 px-4 md:py-8 md:px-12 2xl:py-12 bg-header-mobile md:bg-header pointer-events-none">
                <Back/>
            </div>
            <main 
                className='md:bg-project-page-md bg-project-page-default md:bg-project-page bg-project-page pt-16 md:pt-28 2xl:pt-44 pb-16 md:pb-40 2xl:pb-60 relative bg-no-repeat bg-custom-dark flex flex-col items-center text-custom-light'
                style={projectInfo?.color ? {'--project-color': hexToRGBA(projectInfo.color, 0.5)} as React.CSSProperties : {}}>
                    <WorkItemHero />
                    <WorkItemOverview />
                    <WorkItemHighlights />
            </main> 
            <Footer />
        </>
    );
};

export default WorkItem;
