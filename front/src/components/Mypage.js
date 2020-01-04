import React, {Component} from 'react';
import './mypage.css';

class Mypage extends Component {
    render(){
        return(
            <>
    <div class="container">

    <div class="row">

      <div class="col-lg-3">

      <div class="card">
          <img src="C:\Users\user\Desktop\group\duck.png" alt="no image"/>
          <div class="container">
          <h4><b>user name</b></h4>
          </div>
      </div>


        <button type="button" class="btn btn-default btn-sm">로그아웃</button>


        <div class="profile">
          <section>
            <ul>
              <li>
                이름:
              </li>
              <li>
                학교:
              </li>
              <li>
                관심사:
              </li>
            </ul>
          </section>
        </div>


      </div>


      <div class="col-lg-9">
        <div class="menue">
        <ul class="nav nav-tabs">
            <li role="presentation" class="active"><a href="#">스크랩한 동아리</a></li>
            &nbsp;
            &nbsp;
            &nbsp;
            <li role="presentation"><a href="#">신청한 동아리</a></li>
        </ul>
        </div>


        <article>
        <div class="card mt-4">
          <div class="card-body">
            <h3 class="card-title">묘화</h3>
          </div>
        </div>

        <div class="card mt-4">
          <div class="card-body">
            <h3 class="card-title">이캅스</h3>
          </div>
        </div>

        <div class="card mt-4">
          <div class="card-body">
            <h3 class="card-title">KING</h3>
          </div>
        </div>

        <div class="card mt-4">
          <div class="card-body">
            <h3 class="card-title">이볼</h3>
          </div>
        </div>

      </article>

      </div>


    </div>


  </div>
            </>
        );
    }
}
export default Mypage;
