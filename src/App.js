import React, {Component} from 'react';
import {Link, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Menubar from './components/menubar';
import Signup from './components/Signup';
import Page from './components/thirdpage';
import Mypage from './components/mypage';
import Routes from './components/Routes';
class App extends Component{
  render(){
    return(
      <>
    
      <Menubar></Menubar>
      <Router></Router>
      
      </>
    );
  }
}

export default App;
