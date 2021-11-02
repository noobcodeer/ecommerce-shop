import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class BannerMiddle extends Component {
  render() {
    return (
      <div className="li-static-banner" style={{marginTop: -50}}>
        <div className="container">
          <div className="row">
            {/* Begin Single Banner Area */}
            <div className="col-lg-4 col-md-4 text-center">
              <div className="single-banner">
                <Link to="#">
                  <img src="https://i1.wp.com/www.fashionrevolution.org/wp-content/uploads/2021/08/theSeam1x1_11.jpg?resize=640%2C640&ssl=1" alt="Li's Static Banner" />
                </Link>
              </div>
            </div>
            {/* Single Banner Area End Here */}
            {/* Begin Single Banner Area */}
            <div className="col-lg-4 col-md-4 text-center pt-xs-30">
              <div className="single-banner">
                <Link to="#">
                  <img src="https://www.fashionrevolution.org/wp-content/uploads/2021/08/The-Seam-Banner-2.jpg" alt="Li's Static Banner" />
                  <h4>A modern legacy, with an eternal perspective.</h4>
                </Link>
              </div>
            </div>
            {/* Single Banner Area End Here */}
            {/* Begin Single Banner Area */}
            <div className="col-lg-4 col-md-4 text-center pt-xs-30">
              <div className="single-banner">
                <Link to="#">
                  <img src="https://i1.wp.com/www.fashionrevolution.org/wp-content/uploads/2021/08/TheSeam_fr_article6.jpg?resize=640%2C640&ssl=1" alt="Li's Static Banner" />
                </Link>
              </div>
            </div>
            {/* Single Banner Area End Here */}
          </div>
        </div>
      </div>

    )
  }
}
