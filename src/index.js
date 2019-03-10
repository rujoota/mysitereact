import React from 'react';
import ReactDOM from 'react-dom';
import About from './about'
import Projects from './projects'
import './css/bootstrap.min.css'
import './index.css';
import './css/agency.min.css';
import WebFont from 'webfontloader';
import Blog from './blog'
import Photos from './photos'
import registerServiceWorker from './registerServiceWorker';
import Contact from './contact';
WebFont.load({
    google: {
      families: ['Montserrat Web:400,700','Kaushan Script', 'Droid Serif:400,700,400italic,700italic', 'Roboto Slab:400,100,300,700']
    }
  });
function NavSubItems(props) {
    let lis = props.navitems.map((navitem) =>
        <li className="nav-item" key={navitem.title}>
            <a className="nav-link" href={'#'+navitem.href} key={navitem.href}>{navitem.title}</a>
        </li>
    );
    return (<ul key="mainul" className="navbar-nav ml-auto">{lis}</ul>)
}
function NavigationBar(props) {
    return <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-custom" id="mainNav">
        <div className="container">  
        <a className="navbar-brand" href="#page-top">Home<span className="sr-only">(current)</span></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ml-auto">
                <NavSubItems navitems={props.navitems} />
            </ul>
          </div>
          </div>
        </nav>
}
function MainHeader(props){
   return <header id="mainheader">
            <div className="container">
                <div className="intro-text">
                    <div className="intro-lead-in">Hello World!</div>
                    <div className="intro-heading">It's Nice To Meet You</div>
                    <a href="https://www.linkedin.com/in/rujoota" className="page-scroll btn btn-primary" target="_blank">
                        <img src="./imgs/linkedin.png" width="25" /> My Linkedin
                        </a>
                    <a href="https://github.com/rujoota" className="page-scroll btn btn-primary" target="_blank">
                        <img src="./imgs/github.png" width="25" />My Github</a>
                    <a href="http://rujoota.blogspot.in" className="page-scroll btn btn-primary" target="_blank">
                        <img src="./imgs/blogspot.png" width="25" />My Blogs</a>
                </div>
            </div>
        </header>
}
function MainDOM(props){
    const navItems = [{
        href:"about",
        title:"about"
    }, {
        href:"projects",
        title:"projects"
    }, {
        href:"blog",
        title:"blog"
    }, {
        href:"photolibrary",
        title:"photo library"
    }, {
        href:"contact",
        title:"contact"
    }]
    return [<NavigationBar navitems={navItems}/>, <MainHeader />, <About />, <Projects />, <Blog />, <Photos />, <Contact />]
}
// <NavSubItems navitems={props.navitems} />

const element = <MainDOM />;
ReactDOM.render(element, document.getElementById('root'));
registerServiceWorker();
