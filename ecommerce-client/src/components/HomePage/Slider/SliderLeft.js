import React, { Component } from 'react'

export default class SliderLeft extends Component {
  render() {
    return (
      <div className="col-lg-8 col-md-8">
        <div className="slider-area">
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="https://pbs.twimg.com/media/EKZ8MLdU0AAJdEz.jpg" alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://snkrvn.com/wp-content/uploads/2019/01/justin-bieber-drew-collection-launch-01-1200x800-960x640.jpg" alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://i.insider.com/5d52c586cd9784018865200f?width=600&format=jpeg&auto=webp" alt="Third slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
