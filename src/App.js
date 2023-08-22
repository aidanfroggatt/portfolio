import React from "react";
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import './styles/App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
    const scrollRef = React.useRef(null);
    return (
        <div className="App">
            <Router>
                <Navbar ref={scrollRef}/>
                <Routes>
                    <Route exact path='/' element={<Home ref={scrollRef}/>} />
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
