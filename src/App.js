import React from "react";
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import './styles/App.css';
import Preloader from "./components/Preloader";

const App = () => {
    return (
        <>
            <div className="App">
                <Router>
                    <Routes>
                        <Route exact path='/' element={<Home/>} />
                    </Routes>
                </Router>
            </div>
        </>
    );
}

export default App;
