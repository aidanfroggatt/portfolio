import React from "react";
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import './styles/App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
