import React from 'react';
import {connect} from 'react-redux';
import logo from '../logo.svg';
import './App.css';

const App = ({isSignedIn}) => {
  console.log('<App> isSignedIn:', isSignedIn);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          isSignedIn: {`${isSignedIn}`}
        </p>
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

const mapStateToProps = ({isSignedIn}) => ({
  isSignedIn,
});

export default connect(mapStateToProps)(App);
