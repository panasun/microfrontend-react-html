import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = (props) => {
  const [count, setCount] = useState(0);
  console.log(props);
  return (
    <div className="App" style={{
      backgroundColor: "green"
    }}>
      <header className="App-header">
        <p style={{ color: "red" }}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Props packageId: {props.packageId}</p>
        <p>window.location.href {window.location.href}</p>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </header>
    </div >
  );
}

export default App;
