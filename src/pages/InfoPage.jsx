import '../styles/pages/InfoPage.css';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const InfoPage = () => {

    return (
        <>
            <Header/>
            <div className="info-page h-screen flex justify-center items-center bg-custom-dark text-custom-light">
                <h1>Info Page</h1>
            </div>
            <Footer/>
        </>
    )
}

export default InfoPage;
