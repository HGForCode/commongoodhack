import React, { Component } from 'react';
import '../components/Login_css.css'

class Signup extends Component {
    render() {
        return (
            <div className="signup-form">
                <div className="signup">
                     <h2>Sign up</h2>
                </div>
                <div class="form-group">
			    <label class="control-label col-xs-4">User name</label>
                <div class="col-xs-8">
                <input type="email" class="form-control" name="name" required="required"></input>

                </div>
            </div>
            <div class="form-group">
			    <label class="control-label col-xs-4">Email Address</label>
                <div class="col-xs-8">
                <input type="email" class="form-control" name="email" required="required"></input>
                </div>
            </div>
            <div class="form-group">
			<label class="control-label col-xs-4">Password</label>
			<div class="col-xs-8">
                <input type="password" class="form-control" name="password" required="required"></input>
            </div>
            <button type="submit" class="btn btn-primary btn-lg">Sign Up</button>
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
