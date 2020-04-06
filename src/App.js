import React from 'react';
import logo from './logo.svg';
import './App.css';

const arr = [
  '张三', 18
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>my-react-app  first-test</div>
      </header>
  <div>{arr}</div>
    </div>
  );
}

export default App;
