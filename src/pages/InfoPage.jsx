import '../styles/pages/InfoPage.css';
import Header from "../components/Header.jsx";
import Loading from "../components/Loading.jsx";
import Card from "../components/cards/Card.jsx";

const InfoPage = () => {
    const isLoading = false;

    return (
        <>
            <Header/>
            {isLoading ? <Loading/> :
                <div className="info-page">
                    <div>
                        <h2 className="info-page-subtitle">ABOUT ME</h2>
                        <h1 className="info-page-title">This is some sort of tagline&nbsp;<span
                            className="info-page-title-alt">about me.</span></h1>
                    </div>
                    <div className="flex flex-row justify-between items-stretch w-full">
                        <Card className="w-96 h-96">
                            <h2>Picture of me</h2>
                        </Card>
                        <h2>Description of me</h2>
                    </div>
                </div>
            }
        </>
    )
}

export default InfoPage;
