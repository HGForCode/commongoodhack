import React, { useState, Component } from 'react';
import {Link, Route, BrowserRouter, HashRouter, NavLink} from "react-router-dom";
import './Login_css.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
      super(props);
      this.signIn = this.signIn.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);

      this.state = {
        email:'',
        password:''
      };
    }
    signIn = () =>{
      alert('Email address is ' + this.state.email + ' Password is ' + this.state.password);
      // TODO: 내 컴퓨터에서 서버를 켠뒤, /Login을 <서버 URL>/Login 으로 변경
      axios.post('/Login', {
        email: this.state.email,
        password: this.state.password
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    handleEmailChange(e){
      this.setState({email:e.target.value})
    }
    handlePasswordChange(e){
      this.setState({password:e.target.value})
    }

    render() {
      return (
        <div>
          
          <div className="Login">
        <header className="Login-header">
           <input type="email" placeholder="이메일" id="inputEmail" onChange={this.handleEmailChange} />
           <input type="password" name="password" placeholder="비밀번호" onChange={this.handlePasswordChange}/>
           
            <button type="button" class="btn btn-default btn-sm" onClick={this.signIn}>로그인</button>
            <button type="button" class="btn btn-default btn-sm"><Link to="/Signup">회원가입</Link></button>
            
            </header>
         </div>
          
        </div>

      );
    }
}

// class Login extends React.Component {
//     constructor(props) {
//       super(props);
//       this.signIn = this.signIn.bind(this);
//       this.handleEmailChange = this.handleEmailChange.bind(this);
//       this.handlePasswordChange = this.handlePasswordChange.bind(this);
//       this.state = {
//         email:'',
//         password:''
//       };
//     }
//     signIn(){
//       axios.post('/signin', {
//         email: this.state.email,
//         password: this.state.password
//       })
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//     }
//     handleEmailChange(e){
//       this.setState({email:e.target.value})
//     }
//     handlePasswordChange(e){
//       this.setState({password:e.target.value})
//     }
//   render() {
//     const { id, password } = this.state;
//     const { appChange, appClick, appKeyPress } = this;
//     return (
//       <div className="Login">
//         <header className="Login-header">
//           <input type="text" name="id" placeholder="아이디" value={id} onChange={this.handleEmailChange} />
//           <input type="password"
//             name="password"
//             placeholder="비밀번호"
//             value={password}
//             onChange={this.handlePasswordChange}
//             onKeyPress={appKeyPress}
//           />
//           <button type="button" class="btn btn-default btn-sm" onClick={this.signIn}>로그인</button>
//           <button type="button" class="btn btn-default btn-sm" onClick={appClick}>회원가입</button>
//         </header>
//       </div>
//     );
//   }
// }
export default Login;