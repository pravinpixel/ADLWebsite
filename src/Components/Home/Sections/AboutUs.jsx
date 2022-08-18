import React from 'react'
import Sliders from 'react-slick'
import videoBg from '../../../assets/images/video-bg.jpg'
import playButton from '../../../assets/images/play-icon.png'
import FancyVideo from 'react-videojs-fancybox';

export default function AboutUs() {
  var settings = {
    slidesToScroll: 1,
    infinite:true,
    slidesToShow: 1,
    focusOnSelect: true, 
    autoplay: true,
    dots: true,
    arrows: false,
    autoplaySpeed: 3000,
    responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 1,
              }
          },
          {
              breakpoint: 900,
              settings: {
                  slidesToShow: 1,
              }
          },
          {
            breakpoint: 680,
            settings: {
                slidesToShow: 1,
            }
        },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
              }
          },
    ]
  }
  return (
    <section className="testimonials">
      <div className="container-fluid pr-0">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="testi-section">
              <div className="common-heading">
                <h2>
                  <span>What our customers Are </span>
                  saying About us 
                </h2>
              </div>
              <br/> 
              <Sliders {...settings} className="testimonial-topics"> 
                <div className="testims">
                  I am for the First Time using Home service from Neuberg Lab. The Service rendered by the technician was very nice. He was very courteous and punctual
                  <span>Mr. Ramakrishnan Sridher</span>
                </div>
                <div className="testims">
                  I am for the First Time using Home service from Neuberg Lab. The Service rendered by the technician was very nice. He was very courteous and punctual
                  <span>Mr. Ramakrishnan Sridher</span>
                </div>
              </Sliders>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="testivideo-section">
              <FancyVideo
                id="video"
                source="https://www.w3schools.com/tags/movie.mp4"
                poster={videoBg}
              />
              {/* <div className="plying-btn text-center">
                 <img src={playButton}alt="" className="img-fluid"/>
              </div> */}
            </div> 
          </div>
        </div>
      </div>
    </section>
  )
}
