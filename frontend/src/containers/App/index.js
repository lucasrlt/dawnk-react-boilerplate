import React, { Component } from 'react';
import logo from '../../logo.svg';
import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        {' '}
        <header className={styles.appHeader}>
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
