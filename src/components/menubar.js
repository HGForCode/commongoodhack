import React, {Component} from 'react';
import Login from './Login'
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
        <nav class="nav nav-pills flex-column flex-sm-row">
        <a class="flex-sm-fill text-sm-center nav-link active" href="#">메인페이지</a>
        <a class="flex-sm-fill text-sm-center nav-link" href="#">동아리 보기</a>
        <a class="flex-sm-fill text-sm-center nav-link" href="#">동아리 신청</a>
        <a class="flex-sm-fill text-sm-center nav-link" href="#">마이페이지</a>
      </nav>
      </>
      );
      }
    }

export default Menubar;
