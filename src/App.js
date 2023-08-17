import './archive/styles/App.css';
import React from "react";
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import V1Home from "./archive/pages/V1Home";
import Contact from "./archive/pages/V1Contact";
import Projects from "./archive/pages/V1Projects";
import V1Resume from "./archive/pages/V1Resume";

function App() {
  return (
      <div className="flex">
          <Router>
              <Routes>
                  <Route exact path='/' element={<V1Home/>} />
                  <Route path='/portfolio/' element={<V1Home/>} />
                  <Route path='/v1Projects' exact element={<Projects/>} />
                  <Route path='/v1Contact' exact element={<Contact/>} />
                  <Route path='/V1resume' exact element={<V1Resume/>} />
                  <Route path='/V1Home' exact element={<V1Home/>} />
              </Routes>
          </Router>
      </div>
  );
}

export default App;
