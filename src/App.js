import React, {Component} from 'react';
import './App.css';
import Menubar from './components/menubar';
import Signup from './components/Signup'
class App extends Component{
  render(){
    return(
      <>
      <div>
      
      <Menubar></Menubar>
      
      </div>
      <div>
        <Signup></Signup>
      </div>
      </>
    );
  }
}

export default App;
