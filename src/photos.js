import React, { Component } from 'react';
import './css/agency.min.css';
class Photos extends Component {
    renderImages() {
        let children = []
        for (let j = 0; j < 5; j++) {
            children.push(<td>{`Column ${j + 1}`}</td>)
        }
    }
  render() {
    return (
        <section id="photolibrary" className="bg-light-gray">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading">Flora Photography</h2>
                </div>
            </div>
            <div className="container">
                <br />
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="../imgs/flora/first.png" alt="Flower" className="d-block w-100" />
                        </div>
                        {[...Array(10)].map((x, i) =>
                           <div className="carousel-item">
                                <img src={"../imgs/flora/"+(i+1)+".png"} alt="Flower" className="d-block w-100" />
                            </div>
                        )}
                        
                    </div>
                    <button className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev" >
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </button>
                    <button className="carousel-control-next" href="#myCarousel" role="button" data-slide="next" >
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </button>
                </div>
                <div className="row justify-content-end">
                <a href="https://www.flickr.com/photos/rujoota/" target="_blank" className="btn btn-xl">
                    View more &rarr;
                </a>
                </div>
    </div>
</section>
    );
  }
}

export default Photos;
