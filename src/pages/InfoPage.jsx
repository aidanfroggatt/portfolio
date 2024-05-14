import '../styles/pages/InfoPage.css';
import Header from "../components/Header.jsx";
import Loading from "../components/Loading.jsx";
import Card from "../components/Card.jsx";

const InfoPage = () => {
    const isLoading = false;

    return (
        <>
            <Header/>
            {isLoading ? <Loading/> :
                <div className="info-page h-screen flex flex-col justify-center items-center bg-custom-dark text-custom-light">
                    <h1>Info Page</h1>
                    <Card className="w-96 h-96">
                        <h2>Highlight Card</h2>
                    </Card>
                </div>
            }
        </>
    )
}

export default InfoPage;
