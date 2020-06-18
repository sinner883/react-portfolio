import React, { Component } from 'react';
import Header from './components/header/header.js';
import About from './components/about/about.js';
import Contact from './components/contact/contact.js';

import './App.css';

class App extends Component {
  render() {
    return (
      < div className="App" >
        <Header />
        <About />
        {/* <Projects /> */}
        <Contact />
      </div >
    );
  }
}

export default App;