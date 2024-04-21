import {HashRouter as Router, Route, Routes} from 'react-router-dom'
import React, {useEffect} from 'react';
import Home from "./pages/Home";
import './styles/App.css';
import ReactGA from "react-ga";

const App = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
