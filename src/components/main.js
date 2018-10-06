import React from 'react';
import Home from './home';
import Blog from './blog';
import Recetas from './recetas';
import Restaurantes from './restaurantes';
import Profile from './profile';
import Receta from './receta';
import Login from './Login';
import firebase from 'firebase';
import { NavLink, Route, Switch } from 'react-router-dom';
import imageMain from '../images/gallery/logo.png';

require("firebase/firestore");

class Main extends React.Component {
    renderNavBar() {
        if (firebase.auth().currentUser) {
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
                                    <li><NavLink activeStyle={{ color: 'green' }} to="/blog">Blog</NavLink></li>
                                    <li><NavLink activeStyle={{ color: 'green' }} to="/recetas">Recetas</NavLink></li>
                                    <li><NavLink activeStyle={{ color: 'green' }} to="/restaurantes">Restaurantes</NavLink></li>
                                    <li><NavLink activeStyle={{ color: 'green' }} to="/profile">{firebase.auth().currentUser.email}</NavLink></li>
                                    <li><button className="btn upperclass" onClick={this.logOut}>Cerrar sesión</button></li>
                                </ul>
                            </nav>
                        </header>
                    </div>
                </div>
            );
        } else {
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
                                    <li><NavLink activeStyle={{ color: 'green' }} to="/recetas">Recetas</NavLink></li>
                                    <li><NavLink activeStyle={{ color: 'green' }} to="/restaurantes">Restaurantes</NavLink></li>
                                    <li><NavLink activeStyle={{ color: 'green' }} to="/Login">Inicia sesión</NavLink></li>
                                </ul>
                            </nav>
                        </header>
                    </div>
                </div>
            );
        }
    }

    logOut() {
        firebase.auth().signOut().then(function () {
            //Signout and reload page
            window.location.reload()
        }).catch(function (error) {
            console.log("error")
        });
    }

    render() {
        return (
            <div>
                {this.renderNavBar()}

                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/blog" component={Blog} />
                    <Route exact path="/recetas" component={Recetas} />
                    <Route path="/recetas/:id" component={Receta} />
                    <Route path="/restaurantes" component={Restaurantes} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/Login" component={Login} />
                </Switch>

            </div>
        );
    }
}

export default Main;