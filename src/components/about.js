import React, { Component } from 'react';
import Parser from 'html-react-parser';
class About extends Component {
	constructor() {
		super()
		this.state = { arr: [] }
	}
	componentDidMount() {
		let self=this;
		fetch('../data/about.json', {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		}).then(function (response) {
			return response.json();
		}).then(function (myJson) {
			self.setState({ arr: myJson.about });
			console.log(myJson.about);
		});
	}

	liComponent(arrItem, index) {
		let cname = null
		if (index % 2 === 0) {
			cname = "timeline-inverted"
		}
		return <li className={cname} key={arrItem + index}>
			<div className="timeline-image">
				<img className="rounded-circle img-fluid" src={arrItem.img} alt="" />
			</div>
			<div className="timeline-panel">
				<div className="timeline-heading">
					<h4>{arrItem.timeline}</h4>
					<h4 className="subheading">{Parser(arrItem.subheading)}</h4>
				</div>
				<div className="timeline-body">
					{Parser(arrItem.timelineBody)}
				</div>
			</div>
		</li>
	}
	render() {
		let arr = this.state.arr;
		if (arr && arr.length > 0) {
			let lis = arr.map((arrItem, index) => this.liComponent(arrItem, index))
			lis.push(<li key="timelineImage">
				<div className="timeline-image">
					<h4>Born in
						<br />1987
					</h4>
				</div>
			</li>)
			lis.push(<li className="timeline-inverted" key="timelineInverted">
				<div className="timeline-image">
					<h4>Be Part of
						<br />my timeline.
						<br />Scorll up.
					</h4>
				</div>
			</li>)
			return (
				<section id="about">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 text-center">
								<h2 className="section-heading">My Timeline</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<ul className="timeline">
									{lis}
								</ul>
							</div>
						</div>
					</div>
				</section>
			);
		}
	}
}

export default About;
