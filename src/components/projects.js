import React, { Component } from 'react';
import '../css/agency.min.css';
import Parser from 'html-react-parser';
class Projects extends Component {
	constructor(props) {
		super(props)
		this.state = { projs: [] }
	}
	componentDidMount() {
		fetch('../data/projects.json')
			.then(response => response.json())
			.then(json => this.setState({ projs: json.projects }))
	}
	render() {
		// console.log("state printing")
		console.log(this.state.projs)
		if (this.state.projs) {
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
							<ProjectBlock projects={this.state.projs} key='project-block' />
						</div>
					</div>
				</section>
			);
		}

	}
}
function ProjectDetails(props) {
	return <div class="modal fade portfolio-modal" id={"portfolioModal" + props.project.order} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
		<div class="modal-dialog modal-full" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" className="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div className="modal-body">
					<div class="container">
						<div class="row">
							<div class="col-lg-12">
								<div id={"project" + props.project.order + "-details"}>
									{Parser(props.project.htmlDetails)}
								</div>
							</div>
						</div>
					</div>
					<div class="project-center">
						<button type="button" class="btn btn-primary project-center" data-dismiss="modal"><i
							class="fa fa-times"></i> Close Project
						</button>
					</div>
				</div>

			</div>
		</div>
	</div>
}
function ProjectBlock(props) {
	return props.projects.map((proj) =>
		<div style={{ float: 'none', margin: '0 auto' }}>
			<div className="portfolio-item">
				<a href="" className="portfolio-link" data-toggle="modal" data-target={"#portfolioModal" + proj.order} key={"project" + proj.order}>
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
