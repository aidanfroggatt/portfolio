import React from "react";
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import './styles/App.css';
import Navbar from "./components/Navbar";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
      <div className="App">
          <Router>
              <Navbar/>
              <Routes>
                  <Route exact path='/' element={<Home/>} />
                  <Route path='/experience' element={<Experience/>}/>
                  <Route path='/projects' element={<Projects/>}/>
                  <Route path='/contact' element={<Contact/>}/>
              </Routes>
              <Footer/>
          </Router>
      </div>
  );
}

export default App;
