import React, { Component } from 'react';
import './css/agency.min.css';
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
                <ProjectBlock projects={this.state.projs} />
            </div>
        </div>
    </section>
    );
  }
}
function ProjectDetails(props) {
    return <div class="portfolio-modal modal fade" id={"portfolioModal"+props.project.order} tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl">
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-lg-offset-2">
                            <div class="modal-body">
                                <div id={"project"+props.project.order+"-details"}>
                                    {Parser(props.project.htmlDetails)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
function ProjectBlock(props)  {
    return props.projects.map((proj) => 
        <div style={{float: 'none', margin: '0 auto'}}>
            <div className="portfolio-item">
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
            </div>
            <ProjectDetails project={proj}></ProjectDetails>
        </div>)
  }
export default Projects;
