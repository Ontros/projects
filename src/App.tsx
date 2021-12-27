import React from 'react';
import logo from './logo.svg';
import menrys from './menrys_buff.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={menrys} className="App-logo" alt="logo" />
        <p>
          Menrys je kokot!
        </p>
        <a
          className="App-link"
          href="https://youtu.be/dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dukaz
        </a>
      </header>
    </div>
  );
}

export default App;
