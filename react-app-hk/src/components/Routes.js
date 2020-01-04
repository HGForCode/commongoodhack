import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './Register';
import Mypage from './mypage';
import Signup from './Signup';

// App.js에 있던 Aladin, LionKing, SpiderMan을
// Components/Routes.js 로 이동
export default () => (
  <Router>
    <>
    <Route path="/Signup" component={Signup} />
    <Route path="/Register" component={Register} />
    <Route path="/mypage" component={Mypage} />88

    </>
  </Router>
)
