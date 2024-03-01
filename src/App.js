import {HashRouter as Router, Route, Routes} from 'react-router-dom'
import React from 'react';
import Home from "./pages/Home";
import './styles/App.css';

const App = () => {
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
