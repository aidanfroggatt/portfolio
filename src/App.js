import './archive/V1/styles/V1App.css';
import React from "react";
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import V1Home from "./archive/V1/pages/V1Home";
import V1Contact from "./archive/V1/pages/V1Contact";
import V1Projects from "./archive/V1/pages/V1Projects";
import V1Resume from "./archive/V1/pages/V1Resume";
import Home from "./pages/Home";

const App = () => {
  return (
      <div className="flex">
          <Router>
              <Routes>
                  <Route exact path='/' element={<Home/>} />
                  <Route path='/portfolio/' element={<Home/>} />

                  {/*V1 Routes*/}
                  <Route path='/v1Projects' exact element={<V1Projects/>} />
                  <Route path='/v1Contact' exact element={<V1Contact/>} />
                  <Route path='/V1resume' exact element={<V1Resume/>} />
                  <Route path='/V1Home' exact element={<V1Home/>} />
              </Routes>
          </Router>
      </div>
  );
}

export default App;
