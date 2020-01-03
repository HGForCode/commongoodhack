import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Page from './thirdpage';
import Mypage from './mypage';

// App.js에 있던 Aladin, LionKing, SpiderMan을
// Components/Routes.js 로 이동
export default () => (
  <Router>
    
    <Route path="/thirdpage" component={Page} />
    <Route path="/mypage" component={Mypage} />
  </Router>
)