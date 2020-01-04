import React, {Component} from 'react';
import './mypage.css';
import axios from 'axios';

class Mypage extends Component {
    handleClickButton1 = () => {
    console.log("click1");
    
    axios.get('/ScrappedClubs(서버주소라고한다)')
.then(function (response) {console.log(response);})
.catch(error => {console.log('error : ',error.response)})
    
    
    } 

    handleClickButton2 = () => {
      console.log("click2");
      axios.get('/AppliedClubs(서버주소라고한다)')
      .then(function (response) {console.log(response);})
      .catch(error => {console.log('error : ',error.response)})      
      
      
      } 

    render(){
        return(
            <>
    <div class="container">

    <div class="row">

      <div class="col-lg-3">

      <div class="card">
          <img src="" alt="no image"/>
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
        <button class="btn btn-default" type="button1" onClick={this.handleClickButton1}>스크랩한동아리</button>
        <button class="btn btn-default" type="button2" onClick={this.handleClickButton2}>신청한 동아리</button>
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
