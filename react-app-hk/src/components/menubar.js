import React, {Component} from 'react';
import {Link, Route, BrowserRouter as Router } from "react-router-dom";
import Login from './Login'

class Menubar extends Component{
    render(){
      return(
        <>
        <Router>
        <div className="Wrapper">
        <a className="name" href="#"><h2>동아리 모두 모아</h2></a>
        <div className="login">
        <Login></Login>
        </div>
        </div>


        <nav class="nav nav-pills flex-column flex-sm-row">

        <a class="flex-sm-fill text-sm-center nav-link active" href="/menubar">메인페이지</a>


        <li class="flex-sm-fill text-sm-center nav-link" href="#">동아리 보기</li>

        <a class="flex-sm-fill text-sm-center nav-link" ><Link to="/Register">동아리 신청</Link></a>

        <a class="flex-sm-fill text-sm-center nav-link" ><Link to="/mypage">마이페이지</Link></a>


        </nav>
      </Router>
      </>
      );
      }
    }

export default Menubar;
