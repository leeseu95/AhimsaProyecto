import React from 'react';
import Home from './home';
import Blog from './blog';
import Recetas from './recetas';
import Restaurantes from './restaurantes';
import Profile from './profile';
import Receta from './receta';
import Register from './register';
import firebase from 'firebase';
import imageMain from '../images/gallery/logo.png';

import { NavLink, Route, Switch } from 'react-router-dom';
require("firebase/firestore");

class Main extends React.Component {
    render() {
        // console.log(firebase.auth().currentUser);
        return (
        <div>

            <div className="wrapper row1">
            <header id="header" className="clear">
                <div id="logo" className="fl_left">
                    <h1><a href="home.html">Ahimsa</a></h1>
                </div>
            </header>
            <div id="billboard">
                <article>
                    <img className ="logo" src={imageMain}/>
                </article>
            </div>
            </div>
            
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/blog" component={Blog} />
                <Route exact path="/recetas" component={Recetas} />
                <Route path="/recetas/:id" component={Receta} />
                <Route path="/restaurantes" component={Restaurantes} />
                <Route path="/profile" component={Profile} />
                <Route path="/register" component={Register} />
            </Switch>
            
        </div>
        );
    }
}

export default Main;