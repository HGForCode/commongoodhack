import React, {Component} from 'react';
import {Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Menubar from './components/menubar';
import Routes from './components/Routes';
class App extends Component{
  render(){
    return(
      <>
      <Router>
        <Menubar></Menubar>
        <div>
         <Routes></Routes>
      </div>
      </Router>
      
      

      </>
    );
  }
}

export default App;
