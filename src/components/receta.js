import React from 'react';

class Receta extends React.Component {
    render() {
        console.log(this.props.match.params.id);
        return (
            <div>
                <div className="wrapper row3">
                    <main className="clear">
                        <div id="info">
                            <h4 id="titulo" className="uppercase btmspace-50">{recipes[this.props.match.params.id].titles}</h4>
                            <div>
                                <h1 id="Title" className=" one_half uppercase btmspace-50">Preparación</h1>
                                <p className="justify one_half" id="contenido" >{recipes[this.props.match.params.id].preparation}</p>
                                <br></br>
                            </div>
                            <div>
                                <img className="one_quarter" id="imagen" src={recipes[this.props.match.params.id].images} alt="" />
                                <h1 className="right">Ingredientes</h1>
                                <p className="right" id="ingredientes">{recipes[this.props.match.params.id].ingredients}</p>
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

const recipes = [
    {
        titles: "Beer-Brushed Tofu Skewers with Barley",
        preparation: "Tofu gets a grilled treatment in this recipe with a sweet brown beer glaze that’s brushed on both before and while the tofu grills. The flavor and texture is a delicious contrast with the hearty, chewy, nutty barley. If you don’t have barley on hand, serve with brown rice, quinoa, or farro. If you don’t have (or don’t want to light) an outdoor grill, you can also cook the tofu on a stovetop grill pan—just be sure to turn your oven vent on high, as the honey-based glaze is sure to create some smoke.",
        ingredients: "Cup Honey, Teaspoon crushed pepper, Cooking Spray, Vegan Food",
        images: "http://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2017/03/main/beer-brushed-tofu-skewers-barley-1705p105.jpg?itok=OdHLIfLx"
    },
    {
        titles: "Bok Choy Recipes",
        preparation: "Oyster sauce and a pinch of sugar add caramel flavor and color to the bok choy. A little butter turns the sauce into a glaze. This side would be excellent with a spicy main like a Szechuan-style stir-fry or a chile-laden sauce for meat or fish.",
        ingredients: "Cup Honey, Teaspoon crushed pepper, Cooking Spray",
        images: "https://imagesvc.timeincapp.com/v3/mm/image?url=http://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1513186939/sweet-and-sour-bok-choy-1801-ck.jpg%3Fitok=BqaMWfLf&w=800&q=85"
    },
    {
        titles: "Fennel, Tomato, and Feta Skillet Bake",
        preparation: "Fresh fennel becomes mellow and sweet once sautéed and braised in chopped, strained tomatoes. If you can’t find Pomì brand, drain about 1/3 of the liquid from a (15-oz.) can of unsalted diced tomatoes. Pair this simple, beautiful side with baked fish or lemon-and-herb roasted chicken.",
        ingredients: "Cup Honey, Teaspoon of Salt, Teaspoon of Pepper, Tomato Sauce, Crushed garlic, Fennel",
        images: "https://imagesvc.timeincapp.com/v3/mm/image?url=http://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1513268479/fennel-tomato-and-feta-skillet-bake-1801-ck.jpg%3Fitok=FjmT5hL6&w=800&q=85"
    },
    {
        titles: "Citrus-Pickled Shrimp with Fennel and Potatoes",
        preparation: "This heaped platter wouldn’t be out of place at a picnic on a hot day, but it’s so satisfying on winter nights, too. The shrimp picks up plenty of acid and heat with a gentle pickle of citrus, crushed red pepper, and garlic. The warm potatoes, crunchy fennel, and celery slices make it a meal. If you don’t have 1-quart containers, you can pickle the mixture in a covered bowl or two large ziplock bags, turning occasionally.",
        ingredients: "Cup Honey, Teaspoon of Salt, Teaspoon of Pepper, Shrimps, Fennel, Potatoes",
        images: "https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1513273093%2Fcitrus-pickled-shrimp-fennel-and-potatoes-1801-ck.jpg%3Fitok%3DlE0rauuQ&w=800&q=85"
    }
]

export default Receta;