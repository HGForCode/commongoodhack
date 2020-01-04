import React, {Component} from 'react';
import './register_css.css'
class Page extends Component{
    render(){
        return(
            <>
            <ul className="list">
                <li className="top">
                    <div class="g_name">
                        동아리 명
                    </div>
                    <div class="desc">
                        제목
                    </div>
                    <div class="date">
                        모집 기간
                    </div>
                </li>
             <li>
             <div className="registerWrapper">
             <div className="g_name"> 묘화 </div>
             <div className="desc"> 교내 유일 길고양이 공생동아리에서 신입부원을 모집합니다 웅앵웅앵 줄바뀜 테스트 </div>
             <div className="date"> 1/2~1/10 </div>
             <button type="button" class="btn btn-default btn-sm">신청하기</button>
             </div>
                </li>

                <li>
                 <div className="registerWrapper">
             <div className="g_name"> 묘화 </div>
             <div className="desc"> 교내 유일 길고양이 공생동아리에서 신입부원을 모집합니다 </div>
             <div className="date"> 1/2~1/10 </div>
             <button type="button" class="btn btn-default btn-sm">신청하기</button>
             </div>
                </li>

                <li>
                 <div className="registerWrapper">
             <div className="g_name"> 묘화 </div>
             <div className="desc"> 교내 유일 길고양이 공생동아리에서 신입부원을 모집합니다 </div>
             <div className="date"> 1/2~1/10 </div>
             <button type="button" class="btn btn-default btn-sm">신청하기</button>
             </div>
                </li>

            </ul>

            </>
        );
    }
}
export default Page;
