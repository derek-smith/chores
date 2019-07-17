import React from 'react';
import {connect} from 'react-redux';
import logo from '../logo.svg';
import './App.css';

import {signIn} from '../state/actions';

const App = ({isSignedIn, name, signIn}) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        {isSignedIn ? (
          `Hi ${name}`
        ) : (
          <button onClick={signIn}>Sign in to Google</button>
        )}
      </p>
    </header>
  </div>
);

const mapStateToProps = ({isSignedIn, name}) => ({
  isSignedIn,
  name,
});

const mapDispatchToProps = {signIn};

export default connect(mapStateToProps, mapDispatchToProps)(App);
