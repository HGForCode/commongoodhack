import React, { Component } from 'react';
import {Link, Route, BrowserRouter as Router } from "react-router-dom";
import './Login_css.css';

class Login extends Component {
  /* id password state값 으로 정의 */
  state = {
    id: '',
    password: ''
  }
  /* input value 변경 ==> onChange */
  appChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  /* 로그인 버튼 클릭 ==> onClick */
  appClick = () => {
    console.log(`id는 : ${this.state.id}\n pw는 : ${this.state.password}`);
  }
  appKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.appClick();
    }
  }
  render() {
    const { id, password } = this.state;
    const { appChange, appClick, appKeyPress } = this;
    return (
      <div className="Login">
        <header className="Login-header">
          <input type="text" name="id" placeholder="아이디" value={id} onChange={appChange} />
          <input type="password"
            name="password"
            placeholder="비밀번호"
            value={password}
            onChange={appChange}
            onKeyPress={appKeyPress}
          />
          <button type="button" class="btn btn-default btn-sm" onClick={appClick}>로그인</button>
          <Router>
          <Link to ="/Signup"><button type="button" class="btn btn-default btn-sm">회원가입</button> </Link>
          </Router>
        </header>
      </div>
    );
  }
}

export default Login;
