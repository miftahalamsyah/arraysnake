import React from 'react';
import ReactDOM from 'react-dom';
import SnakeGame from '../src/SnakeGame.jsx'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <h1>Snake Game Array</h1>
    <div className="textWrapper">
      <p id="instructions">Gunakan arrow keys atau W/A/S/D untuk bermain</p>
    </div>
    <SnakeGame />
  </React.StrictMode>,
  document.getElementById('root')
);
