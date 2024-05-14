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
                <div className="info-page min-h-screen flex flex-row justify-around flex-wrap items-center bg-custom-dark text-custom-light">
                    <Card className="w-96 h-96">
                        <h2>Picture of me</h2>
                    </Card>
                    <h2>Description of me</h2>
                    <Card className="w-96 h-96">
                        <h2>test1</h2>
                    </Card>
                    <Card className="w-96 h-96">
                        <h2>test2</h2>
                    </Card>
                    <Card className="w-96 h-96">
                        <h2>test3</h2>
                    </Card>
                </div>
            }
        </>
    )
}

export default InfoPage;
