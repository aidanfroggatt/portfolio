import '../styles/pages/InfoPage.css';
import Header from "../components/Header.jsx";
import Loading from "../components/Loading.jsx";
import Card from "../components/cards/Card.jsx";
import { useEffect, useState } from "react";
import { getDataFromFirestore } from "../utils/firestoreUtils.js";

const InfoPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [info, setInfo] = useState();
    const documentId = import.meta.env.VITE_MY_FIRESTORE_GENERAL_INFO_DOCUMENT_ID;

    const transformData = (data) => {
        const userInfo = data[documentId];
        return {
            userID: documentId,
            ...userInfo
        };
    };

    useEffect(() => {
        getDataFromFirestore({ collectionName: 'general-info', documentId: documentId }).then(data => {
            setInfo(transformData(data));
            setIsLoading(false);
        });
    }, []);

    return (
        <>
            <Header />
            {isLoading ? <Loading /> :
                <div className="info-page">
                    <AboutMe info={info}/>
                    <Experience info={info}/>
                    <Awards info={info}/>
                </div>
            }
        </>
    )
}

const AboutMe = ({ info }) => {
    return (
        <>
            <div className="flex flex-col gap-y-8">
                <div className="flex flex-row justify-start items-center gap-x-4">
                    <div className="dot"></div>
                    <h2 className="info-page-subtitle">ABOUT ME</h2>
                </div>
                <h1 className="info-page-title">Here's some more info&nbsp;<span className="info-page-title-alt">about me.</span>
                </h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 justify-between w-full">
                <div className="flex flex-col gap-y-20">
                    <Card><img src={info.aboutMe.profilePicture.src} alt={info.aboutMe.profilePicture.alt}/></Card>
                    <div className="info-page-text">
                        <h2>{info.aboutMe.education.title}</h2>
                        <p className="text-custom-light text-opacity-50">{info.aboutMe.education.text}</p>
                    </div>
                    <Card><img src={info.aboutMe.concert2.src} alt={info.aboutMe.concert2.alt}/></Card>
                    <div className="info-page-text">
                        <h2>{info.aboutMe.freetime.title}</h2>
                        <p className="text-custom-light text-opacity-50">{info.aboutMe.freetime.text}</p>
                    </div>
                    <Card><img src={info.aboutMe.hikingBackpack.src} alt={info.aboutMe.hikingBackpack.alt}/></Card>
                </div>
                <div className="flex flex-col gap-y-20">
                    <div className="info-page-text">
                        <h2>{info.aboutMe.intro.title}</h2>
                        <p className="text-custom-light text-opacity-50">{info.aboutMe.intro.text}</p>
                    </div>
                    <Card><img src={info.aboutMe.aidanHiking.src} alt={info.aboutMe.aidanHiking.alt}/></Card>
                    <div className="info-page-text">
                        <h2>{info.aboutMe.passion.title}</h2>
                        <p className="text-custom-light text-opacity-50">{info.aboutMe.passion.text}</p>
                    </div>
                    <Card><img src={info.aboutMe.concert1.src} alt={info.aboutMe.concert1.alt}/></Card>
                    <div className="info-page-text">
                        <h2>{info.aboutMe.conclusion.title}</h2>
                        <p className="text-custom-light text-opacity-50">{info.aboutMe.conclusion.text}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

const Experience = ({info}) => {
    return (
        <div className="flex flex-col w-full gap-y-8">
            <div className="flex flex-row justify-start items-center gap-x-4 w-full border-t border-opacity-20 border-custom-light" style={{paddingTop: '10vh'}}>
                <div className="dot"></div>
                <h2 className="info-page-subtitle">EXPERIENCE</h2>
            </div>
            <div className="flex flex-col w-full gap-y-10">
                { info.experience && info.experience.map((exp, index) => {
                    return (
                        <div key={index} className="grid grid-cols-2 gap-x-20 justify-start items-start">
                            <div className="flex-grow info-page-experience-company">{exp.company}</div>
                            <div className="info-page-text flex flex-col items-start justify-start">
                                <div className="info-page-experience-role">{exp.role}{exp.team && <span>, {exp.team}</span>}</div>
                                <div className="info-page-experience-date">{exp.startDate} - {exp.endDate}</div>
                                <div className="info-page-experience-date">{exp.description}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

const Awards = ({info}) => {
    return (
        <div className="flex flex-col w-full gap-y-8">
            <div className="flex flex-row justify-start items-center gap-x-4 w-full border-t border-opacity-20 border-custom-light" style={{paddingTop: '10vh'}}>
                <div className="dot"></div>
                <h2 className="info-page-subtitle">AWARDS</h2>
            </div>
            <div className="flex flex-col w-full">
                <div className="grid grid-cols-3">
                    <div>
                        {/*<div className="info-page-awards-title">{info.awards.title}</div>*/}
                        {/*<div className="info-page-awards-text">{info.awards.text}</div>*/}
                        {/*<div className="info-page-awards-link">{info.awards.link}</div>*/}
                        <div className="info-page-awards-title">Award Title</div>
                        <div className="info-page-awards-text">Award Association</div>
                        <div className="info-page-awards-link">Award Link</div>
                    </div>
                    <div>award 2</div>
                    <div>award 3</div>
                    <div>award 4</div>
                </div>
            </div>
        </div>
    );
}

export default InfoPage;
