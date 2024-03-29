import './styles/V1App.css';
import React from "react";
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import V1Home from "./pages/V1Home";
import Contact from "./pages/V1Contact";
import Projects from "./pages/V1Projects";
import V1Resume from "./pages/V1Resume";
import Home from "../../pages/Home";

const V1App = () => {
  return (
      <div className="flex">
          <Router>
              <Routes>
                  <Route exact path='/' element={<Home/>} />
                  <Route path='/portfolio/' element={<Home/>} />
                  <Route path='/v1Projects' exact element={<Projects/>} />
                  <Route path='/v1Contact' exact element={<Contact/>} />
                  <Route path='/V1resume' exact element={<V1Resume/>} />
                  <Route path='/V1Home' exact element={<V1Home/>} />
              </Routes>
          </Router>
      </div>
  );
}

export default V1App;
