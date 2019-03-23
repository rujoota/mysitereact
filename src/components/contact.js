import React, { Component } from 'react';
import '../css/agency.min.css';
class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">Let's Get In Touch!</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <i className="fa fa-linkedin fa-3x sr-contact"></i>
                        <p><a href="https://www.linkedin.com/in/rujoota" target="_blank" className="text-warning" rel="noopener noreferrer">Linkedin</a></p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
