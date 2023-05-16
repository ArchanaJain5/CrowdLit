import './App.css';
import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './components/pages/HomePage';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import ProjectDetails from './components/pages/Project_Detail';
import ResponsiveLayout from './components/pages/responsive-layout';
import ExpandCard from './components/pages/expand-card';
const App = () => {
  useEffect(() => {
    //Initializes materialize js
    M.AutoInit();
  })
  return (
      <Fragment>
        <div className="App">
          <Router>
            <div className="container">
              <Routes>
                <Route exact path='/HomePage' element={<HomePage/>} />
                <Route exact path="/SignUp" element={<SignUp/>} />
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/projectdetails" element={<ProjectDetails/>}/>
                <Route exact path="/layout" element={<ExpandCard/>}/>
              </Routes>
            </div>
          </Router>
        </div>
      </Fragment>

  );
}

export default App;
