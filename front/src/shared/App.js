import React, {Component} from 'react';
import {Link, Route, BrowserRouter as Router } from "react-router-dom";
import '../App.css';
import Menubar from '../components/menubar';
import Signup from '../components/Signup';
import Register from '../components/Register';
import Mypage from '../components/Mypage';
import Search from '../components/Search';
import Routes from '../components/Routes';
class App extends Component{
  render(){
    return(
      <>
      <Menubar></Menubar>
      <div>

          <Route path="/Signup" component={Signup}/>
          <Route path="/Mypage" component={Mypage}/>
          <Route path="/Register" component={Register}/>
          <Route path="/Search" component={Search}/>
      </div>
      </>
    );
  }
  
}

export default App;
