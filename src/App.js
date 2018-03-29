import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Request } from './Request'; 


function App(props) {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Camper Leaderboard</h1>
        </header>
        <section>
          <Request />
        </section>
      </div>
    );
}

export default App;
