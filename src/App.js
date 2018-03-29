import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Request } from './Request'; 


function App(props) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <section>
          <Request />
        </section>
      </div>
    );
}

export default App;
