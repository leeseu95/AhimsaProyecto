import React from 'react';
import imageMain from '../images/gallery/logo.png';
import imageOne from '../images/gallery/02.png';
import imageTwo from '../images/gallery/03.png';
import imageThree from '../images/gallery/04.png';


class Inicio extends React.Component {
    render() {
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
        <div className="wrapper bgded">
            <div id="billboard">
                <article>
                    <img className ="logo" src={imageMain}/>
                </article>
            </div>
        </div>
      </div>
        );
    }
}

export default Inicio;