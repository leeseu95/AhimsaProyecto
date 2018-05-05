import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import firebase from 'firebase';
import logo from './logo.svg';
import Login from './components/Login';
import Main from './components/main';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" render={() => {
            if(firebase.auth().currentUser) {
              return <Main/>
            } else {
              return <Login/>
            }
          }}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
