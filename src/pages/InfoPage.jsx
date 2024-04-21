import '../styles/pages/InfoPage.css';
import Header from "../components/Header.jsx";
import Loading from "../components/Loading.jsx";

const InfoPage = () => {
    const isLoading = false;

    return (
        <>
            <Header/>
            {isLoading ? <Loading/> :
                <div className="info-page h-screen flex justify-center items-center bg-custom-dark text-custom-light">
                    <h1>Info Page</h1>
                </div>
            }
        </>
    )
}

export default InfoPage;
