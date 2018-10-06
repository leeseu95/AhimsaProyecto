import React from 'react';
import imageMain from '../images/gallery/logo.png';
import imageOne from '../images/gallery/02.png';
import imageTwo from '../images/gallery/03.png';
import imageThree from '../images/gallery/04.png';


class Home extends React.Component {
    render() {
        return (
            <div>
        <div className="wrapper bgded">
            <div id="billboard">
                <article>
                    <img className ="logo" src={imageMain}/>
                </article>
            </div>
        </div>
        <div className="wrapper row3">
            <main className="container clear"></main>
            <div>
                <h1 className="center uppercase btmspace-50">¿Qué es el veganismo?</h1>
                <p className="center">"Una filosofía y modo de vida que pretenden excluir, en la medida de lo posible y factible, todas las formas de explotación y crueldad hacia los animales para la alimentación, el vestido o cualquier otro propósito; Y por extensión, promueve el desarrollo y uso de alternativas libres de animales para el beneficio de los seres humanos, los animales y el medio ambiente." - The Vegan Society</p>
                <br></br>
            </div>
            <div id="info">
                <h3 className="uppercase btmspace-50">¿Porqué veganismo?</h3>
                <h2 className="square uppercase">Gases de efecto invernadero</h2>
                <p>La agricultura animal es responsable del 18% de las emisiones de gases invernadero, esto representa un mayor porcentaje que el desecho generado por todo el transporte a nivel mundial</p>
                <p>La ganadería y sus subproductos representan al menos 32,000 millones de toneladas de dióxido de carbono (CO2) por año, o lo que es lo mimso el 51% de todas las emisiones mundiales de gases de efecto invernadero</p>
                <p>El ganado es responsable del 65% de todas las emisiones de óxido nitroso del planeta: Un gas de efecto invernadero con 296 veces más potencial de calentamiento global que el CO2 y que permanece en la atmósfera durante 150 años. </p>
                <p>Se prevé que las emisiones de la agricultura animal aumenten un 80% para el 2050</p>
                <p>Se espera que las emisiones relacionadas con la energía aumenten un 20% para el 2040</p>
                <p>Las vacas producen 150 trillones de galones de metano por día.</p>
                <p>Incluso sin el uso de combustibles fosiles, excederemos el límite de 565 gigatoneladas de CO2 para el año de 2030, todo por criar animales</p>
                <h2 className=" square uppercase">Agua</h2>
                <p>El consumo de agua de la agricultura animal varía de 130 a 280 billones de litros al año.</p>
                <p>La agricultura animal es responsable del 80-90% del consumo de agua en EE. UU.</p>
                <p>El cultivo de alimentos para el ganado consume el 56% del agua en los EE. UU.</p>
                <p>Se necesitan 9,500 litros de agua para producir 1/2 kilo de carne de res.</p>
                <p>Se requieren 1,800 litros de agua para producir 1/2 kilo de huevos; se necesitan casi 3,500 litros de agua por 1/2 kilo de queso</p>
                <p>Se requieren 3,800 litros de agua para producir 4 litros de leche.</p>
                <p>5% de agua es consumida en los Estados Unidos por hogares privados. El 55% del agua que se consume en los EE. UU se destina a la cría de animales.</p>
                <p>La Agricultura Animal es responsable del 20% -33% de todo el consumo de agua dulce en el mundo de hoy.</p>
                <h2 className=" square uppercase">Uso de tierra</h2>
                <p>El ganado ocupa el 45% de la tierra total del planeta.</p>
                <p>La agricultura animal es la principal causa de extinción, zonas oceánicas muertas, contaminación del agua y destrucción de hábitats. </p>
                <p>Las operaciones ganaderas en tierra han creado más de 500 zonas muertas inundadas de nitrógeno en todo el mundo en nuestros océanos.</p>
                <p>Casi la mitad de las tierras de Estados Unidos están dedicadas a la agricultura animal.</p>
                <p>1/3 del planeta está desertificado, y la agricultura animal es el principal causante.</p>
                <h2 className=" square uppercase">Desechos</h2>
                <p>Cada minuto, 3 millones de kilogramos de excremento son producidos por animales criados para la alimentación en Estados Unidos.</p>
                <p>Una granja con 2.500 productos lácteos produce la misma cantidad de desechos que una ciudad de 411,000 personas </p>
                <p>Se producen 130 veces más desechos de animales que desechos humanos en E.U.</p>
                <p>En los Estados Unidos, el ganado produce 52,500 kilos de desechos por segundo.</p>
                <p>Los animales producen suficientes desechos para cubrir SF, NYC, Tokio, etc.</p>
            </div>
        </div>
        <div className="wrapper row2">
        <div id="intro" className="clear">
            <ul className="nospace group center">
                <li className="one_third first">
                    <article><a href="#"><img className="home_img" src={imageOne}></img></a>
                    <h6 className="heading uppercase">Vegano</h6>
                    <p>POR EL MEDIO AMBIENTE</p>
                    </article>
                </li>
                <li className="one_third">
                    <article><a href="#"><img className="home_img" src={imageTwo}></img></a>
                    <h6 className="heading uppercase">Vegano</h6>
                    <p>POR LOS DERECHOS ANIMALES</p>
                    </article>
                </li>
                <li className="one_third">
                    <article><a href="#"><img className="home_img" src={imageThree}></img></a>
                    <h6 className="heading uppercase">Vegano</h6>
                    <p>POR TU SALUD</p>
                    </article>
                </li>
            </ul>
        </div>
        </div>
        <div className="wrapper row3">
        <div className="latest">
            <ul className="nospace group">
            <a><iframe width="33%" height="245" src="https://www.youtube.com/embed/y2k4NHjAP84" frameBorder="0" allowFullScreen></iframe></a>
            <a><iframe width="33%" height="245" src="https://www.youtube.com/embed/yxgX_KTm10E" frameBorder="0" allowFullScreen></iframe></a>
            <a><iframe width="33%" height="245" src="https://www.youtube.com/embed/Jf44vLndiRM" frameBorder="0" allowFullScreen></iframe></a>
            </ul>
        </div>
        </div>
        <div className="wrapper bgded row4">
            <footer id="footer" className="clear black">
            <div className="one_quarter">
                <h6 className="title">Contáctanos</h6>
                <form className="btmspace-30" method="post" action="#">
                <fieldset>
                    <legend>Newsletter:</legend>
                    <input className="btmspace-15" type="text" value="" placeholder="Email"></input>
                    <button type="submit" value="submit">Submit</button>
                </fieldset>
                </form>
                <ul className="faico clear">
                <li><a className="faicon-facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a className="faicon-instagram" href="#"><i className="fa fa-instagram"></i></a></li>
                </ul>
            </div>
            </footer>
        </div>
        <div className="wrapper row5">
        <div id="copyright" className="clear">
            <p className="fl_left">Copyright &copy; AHIMSA 2017 - All Rights Reserved</p>
        </div>
        </div>
      </div>
        );
    }
}

export default Home;