import React, { Component } from 'react'

export default class AboutPage extends Component {
  render() {
    return (
      <div>
  <div className="breadcrumb-area">
    <div className="container">
      <div className="breadcrumb-content">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li className="active">/About Us</li>
        </ul>
      </div>
    </div>
  </div>
  {/* Li's Breadcrumb Area End Here */}
  {/* about wrapper start */}
  <div className="about-us-wrapper pt-60 pb-40">
    <div className="container">
      <div className="row">
        {/* About Text Start */}
        <div className="col-lg-6 order-last order-lg-first">
          <div className="about-text-wrap">
            <h2><span>OUR STORY</span>BEHIND THE BRAND</h2>
            <p>We are named for the coldest, most unforgiving side of a mountain. We have helped explorers reach the most unfathomable heights of the Himalayas. But The North Face® legend begins, ironically, on a beach. More precisely, San Francisco's North Beach neighborhood, at an altitude of only 150 feet above sea level. It was here in 1966 that two hiking enthusiasts resolved to follow their passions and founded a small mountaineering retail store</p>
            <p>From the beginning, the brand committed to serving all those who desired to explore and to serving our natural wild lands by helping to conserve them. </p>
            <p>At our core, we believe exploration creates an indelible bond with the outdoors, inspiring people to protect our land and pass these beliefs down to the next generation.</p>
          </div>
        </div>
        {/* About Text End */}
        {/* About Image Start */}
        <div className="col-lg-5 col-md-10">
          <div className="about-image-wrap">
            <img className="img-full" src="https://ca-times.brightspotcdn.com/dims4/default/3dc7cd6/2147483647/strip/true/crop/1600x900+0+0/resize/840x473!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fec%2Fc1%2Fd98d968b875dfdc7e725191455dd%2Fla-1541092272-ir5utiznsk-snap-image" alt="About Us" />
          </div>
        </div>
        {/* About Image End */}
      </div>
    </div>
  </div>
  {/* about wrapper end */}
  {/* Begin Counterup Area */}
  <div className="counterup-area">
    <div className="container-fluid p-0">
      <div className="row no-gutters">
        <div className="col-lg-3 col-md-6">
          {/* Begin Limupa Counter Area */}
          <div className="limupa-counter white-smoke-bg">
            <div className="container">
              <div className="counter-img">
                <img src="https://i.ibb.co/QKXDBNM/1.png" alt="" />
              </div>
              <div className="counter-info">
                <div className="counter-number">
                  <h3 className="counter">10+</h3>
                </div>
                <div className="counter-text">
                  <span>PROFESSIONAL STAFF</span>
                </div>
              </div>
            </div>
          </div>
          {/* limupa Counter Area End Here */}
        </div>
        <div className="col-lg-3 col-md-6">
          {/* Begin limupa Counter Area */}
          <div className="limupa-counter gray-bg">
            <div className="counter-img">
              <img src="https://i.ibb.co/f1Zj6SL/2.png" alt="" />
            </div>
            <div className="counter-info">
              <div className="counter-number">
                <h3 className="counter">1</h3>
              </div>
              <div className="counter-text">
                <span>THE BEST PRODUCT</span>
              </div>
            </div>
          </div>
          {/* limupa Counter Area End Here */}
        </div>
        <div className="col-lg-3 col-md-6">
          {/* Begin limupa Counter Area */}
          <div className="limupa-counter white-smoke-bg">
            <div className="counter-img">
              <img src="https://i.ibb.co/vBktQgS/3.png" alt="" />
            </div>
            <div className="counter-info">
              <div className="counter-number">
                <h3 className="counter">24/7</h3>
              </div>
              <div className="counter-text">
                <span>HOURS WORKED</span>
              </div>
            </div>
          </div>
          {/* limupa Counter Area End Here */}
        </div>
        <div className="col-lg-3 col-md-6">
          {/* Begin limupa Counter Area */}
          <div className="limupa-counter gray-bg">
            <div className="counter-img">
              <img src="https://i.ibb.co/z5t0Q7H/4.png" alt="" />
            </div>
            <div className="counter-info">
              <div className="counter-number">
                <h3 className="counter"></h3>
              </div>
              <div className="counter-text">
                <span>YOUR NUMBER 1 CHOISE</span>
              </div>
            </div>
          </div>
          {/* limupa Counter Area End Here */}
        </div>
      </div>
    </div>
  </div>
  {/* Counterup Area End Here */}
  {/* team area wrapper start */}
  <div className="team-area pt-60 pt-sm-44">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="li-section-title capitalize mb-25">
            <h2><span>our team</span></h2>
          </div>
        </div>
      </div> {/* section title end */}
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="team-member mb-60 mb-sm-30 mb-xs-30">
            <div className="team-thumb">
              <img style={{height: 350, width: 270}} src="https://lh3.googleusercontent.com/proxy/ZUUPjNSnBURpjUyu3Dmpcy38W2ezKVb2PwVPbOXeqoHvQwlUfqfMjYMoV-cSOoMG6dWCnpVzE4RmGfqjZqLB" alt="Our Team Member" />
            </div>
            <div className="team-content text-center">
              <h3>Indigo</h3>
              <p>IT Expert</p>
              <a href="/">Indigo@gmail.com</a>
              <div className="team-social">
                <a href="/"><i className="fa fa-facebook" /></a>
                <a href="/"><i className="fa fa-twitter" /></a>
                <a href="/"><i className="fa fa-linkedin" /></a>
                <a href="/"><i className="fa fa-google-plus" /></a>
              </div>
            </div>
          </div>
        </div> {/* end single team member */}
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="team-member mb-60 mb-sm-30 mb-xs-30">
            <div className="team-thumb">
              <img style={{height: 350, width: 270}} src="https://i.pinimg.com/originals/a1/7b/22/a17b227cbcf3fd062ed4573a7d4547c2.jpg" alt="Our Team Member" />
            </div>
            <div className="team-content text-center">
              <h3>Justin Bieber</h3>
              <p>Web Designer</p>
              <a href="/">justinberber@gmail.com</a>
              <div className="team-social">
                <a href="/"><i className="fa fa-facebook" /></a>
                <a href="/"><i className="fa fa-twitter" /></a>
                <a href="/"><i className="fa fa-linkedin" /></a>
                <a href="/"><i className="fa fa-google-plus" /></a>
              </div>
            </div>
          </div>
        </div> {/* end single team member */}
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="team-member mb-30 mb-sm-60">
            <div className="team-thumb">
              <img style={{height: 350, width: 270}} src="data:image/jpeg;base64,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" alt="Our Team Member" />
            </div>
            <div className="team-content text-center">
              <h3>Kanye West</h3>
              <p>Web Developer</p>
              <a href="/">kanye@gmail.com</a>
              <div className="team-social">
                <a href="/"><i className="fa fa-facebook" /></a>
                <a href="/"><i className="fa fa-twitter" /></a>
                <a href="/"><i className="fa fa-linkedin" /></a>
                <a href="/"><i className="fa fa-google-plus" /></a>
              </div>
            </div>
          </div>
        </div> {/* end single team member */}
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="team-member mb-30 mb-sm-60 mb-xs-60">
            <div className="team-thumb">
              <img style={{height: 350, width: 270}} src="https://i.ibb.co/CbjRfW2/4.png" alt="Our Team Member" />
            </div>
            <div className="team-content text-center">
              <h3>Maria Mandy</h3>
              <p>Marketing officer</p>
              <a href="/">Maria@gmail.com</a>
              <div className="team-social">
                <a href="/"><i className="fa fa-facebook" /></a>
                <a href="/"><i className="fa fa-twitter" /></a>
                <a href="/"><i className="fa fa-linkedin" /></a>
                <a href="/"><i className="fa fa-google-plus" /></a>
              </div>
            </div>
          </div>
        </div> {/* end single team member */}
      </div>
    </div>
  </div>
</div>

    )
  }
}
