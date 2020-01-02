import React, {Component} from 'react';
import './App.css';
import Menubar from './components/menubar';
import Signup from './components/Signup'
import Page from './components/thirdpage'
class App extends Component{
  render(){
    return(
      <>
      <div>
      
      <Menubar></Menubar>
      
      </div>
      <div>
        <Signup></Signup>
        <Page></Page>
      </div>
      </>
    );
  }
}

export default App;
