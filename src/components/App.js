import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import logo from '../logo.svg';
import './App.css';

import {getChoreList, signIn} from '../state/actions';

const App = ({choreList, getChoreList, isSignedIn, name, signIn}) => {
  useEffect(() => {
    if (isSignedIn) {
      getChoreList();
    }
  }, [isSignedIn]); // eslint-disable-line

  console.log('<App> choreList:', choreList);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {isSignedIn ? (
            choreList.length
              ? `Chore List: ${choreList.map(c => c.name).join(', ')}`
              : `Hi ${name}`
          ) : (
            <button onClick={signIn}>Sign in to Google</button>
          )}
        </p>
      </header>
    </div>
  );
}

const mapStateToProps = ({choreList, isSignedIn, name}) => ({
  choreList,
  isSignedIn,
  name,
});

const mapDispatchToProps = {getChoreList, signIn};

export default connect(mapStateToProps, mapDispatchToProps)(App);
