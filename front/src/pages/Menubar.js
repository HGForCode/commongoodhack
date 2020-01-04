import React, {Component} from 'react';
import {Link, Route, BrowserRouter, HashRouter} from "react-router-dom";
import Login from './Login'
import './menubar_css.css'
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
class Menubar extends Component{
    render(){
      return(
        <>

        <div className="Wrapper">
        <a className="name" href="#"><h2>동아리 모두 모아</h2></a>
        <div className="login">
         <Login></Login>
        </div>
        </div>
        <HashRouter>

        <Nav variant="pills" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">메인페이지</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="1"><Link to="/Search">동아리 보기</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="2"><Link to="/Register">동아리 신청</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="3"><Link to="/Mypage">마이페이지</Link></Nav.Link>
  </Nav.Item>
</Nav>
      </HashRouter>
      </>
      );
      }
    }

export default Menubar;
