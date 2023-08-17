import React from "react";
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import './styles/App.css';
import Navbar from "./components/Navbar";

const App = () => {
  return (
      <>
          <Router>
              <Navbar/>
              <Routes>
                  <Route exact path='/' element={<Home/>} />
              </Routes>
          </Router>
      </>
  );
}

export default App;
