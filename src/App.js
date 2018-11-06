import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './header/SearchPagePro';
import SearchPagePro from "./header/SearchPagePro";
import LogoBar from "./logo/LogoBar"
import DropdownList from './nav3/DropdownList'
import ShowProducts from './products/ShowProducts';

class App extends Component {

  render() {
    return (
      <div className="App" style={{maxWidth: "1750px"}}>
        <SearchPagePro/>
        <LogoBar/>
        <ShowProducts/>
       
      </div>
    );
  }
}


export default App;
