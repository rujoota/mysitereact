import React, { Component } from 'react';
import Parser from 'html-react-parser';
class About extends Component {
  constructor() {
    super()
    this.arr = [{
      subheading: `Software Engineering`,
      img: "../imgs/about/workingwoman.jpg",
      timeline: "Jan 2017 - Present",
      timelineBody:
        `<h4 className="text-muted">
                        at <a href="https://www.ge.com/digital/" target="_blank" rel="noopener noreferrer">GE Digital</a>, San Ramon, California
                    </h4>
      <p className="text-muted">
        Full stack developer in the team to work on providing data scientists spark based framework for writing analytics
                      </p>
                    `
    }, {
      subheading: "Graduation",
      img: "../imgs/about/masters.jpg",
      timeline: "Dec 2016",
      timelineBody:
        `<p className="text-muted">
            Hurrayyyyyyy
          </p>`
    }, {
      subheading: "Summer Internship",
      img: "../imgs/about/sungevity.jpg",
      timeline: "June 2016 - Aug 2016",
      timelineBody:
        `<h4 className="text-muted">
            at <a href="http://www.sungevity.com/" target="_blank">Sungevity</a>, Oakland, California
        </h4>
        <p className="text-muted">
            Worked on creating a tool to display analytics of test-cases for QA team using Testrail’s APIs. Enhenced page loading performance by 90%.
        </p>`
    }, {
      subheading: "Study continues and started working as Teaching Assistant",
      img: "../imgs/about/ta.gif",
      timeline: "Sep 2015 - May 2016",
      timelineBody:
        `<p className="text-muted">
            An on-campus job to help students solve computer science related problems for software courses.
        </p>`
    }, {
      subheading: "Got back to learning! Started doing Masters",
      img: "../imgs/about/backtoschool1.png",
      timeline: "Jan 2015",
      timelineBody:
        `<h4 className="text-muted">
          in Computer Science at <a href="http://www.sfsu.edu/" target="_blank">San Francisco State University</a>
      </h4>`
    }, {
      subheading: `Worked at <a href="http://www.amdocs.com/pages/homepage.aspx" target="_blank">Amdocs</a>, Pune, India`,
      img: "../imgs/about/amdocs.png",
      timeline: "Apr 2012 - Oct 2013",
      timelineBody:
        `<h4 className="text-muted">as Sr. Subject Matter Expert</h4>
            <p className="text-muted">Worked as full stack web developer on their global website Amdocs.com and AmdocsBlogs-internal blog system used by employees and especially higher management to publish company related updates.
            </p>`
    }, {
      subheading: `Worked at <a href="https://www.cgi.com/en" target="_blank">CGI</a>, Pune, India`,
      img: "../imgs/about/cgi.gif",
      timeline: "July 2011 - Apr 2012",
      timelineBody:
        `<h4 className="text-muted"> as Software Engineer</h4>
            <p className="text-muted">Enhanced their ticketing system & maintenance projects. Built a tool to clean up SharePoint server farm to save disk space.
            </p>`
    }, {
      subheading: "Wow...love at first job!",
      img: "../imgs/about/infosys.jpg",
      timeline: "June 2009 - June 2011",
      timelineBody:
        `<h4 className="text-muted">
              at <a href="https://www.infosys.com/" target="_blank">Infosys</a>, Chandigarh, India as System Engineer
          </h4>
          <p className="text-muted">
              Built and deployed enterprise level distributed system of intranet web portals for employee collaboration.
          </p>`
    }, {
      subheading: "Bachelor of Technology(B.Tech)",
      img: "../imgs/about/graduation.png",
      timeline: "Aug 2005-May 2009",
      timelineBody:
        `<h4 className="text-muted"> in Information Technology
              from <a href="http://www.nirmauni.ac.in/" target="_blank">Nirma University</a>, Ahmedabad, India
              </h4>
          <p className="text-muted">
              Similar to what's called Bachelors in 'Computer Science'
          </p>`
    }
    ]
  }
  liComponent(arrItem, index) {
    if (index % 2 == 0) {
      return <li className="timeline-inverted">
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
    else {
      return <li>
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
  }
  render() {
    let lis = this.arr.map((arrItem, index) => this.liComponent(arrItem, index))
    lis.push(<li>
      <div className="timeline-image">
        <h4>Born in
              <br />1987
        </h4>
      </div>
    </li>)
    lis.push(<li className="timeline-inverted">
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

export default About;
