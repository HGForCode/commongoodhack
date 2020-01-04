import React, {Component} from 'react';
import axios from 'axios';

class Search extends Component{

  state={
    searchinfo:''
  }

  handleUsersearchinfo = (e) => {
    this.setState({searchinfo:e.target.value})
}
 
  handleClickButton = () => {
    console.log(this.state.searchinfo);
    // TODO: axios를 통해서 서버에 searchinfo 를 보내야함
    axios.post(
      '/Search', {
      searchinfo : ''
       })
      .then(function (response) {console.log(response);})
      .catch(error => {console.log('error : ',error.response)})
    
  } 
            

  render(){
        return(
            <>
            
  <div class="container">

    <div class="row">

      <div class="col-lg-3">

        <aside>
          <div id="topic_list_index" class="index">
                  <div class="mypage">
                      <a href="">마이페이지</a>
                  </div>
              <h2>카데고리</h2>
              <nav class="sub_nav">
                <ul id="topic_list_tree" class="no_draggable ui-sortable ui-sortable-disabled">      
                      <li id="list1" class="depth_0">
                        <div class="label">
                            <a href="" class="depth_0" ><span class="title">공연</span></a>
                        </div>
                      </li>
                      <li id="list2" class="depth_0">
                        <div class="label">
                            <a href="" class="depth_0"><span class="title">학술</span></a>
                        </div>
                      </li>
                      <li id="list3" class="depth_0">
                        <div class="label">
                            <a href="" class="depth_0"><span class="title">문화</span></a>
                        </div>
                      </li>
                      <li id="list4" class="depth_0">
                        <div class="label">
                            <a href="" class="depth_0"><span class="title">사회과학</span></a>
                        </div>
                      </li>
                      <li id="list5" class="depth_0">
                        <div class="label">
                            <a href="" class="depth_0"><span class="title">사회연대</span></a>
                        </div>
                      </li>
                      <li id="list6" class="depth_0">
                        <div class="label">
                            <a href="" class="depth_0"><span class="title">체육</span></a>
                        </div>
                      </li>
                      <li id="list7" class="depth_0">
                        <div class="label">
                            <a href="" class="depth_0"><span class="title">종교</span></a>
                        </div>
                      </li>
                      
                  </ul>   

              </nav>
          </div>
         </aside>

      </div>


      <div class="col-lg-9">
       
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search for..." onChange={this.handleUsersearchinfo} value={this.state.searchinfo}></input>
          <span class="input-group-btn">
            <button class="btn btn-default" type="button" onClick={this.handleClickButton}>Go</button>
          </span>
        </div>

        <div id="all_list_index" class="index">
          <div class="allpage">
              <a href="">전체보기</a>
          </div>
        </div>

        <article>
          <div class="card mt-4">
            <div class="card-body">
              <h3 class="card-title">묘화</h3>
              <div class="button">
                <button name="button" type="button" class="button"  value="confirm" onclick="func_confirm()"  >스크랩하기</button>
                {/* <script>
                  function func_confirm(){
                      if(confirm('신청하시겠습니까?')){
                          alert('ok');
                      } else {
                          alert('cancel');
                      }
                  }
                  </script> */}
              </div>
              <div class="button">
                <button name="button" type="button" class="button" value="confirm" onclick="func_confirm()" >신청하기</button>
                {/* <script>
                  function func_confirm(){
                      if(confirm('신청하시겠습니까?')){
                          alert('ok');
                      } else {
                          alert('cancel');
                      }
                  }
                </script> */}
              </div>
            </div>
          </div>

          <div class="card mt-4">
            <div class="card-body">
              <h3 class="card-title">이캅스</h3>
              <div class="button">
                <button name="button" type="button" class="button">스크랩하기</button>
              </div>
              <div class="button">
                <button name="button" type="button" class="button" >신청하기</button>
              </div>
            </div>
          </div>
  
          <div class="card mt-4">
            <div class="card-body">
              <h3 class="card-title">KING</h3>
              <div class="button">
                <button name="button" type="button" class="button" >스크랩하기</button>
              </div>
              <div class="button">
                <button name="button" type="button" class="button" >신청하기</button>
              </div>
            </div>
          </div>
  
          <div class="card mt-4">
            <div class="card-body">
              <h3 class="card-title">이볼</h3>
              <div class="button">
                <button name="button" type="button" class="button" >스크랩하기</button>
              </div>
              <div class="button">
                <button name="button" type="button" class="button" >신청하기</button>
              </div>
            </div>
          </div>
          
        </article>

        <nav aria-label="Page navigation">
          <ul class="pagination">
            <li>
              <a href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li>
              <a href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>

        

      </div>

    </div>
</div>
</>
        );
    }
}
export default Search;