import React, { Component } from 'react';
import Parser from 'html-react-parser';
class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = { projs:[] }
  }
  componentDidMount() {
    fetch('/allProjects')
    .then(response => response.json())
    .then(json => this.setState({projs: json}))
  }
  render() {
    let projectArr = [{
        name:"abc",
        img:"",
        desc:"mydesc",
        order:1
    }]
    // console.log("state printing")
    console.log(this.state.projs)
    return (
        <section id="projects" className="bg-light-gray">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading">My Projects</h2>
                    <h3 className="section-subheading text-muted">Collection of my work</h3>
                </div>
            </div>
            <div className="row">
            <Project projects={this.state.projs}/>
            </div>
        </div>
    </section>
    );
  }
}
function Project(props)  {
    return props.projects.map((proj) => 
            <div className="col-md-4 col-sm-6">
                <a href="" className="portfolio-link" data-toggle="modal" data-target={"#portfolioModal"+proj.order} >
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                            <i className="fa fa-hand-pointer-o fa-3x"></i>
                        </div>
                    </div>
                    <img src={proj.img} className="img-fluid" alt="" />
                </a>
                <div className="portfolio-caption">
                    <h4>{proj.name}</h4>
                    <p className="text-muted">{proj.desc}</p>
                </div>
        </div>)
  }
export default Projects;
