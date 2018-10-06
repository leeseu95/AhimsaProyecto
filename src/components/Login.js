import React, { Component } from 'react';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';
import '../styles/home-style.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', loggedIn: false, error: '' };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ error: '' });
        const that = this;
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(function(params) {
                // console.log('params: ', params);
                // console.log(firebase.auth().currentUser);
                // Aqui tenemos que hacer el redirect después de un successful login
                that.setState({ loggedIn: true });
            })
            .catch(function(error) {
                // Handle Errors here.
                const errorCode = error.code;
                // const errorMessage = error.message;
                that.setState({ error: errorCode });
            });
    }

    handleSubFace(event) {
        var provider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    displayError() {
        if (this.state.error.length)  {
            let message = '';
            if (this.state.error === 'auth/invalid-email') message = 'Correo Inválido';
            if (this.state.error === 'auth/user-disabled') message = 'Usuario Desactivado';
            if (this.state.error === 'auth/user-not-found') message = 'Usuario no encontrado';
            if (this.state.error === 'auth/wrong-password') message = 'Contraseña Incorrecta';
            return (
                <div>
                    <p style={{ color: 'red' }}>{message}</p>
                </div>
            );
        }
        return null;
    }

    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/home" />;
        }

        return (
            <div id="wrapper bgded">
                <div className="login-page">
                    <form onSubmit={this.handleSubmit}>
                        <h2 className="text-center">Inicia Sesión en Ahimsa</h2>
                        
                            <div className="form">
                                {/*<input type="text" className="form-control" placeholder="Email" required="required" />*/}
                                <input type="text" className="form-control" placeholder="Email" required="required" value={this.state.email} onChange={this.handleEmailChange} />
                                {/*<input type="password" className="form-control" placeholder="Contraseña" required="required" />*/}
                                <input type="password" className="form-control" placeholder="Contraseña" required="required" value={this.state.password} onChange={this.handlePasswordChange} />
                                {this.displayError()}
                                <div id="billboard">
                                <button type="submit" className="btn uppercase">Iniciar Sesión</button>
                            </div>
                            <button onClick={this.handleSubFace} className="btnFace btn-primary btn-block">Login Facebook</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
