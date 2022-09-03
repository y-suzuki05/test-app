import React from 'react';
import logo from './logo.svg';
import './App.css';
import { css } from '@emotion/react';

const link = css`
  background-color: red;
` 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          css={link}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
