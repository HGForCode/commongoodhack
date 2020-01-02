import React, {Component} from 'react';
import './register_css.css'
class Page extends Component{
    render(){
        return(
            <>
            <div className="registerWrapper">
            <div> 묘화 </div>
            <div> 교내 유일 길고양이 공생동아리에서 신입부원을 모집합니다 </div>
            <div> 1/2~1/10 </div>
            <button>신청하기</button>
            </div>
            </>
        );
    }
}
export default Page;