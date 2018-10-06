import React from 'react';
import firebase from 'firebase';

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            comments: []
        }
    }

    componentDidMount() {
        const db = firebase.firestore();
        const that = this;
        const posts = [];
        const comments = [];
        db.collection("blogs")
        .onSnapshot(function (querySnapshot) {
            querySnapshot.forEach(doc => {
                posts.push(doc.data());
            });
            that.setState({
                posts
            });
        });

        db.collection("comments")
        .onSnapshot(function (querySnapshot) {
            let temp = [];
            querySnapshot.forEach(doc => {
                temp.push(doc.data());
                // console.log(doc.data());
                // console.log(comments);
            });
            that.setState({
                comments: temp
            });
        });
    }


    writeUserData(e) {
        e.preventDefault();
        const db = firebase.firestore();
        const that = this;
        const posts = [];
        const commentUser = e.target.elements.comment.value;
        db.collection("comments").add({
            text: commentUser,
            time: Date.now(),
            username: firebase.auth().currentUser.email
        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
        
    }

    renderBottomComments() {
        return this.state.comments.map(comment => {
            return (
                <div className="right">
                    <ul>
                    <li className="comcont"><p>{comment.text} - {comment.username}</p></li>
                    </ul>
                </div>    
            );
        })
    }

    rendercomments(comments) {
        return comments.map(comment => {
            return (
                <div>
                    <p>{comment.text} - {comment.username}</p>
                </div>
            );
        })
    }

    renderposts() {
        return this.state.posts.map(post => {
            return (
                    <div id="info">
                        <div className="square center article">
                            <h3 id="titulo" value="0">{post.title}</h3>
                            <img src="https://i.pinimg.com/736x/81/98/a5/8198a506b2e0beb363bba89951393fea--vegetarian-food-vegan-food.jpg" />
                            <p id="contenido" value="0">{post.post}</p>
                            {this.rendercomments(post.comments)}
                        </div>
                    </div>
            );
        })
    }

    render() {
        // console.log(this.state.posts);
        return (
            <div>
                <div className="wrapper row3">
                    <main className="clear"></main>
                    <div id="info">
                        <h4 className="uppercase btmspace-20">BLOG</h4>
                        {this.renderposts()}
                    </div>
                </div>
                    <main className="clear"></main>
                    <div className="wrapper row3">
                    <div id="info">
                        <h2 className="uppercase btmspace-50">COMMENTS</h2>
                        <div id="comments">
                        {this.renderBottomComments()}
                        <form onSubmit={this.writeUserData}>
                            <input type="text" name="comment"></input>
                            <br />
                            <button className="btn uppercase">Agregar comentario</button>
                        </form>
                        </div>
                        </div>
                    </div>
                <div className="wrapper row2">
                    <div id="intro" className="clear">
                    </div>
                </div>
                <div className="wrapper bgded row4" /*style="background-image:url('images/demo/backgrounds/01.png');"*/>
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
                        <p className="fl_left">Copyright &copy; AHIMSA 2017 - All Rights Reserved - <a href="#">Domain Name</a></p>
                    </div>
                </div>
                <a id="backtotop" href="#top"><i className="fa fa-chevron-up"></i></a>
                <script src="layout/scripts/jquery.min.js"></script>
                <script src="layout/scripts/jquery.backtotop.js"></script>
                <script src="layout/scripts/jquery.mobilemenu.js"></script>
                <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
            </div>
        );
    }
}

export default Blog;