import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';


import Admin from './Admin';
import Navigation from './Navigation';
import Dashboard from './Dashboard';





function App() {
    
  return (
    <div className="App">
        <div id="wrapper">
           <Router>
                <Navigation/>                
                <Route path="/" exact component={Dashboard}/>
                <Route path="/Admin" exact component={Admin}/>
           </Router>
       </div>
    </div>


    
  );
} export default App;
