import React from 'react';
import { Link } from 'react-router-dom'; 

class Recetas extends React.Component {
    render() {
        return (
            <div>
                <div className="wrapper row3">
                    <main className="clear">
                        <div id="info">
                            <h4 className="uppercase btmspace-50">RECETAS</h4>
                            <div id="gallery">
                                <figure>
                                    <ul className="nospace clear">
                                        <li className="one_quarter first"><Link to ="/recetas/0"><img src="http://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2017/03/main/beer-brushed-tofu-skewers-barley-1705p105.jpg?itok=OdHLIfLx" /></Link></li>
                                        <li className="one_quarter"><Link to ="/recetas/1"><img src="https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1513186939%2Fsweet-and-sour-bok-choy-1801-ck.jpg%3Fitok%3DBqaMWfLf&w=800&q=85"/></Link></li>
                                        <li className="one_quarter"><Link to ="/recetas/2"><img src="https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1513268479%2Ffennel-tomato-and-feta-skillet-bake-1801-ck.jpg%3Fitok%3DFjmT5hL6&w=800&q=85"/></Link></li>
                                        <li className="one_quarter"><Link to ="/recetas/3"><img src="https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1513273093%2Fcitrus-pickled-shrimp-fennel-and-potatoes-1801-ck.jpg%3Fitok%3DlE0rauuQ&w=800&q=85" /></Link></li>
                                    </ul>
                                    <figcaption>Selecciona una receta para ver sus ingredientes y proceso de preparación</figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </main>
                </div>

                <div className="wrapper bgded row4">
                    <footer id="footer" className="clear black">
                        <div className="one_quarter">
                            <h6 className="title">Contáctanos</h6>
                            <form className="btmspace-30" method="post" action="#">
                                <fieldset>
                                    <legend>Newsletter:</legend>
                                    <input className="btmspace-15" type="text" value="" placeholder="Email" />
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

export default Recetas;