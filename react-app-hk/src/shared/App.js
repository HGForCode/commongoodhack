import React, {Component} from 'react';
import {Link, Route, BrowserRouter as Router } from "react-router-dom";
import '../App.css';
import Menubar from '../components/menubar';
import Signup from '../components/Signup';
import Register from '../components/Register';
import Mypage from '../components/mypage';
import Routes from '../components/Routes';
class App extends Component{
  render(){
    return(
      <>
      <div>
        Hello React-router
      </div>
      <Menubar></Menubar>
      <div>
          <Route exact path="/" component={Menubar}/>
          <Route path="/Signup" component={Signup}/>
          <Route path="/Mypage" component={Mypage}/>
          <Route path="/Register" component={Register}/>
      </div>
      </>
    );
  }
}

export default App;
