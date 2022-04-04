import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import About from './components/about'
import Projects from './components/projects'
import './css/bootstrap.min.css'
import './index.css';
import './css/agency.min.css';
import WebFont from 'webfontloader';
import Blog from './components/blog'
import Photos from './components/photos'
// import registerServiceWorker from './registerServiceWorker';
import Contact from './components/contact';
WebFont.load({
	google: {
		families: ['Montserrat Web:400,700', 'Kaushan Script', 'Droid Serif:400,700,400italic,700italic', 'Roboto Slab:400,100,300,700']
	}
});
function NavSubItems(props) {
	let lis = props.navitems.map((navitem) =>
		<li className="nav-item" key={navitem.title}>
			<a className="nav-link" href={'#' + navitem.href} key={navitem.href}>{navitem.title}</a>
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
				{/* <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i> */}
			</button>
			<div className="collapse navbar-collapse" id="navbarText">
				<ul className="navbar-nav ml-auto">
					<NavSubItems navitems={props.navitems} />
				</ul>
			</div>
		</div>
	</nav>
}
function MainHeader(props) {
	return <header id="mainheader">
		<div className="container">
			<div className="intro-text">
				<div className="intro-lead-in">Hello World!</div>
				<div className="intro-heading">It's Nice To Meet You</div>
				<a href="https://www.linkedin.com/in/rujoota" className="page-scroll btn btn-primary" target="_blank" rel="noopener noreferrer">
					<img src="./imgs/linkedin.png" width="25" alt="Linkedin" /> My Linkedin
				</a>
				<a href="https://github.com/rujoota" className="page-scroll btn btn-primary" target="_blank" rel="noopener noreferrer">
					<img src="./imgs/github.png" width="25" alt="Git" />My Github</a>
				<a href="http://rujoota.blogspot.in" className="page-scroll btn btn-primary" target="_blank" rel="noopener noreferrer">
					<img src="./imgs/blogspot.png" width="25" alt="Blog" />My Blogs</a>
			</div>
		</div>
	</header>
}
function MainDOM(props) {
	const navItems = [{
		href: "about",
		title: "about"
	}, {
		href: "projects",
		title: "projects"
	}, {
		href: "blog",
		title: "blog"
	}, {
		href: "photolibrary",
		title: "photo library"
	}, {
		href: "contact",
		title: "contact"
	}]
	return [<NavigationBar navitems={navItems} key="NavigationBar" />, <MainHeader key="MainHeader" />, <About key="About" />, <Projects key="Projects" />, <Blog key="Blog" />, <Photos key="Photos" />, <Contact key="Contact" />]
}
// <NavSubItems navitems={props.navitems} />

const element = <MainDOM key="MainDOM" />;
// ReactDOM.render(element, document.getElementById('root'));
ReactDOM.render(
	<React.StrictMode>
		<MainDOM key="MainDOM" />
	</React.StrictMode>,
	document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
