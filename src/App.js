import './App.css';
import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Resume from "./pages/resume";
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
