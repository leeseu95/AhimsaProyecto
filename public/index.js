import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './styles/home-style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

var config = {
    apiKey: "AIzaSyDgvU0cC95NS3ObcUDRogfYD2lFLRRQoVU",
    authDomain: "ahimsa2-2bfef.firebaseapp.com",
    databaseURL: "https://ahimsa2-2bfef.firebaseio.com",
    projectId: "ahimsa2-2bfef",
    storageBucket: "ahimsa2-2bfef.appspot.com",
    messagingSenderId: "32279148090"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
