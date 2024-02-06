import {HashRouter as Router, Route, Routes} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Home from "./pages/Home";
import './styles/App.css';
import Preloader from "./components/Preloader";

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading process
        setTimeout(() => {
            setLoading(false);
        }, 2000); // Adjust the time as per your need
    }, []);

    return (
        <>
            {
                loading ?
                <Preloader/>
                    :
                <div className="App">
                    <Router>
                        <Routes>
                            <Route exact path='/' element={<Home/>} />
                        </Routes>
                    </Router>
                </div>
            }

        </>
    );
}

export default App;
