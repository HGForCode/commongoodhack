import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import menubar from './menubar';
import Register from './Register';
import Mypage from './Mypage';
import Signup from './Signup';
import Search from './Search';
// App.js에 있던 Aladin, LionKing, SpiderMan을
// Components/Routes.js 로 이동
export default () => (
  <HashRouter>
    <>
    <Route exact path="/" components={menubar}/>
    <Route path="/Search" component={Search}/>
    <Route path="/Signup" component={Signup} />
    <Route path="/Register" component={Register} />
    <Route path="/Mypage" component={Mypage} />

    </>
  </HashRouter>
)
