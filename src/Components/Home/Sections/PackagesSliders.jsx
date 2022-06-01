
import React from 'react'
import { Link } from 'react-router-dom';
import Sliders from 'react-slick'
import popImg from '../../../assets/images/popular-img-1.jpg'

export default function PackagesSliders() {
  var settings = {
    slidesToScroll: 1,
    infinite:true,
    slidesToShow: 4,
    focusOnSelect: true, 
    autoplay: true,
    dots: false,
    arrows: true,
    autoplaySpeed: 3000,
    responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
              }
          },
          {
              breakpoint: 900,
              settings: {
                  slidesToShow: 2,
                  centerMode: true,
              }
          },
          {
            breakpoint: 680,
            settings: {
                slidesToShow: 2,
                centerMode: true,
            }
        },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  centerMode: true,
              }
          },
    ]
  };
  return (
    <section className="popular-packages">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="common-heading">
              <h2><span>Choose Your </span> Health Checkups / Screenings For </h2>
            </div>
            <br/>
            <Sliders {...settings} className="popular-lists">
              <div className="pack-deils">
                <div className="pck-img">
                  <img src={popImg} alt="" className="img-fluid"/>
                  <div className="ble-fnt">60 <span>Tests</span></div>
                </div>
                <h3>NEU Express</h3>
                <h4>Cholesterol, Triglycerides, HDL, Direct LDL, Calculated Total cholesterol to HDL-cholesterol Ratio...  <Link to="/">+ More</Link></h4>
                <h5>&#8377;180 <span className="strke"><s>&#8377;280</s></span></h5>
                <h6>79 % off T&C*</h6>
                <p><a href="about-us">Book Now</a></p>
              </div>
              <div className="pack-deils">
                <div className="pck-img">
                  <img src={popImg} alt="" className="img-fluid"/>
                  <div className="ble-fnt">60 <span>Tests</span></div>
                </div>
                <h3>NEU Express</h3>
                <h4>Cholesterol, Triglycerides, HDL, Direct LDL, Calculated Total cholesterol to HDL-cholesterol Ratio...  <Link to="/">+ More</Link></h4>
                <h5>&#8377;180 <span className="strke"><s>&#8377;280</s></span></h5>
                <h6>79 % off T&C*</h6>
                <p><a href="about-us">Book Now</a></p>
              </div>
              <div className="pack-deils">
                <div className="pck-img">
                  <img src={popImg} alt="" className="img-fluid"/>
                  <div className="ble-fnt">60 <span>Tests</span></div>
                </div>
                <h3>NEU Express</h3>
                <h4>Cholesterol, Triglycerides, HDL, Direct LDL, Calculated Total cholesterol to HDL-cholesterol Ratio...  <Link to="/">+ More</Link></h4>
                <h5>&#8377;180 <span className="strke"><s>&#8377;280</s></span></h5>
                <h6>79 % off T&C*</h6>
                <p><a href="about-us">Book Now</a></p>
              </div>
              <div className="pack-deils">
                <div className="pck-img">
                  <img src={popImg} alt="" className="img-fluid"/>
                  <div className="ble-fnt">60 <span>Tests</span></div>
                </div>
                <h3>NEU Express</h3>
                <h4>Cholesterol, Triglycerides, HDL, Direct LDL, Calculated Total cholesterol to HDL-cholesterol Ratio...  <Link to="/">+ More</Link></h4>
                <h5>&#8377;180 <span className="strke"><s>&#8377;280</s></span></h5>
                <h6>79 % off T&C*</h6>
                <p><a href="about-us">Book Now</a></p>
              </div>
              <div className="pack-deils">
                <div className="pck-img">
                  <img src={popImg} alt="" className="img-fluid"/>
                  <div className="ble-fnt">60 <span>Tests</span></div>
                </div>
                <h3>NEU Express</h3>
                <h4>Cholesterol, Triglycerides, HDL, Direct LDL, Calculated Total cholesterol to HDL-cholesterol Ratio...  <Link to="/">+ More</Link></h4>
                <h5>&#8377;180 <span className="strke"><s>&#8377;280</s></span></h5>
                <h6>79 % off T&C*</h6>
                <p><a href="about-us">Book Now</a></p>
              </div>
              <div className="pack-deils">
                <div className="pck-img">
                  <img src={popImg} alt="" className="img-fluid"/>
                  <div className="ble-fnt">60 <span>Tests</span></div>
                </div>
                <h3>NEU Express</h3>
                <h4>Cholesterol, Triglycerides, HDL, Direct LDL, Calculated Total cholesterol to HDL-cholesterol Ratio...  <Link to="/">+ More</Link></h4>
                <h5>&#8377;180 <span className="strke"><s>&#8377;280</s></span></h5>
                <h6>79 % off T&C*</h6>
                <p><a href="about-us">Book Now</a></p>
              </div>
              <div className="pack-deils">
                <div className="pck-img">
                  <img src={popImg} alt="" className="img-fluid"/>
                  <div className="ble-fnt">60 <span>Tests</span></div>
                </div>
                <h3>NEU Express</h3>
                <h4>Cholesterol, Triglycerides, HDL, Direct LDL, Calculated Total cholesterol to HDL-cholesterol Ratio...  <Link to="/">+ More</Link></h4>
                <h5>&#8377;180 <span className="strke"><s>&#8377;280</s></span></h5>
                <h6>79 % off T&C*</h6>
                <p><a href="about-us">Book Now</a></p>
              </div>
            </Sliders>
          </div>
        </div>
      </div>
    </section>
  )
}
