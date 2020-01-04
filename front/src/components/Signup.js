import React, { Component } from 'react';
import { Redirect } from'react-router';
import axios from 'axios';
import './Login_css.css'

class Signup extends Component {
  handleUsernameChange(e){
      this.setState({username:e.target.value})
  }
  handleEmailChange(e){
      this.setState({email:e.target.value})
  }
  handlePasswordChange(e){
      this.setState({password:e.target.value})
  }
  constructor(props) {
        super(props);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.state = {
          username:'',
          email:'',
          password:''
        };
    }
   
     onClick =async  () => {
        await axios.post('http://localhost:3000/user/signup', {
            username : this.state.username, 
            email : this.state.email,
            password : this.state.password})
            .then(function (response) {
                console.log(response);
                alert("회원가입 되었습니다.");
                return <Redirect to="./menubar" />
            })
            .catch(error => {
                console.log('error : ',error.response)}
        )}
    render() {
        return (
            <div className="signup-form">
                <div className="signup">
                     <h2>Sign up</h2>
                </div>
                <div class="form-group">
			    <label class="control-label col-xs-4">User name</label>
                <div class="col-xs-8">
                <input type="text" value={this.state.usernamel} onChange={this.handleUsernameChange} class="form-control" name="name" required="required"></input>
                </div>
            </div>
            <div class="form-group">
			    <label class="control-label col-xs-4">Email Address</label>
                <div class="col-xs-8">
              <input type="text" value={this.state.email}  onChange={this.handleEmailChange} class="form-control" name="email" required="required"></input>
                </div>
            </div>
            <div class="form-group">
			<label class="control-label col-xs-4">Password</label>
			<div class="col-xs-8">
                <input type="password"   value={this.state.password} onChange={this.handlePasswordChange} class="form-control" name="password" required="required"></input>
            </div>
            <button onClick={this.onClick} type="button" class="btn btn-primary btn-lg">Sign Up</button>
        </div>
        </div>
        );
    }
}
{/* <input id="이메일 입력" label="이메일" name="email" placeholder="이메일"/>
                <input label="아이디" name="username" placeholder="아이디"/>
                <input label="비밀번호" name="password" placeholder="비밀번호" type="password"/>
                <button>회원가입</button> */}
export default Signup;
