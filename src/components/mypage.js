import React, {Component} from 'react';

class Mypage extends Component {
    render(){
        return(
            <>
    <div class="container">

    <div class="row">

      <div class="col-lg-3">
        <img alt="" width="260" height="260" class="profileimage" alt="no image" src="C:\Users\user\Desktop\group\webstudy\duck.png"></img>
        <div class="name">

          <span class="nickname" itemprop="additionalName">Yourname</span>
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
          <nav class="UnderlineNav-body">
            <a aria-current="page" class="scriptgroup">
             스크랩한 동아리
            </a>    
            <a aria-current="page" class="currentgroup">
             가입한 동아리
            </a>
          </nav>
        </div>
        
       
        <article>
        <div class="card mt-4">
          <div class="card-body">
            <h3 class="card-title">묘화</h3>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure, ducimus!</p>
          </div>
        </div>
        
        <div class="card mt-4">
          <div class="card-body">
            <h3 class="card-title">이캅스</h3>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure, ducimus!</p>
          </div>
        </div>

        <div class="card mt-4">
          <div class="card-body">
            <h3 class="card-title">KING</h3>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure, ducimus!</p>
          </div>
        </div>

        <div class="card mt-4">
          <div class="card-body">
            <h3 class="card-title">이볼</h3>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure, ducimus!</p>
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