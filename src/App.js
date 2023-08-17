import './archive/styles/App.css';
import React from "react";
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./archive/pages/Home";
import Contact from "./archive/pages/Contact";
import Projects from "./archive/pages/Projects";
import Resume from "./archive/pages/Resume";

function App() {
  return (
      <div className="flex">
          <Router>
              <Routes>
                  <Route exact path='/' element={<Home/>} />
                  <Route path='/portfolio/' element={<Home/>} />
                  <Route path='/projects' exact element={<Projects/>} />
                  <Route path='/contact' exact element={<Contact/>} />
                  <Route path='/resume' exact element={<Resume/>} />
                  <Route path='/home' exact element={<Home/>} />
              </Routes>
          </Router>
      </div>
  );
}

export default App;
