import '../styles/pages/InfoPage.css';
import Header from "../components/Header.jsx";
import Loading from "../components/Loading.jsx";
import Card from "../components/cards/Card.jsx";
import {useContext} from "react";
import {GeneralInfoContext} from "../contexts/GeneralInfoContext.jsx";

const InfoPage = () => {
    const isLoading = false;
    const generalInfo = useContext(GeneralInfoContext);

    return (
        <>
            <Header/>
            {isLoading ? <Loading/> :
                <div className="info-page">
                    <div className="flex flex-col gap-y-8">
                        <div className="flex flex-row justify-start items-center gap-x-2">
                            <div className="dot"></div>
                            <h2 className="info-page-subtitle">ABOUT ME</h2>
                        </div>
                        <h1 className="info-page-title">Here's a little more info&nbsp;<span
                            className="info-page-title-alt">about me.</span></h1>
                    </div>
                    <div className="flex flex-row justify-between items-stretch w-full">
                        <Card className="w-96 h-96">
                            {generalInfo.profilePicture && <img src={generalInfo.profilePicture.src} alt={generalInfo.profilePicture.alt}/>}
                        </Card>
                        <h2>Description of me</h2>
                    </div>
                </div>
            }
        </>
    )
}

export default InfoPage;
