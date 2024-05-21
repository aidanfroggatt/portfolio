import React from 'react';
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import {GeneralInfoProvider} from './contexts/GeneralInfoContext.jsx';
import InfoPage from './pages/InfoPage.jsx';
import WorkPage from "./pages/WorkPage.jsx";
import ProjectPage from './pages/ProjectPage.jsx';
import Footer from './components/Footer.jsx';
import './App.css';
import ScrollToTop from "./components/ScrollToTop.jsx";
import {AnimatePresence} from "framer-motion";


function App() {
    return (
        <GeneralInfoProvider>
            <Router>
                <ScrollToTop/>
                <RouteContainer/>
                <Footer/>
            </Router>
        </GeneralInfoProvider>
    )
}

const RouteContainer = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode={"wait"}>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<WorkPage/>} />
                <Route path="/info" element={<InfoPage/>} />
                <Route path="/:projectId" element={<ProjectPage/>}/>
            </Routes>
        </AnimatePresence>
    )
}

export default App;
