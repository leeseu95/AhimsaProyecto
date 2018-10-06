import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import firebase from 'firebase';
import logo from './logo.svg';
import Login from './components/Login';
import Main from './components/main';
import imageMain from './images/gallery/logo.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <Switch>
          <Route path="/" render={() => {
              return <Main/>
          }}/>
        </Switch>
      </Router>

      <div className="wrapper bgded">
            <div id="billboard">
                <article>
                    <img className ="logo" src={imageMain}/>
                </article>
                <button className="btn uppercase"><a href="/home">CAMBIA EL MUNDO</a></button>
            </div>
        </div>
      </div>

    );
  }
}

export default App;
