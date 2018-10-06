import React from 'react';
import GoogleMapReact from 'google-map-react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import firebase from 'firebase';

const AnyReactComponent = ({ text }) => <div>{ text }</div>;

class Restaurantes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '',
            restaurants: [],
            lat: 19, 
            long : -99
        }
    }


    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        const db = firebase.firestore();
        const that = this;
        const restaurantes = [];
        const comentarios = [];
        db.collection("restaurantes").where("nombre", "==", selectedOption.label)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                that.setState({
                    lat: doc.data().xCoord,
                    long: doc.data().yCoord
                })
                document.querySelector("#nombre").innerText=  doc.data().nombre;
                document.querySelector("#descripcion").innerText=  doc.data().descripcion;
                document.querySelector("#rating").innerText= "Calificación de usuarios: " + doc.data().rating;
                document.querySelector("#price").innerText= "Precio :" + doc.data().price;
               console.log(doc.data().comments.length) 
                //for (let i = 0; i < doc.data().comments.length; i++){
                    //comentarios.push(doc.data().comments[i].text)
                    document.querySelector("#comments0").innerText= doc.data().comments[0].text
                    document.querySelector("#comments1").innerText= doc.data().comments[1].text

                //}
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
    }

    render() {
        const { selectedOption } = this.state;
        return (
            <div>
                <div className="wrapper row3">
                    <main className="clear">
                        <div id="info">
                            <h4 className="uppercase btmspace-50">Restaurantes</h4>
                            <div>
                            <div>
                                <Select
                                    name="ELIGE UN RESTAURANTE"
                                    value={selectedOption}
                                    onChange={this.handleChange}
                                    options={[
                                        { value: 'one', label: 'Forever Vegano' },
                                        { value: 'two', label: 'Utopia' },
                                        { value: 'three', label: 'La Casa del Pan' },
                                    ]}
                                />
                            </div>
                            <p id="nombre"></p>
                            <p id="descripcion"></p> 
                            <p id="rating"></p>
                            <p id="price"></p>
                            <p >Ubicación</p>
                            <div id="map" style={{ height: '70vh', width: '100%' }}>
                                <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyBh_Ka7CGnnWUgcruT4E97086HfSM-X8sc" }}
                                center={{
                                    lat: this.state.lat,
                                    lng: this.state.long
                                }}
                                defaultZoom={16}
                                >
                                </GoogleMapReact>
                                
                            </div>
                            <p>Comentarios:</p>
                            <li id="comments0"></li>
                            <li id="comments1"></li>
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

/*export default GoogleApiWrapper({
    apiKey: ('AIzaSyBh_Ka7CGnnWUgcruT4E97086HfSM-X8sc')
  })(Restaurantes)*/


export default Restaurantes;