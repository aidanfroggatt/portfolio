import React from "react";
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import './styles/App.css';
import Navbar from "./components/Navbar";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  return (
      <>
          <Router>
              <Navbar/>
              <Routes>
                  <Route exact path='/' element={<Home/>} />
                  <Route path='/experience' element={<Experience/>}/>
                  <Route path='/projects' element={<Projects/>}/>
                  <Route path='/contact' element={<Contact/>}/>
              </Routes>
          </Router>
      </>
  );
}

export default App;
