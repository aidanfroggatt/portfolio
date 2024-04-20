import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import { GeneralInfoProvider } from './contexts/GeneralInfoContext.jsx';
import InfoPage from './pages/InfoPage.jsx';
import WorkPage from "./pages/WorkPage.jsx";
import ProjectPage from './pages/ProjectPage.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './App.css';
import {useEffect} from "react";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    return (
        <GeneralInfoProvider>
            <Router>
                <Header/>
                <ScrollToTop/>
                <Routes>
                    <Route path="/" element={<WorkPage/>} />
                    <Route path="/info" element={<InfoPage/>} />
                    <Route path="/:projectId" element={<ProjectPage/>}/>
                </Routes>
                <Footer/>
            </Router>
        </GeneralInfoProvider>
    )
}

export default App;
