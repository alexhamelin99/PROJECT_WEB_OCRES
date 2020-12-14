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
import CreateExercise from './components/Ajouter_Question';
import EditExercise from './components/Modifier_Question';




function App() {
    
  return (
    <div className="App">
      <Head/>
        <div id="wrapper">
            <Router>
                  <Navigation/>                
                  <Route path="/" exact component={Dashboard}/>
                  <Route path="/Admin" exact component={Admin}/>
                  <Route path="/Admin/:id" component={EditExercise} />
            </Router>
        </div>
  </div>

    
  );
} export default App;
