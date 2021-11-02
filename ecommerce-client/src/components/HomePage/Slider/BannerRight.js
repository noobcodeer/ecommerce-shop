import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class BannerRight extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-4 text-center pt-xs-30">
        <div className="li-banner">
          <Link tp="#">
            <img src="https://coolmaterial.com/wp-content/uploads/2018/06/CHCM.jpg" alt="not found" />
          </Link>
        </div>
        <div className="li-banner mt-15 mt-sm-30 mt-xs-30">
          <Link tp="#">
            <img src="https://hauteliving.com/wp-content/uploads/2020/09/C51D7F5C-53E1-413F-B344-D727F1FE9827.jpeg" alt="not found" />
          </Link>
        </div>
      </div>
    )
  }
}
