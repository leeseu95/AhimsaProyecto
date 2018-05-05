import React from 'react';
import Home from './home';
import Blog from './blog';
import Recetas from './recetas';
import Restaurantes from './restaurantes';
import Profile from './profile';
import Receta from './receta';
import Register from './register';
import firebase from 'firebase';
import { NavLink, Route, Switch } from 'react-router-dom';
require("firebase/firestore");

class Main extends React.Component {
    renderProfile() {
        if(firebase.auth().currentUser){
            return(
                <li><NavLink activeStyle={{ color: 'green' }}to="/profile">{firebase.auth().currentUser.email}</NavLink></li>
            );
        } else {
            return(
                <li><NavLink activeStyle={{ color: 'green' }}to="/register">Register</NavLink></li>
            );
        }
    }

    render() {
        // console.log(firebase.auth().currentUser);
        return (
        <div>

            <div className="wrapper row1">
            <header id="header" className="clear">
                <div id="logo" className="fl_left">
                    <h1><a href="home.html">Ahimsa</a></h1>
                </div>
                <nav id="mainav" className="fl_right">
                    <ul className="clear">
                        <li><NavLink activeStyle={{ color: 'green' }} to="/home">Home</NavLink></li>
                        <li><NavLink activeStyle={{ color: 'green' }}to="/blog">Blog</NavLink></li>
                        <li><NavLink activeStyle={{ color: 'green' }}to="/recetas">Recetas</NavLink></li>
                        <li><NavLink activeStyle={{ color: 'green' }}to="/restaurantes">Restaurantes</NavLink></li>
                        {this.renderProfile()}
                    </ul>
                </nav>
            </header>
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