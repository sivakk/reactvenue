import React, { Component } from 'react';
import Header_footer from './components/header_footer/header_footer';
import Featured from "./components/featured/index";
import './resources/styles.css';


class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"100px",background:'cornflowerblue'}}>
 
      
        <Header_footer/> 
        <Featured/>

      </div>
    );
  }
}

export default App;
