import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './bootstrap/css/bootstrap.min.css';
import './fonts/fontawesome-all.min.css';
import './index.css';


import Admin from './Admin';
import Navigation from './Navigation';
import Head from './Head';
import Dashboard from './Dashboard';





function App() {
    
  return (
    <div className="App">
      <Head/>
        <div id="wrapper">
            <Router>
                  <Navigation/>                
                  <Route path="/" exact component={Dashboard}/>
                  <Route path="/Admin" exact component={Admin}/>
            </Router>
        </div>
          <script src="./js/jquery.min.js"></script>
          <script src="./bootstrap/js/bootstrap.min.js"></script>
          <script src="./js/chart.min.js"></script>
          <script src="./js/bs-init.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.js"></script>
          <script src="./js/theme.js"></script>
  </div>

    
  );
} export default App;
