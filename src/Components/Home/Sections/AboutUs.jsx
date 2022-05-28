import React from 'react'
import Sliders from 'react-slick'
import videoBg from '../../../assets/images/video-bg.jpg'
import playButton from '../../../assets/images/play-icon.png'

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
                  centerMode: true,
              }
          },
          {
            breakpoint: 680,
            settings: {
                slidesToShow: 1,
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
              <Sliders className="testimonial-topics" {...settings}> 
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
              <img src={videoBg} alt="" className="img-fluid"/>
              <div className="plying-btn text-center">
                <a href=""><img src={playButton}alt="" className="img-fluid"/></a>
              </div>
            </div>
            {/* <ReactFancyBox
              showCloseBtn={false}
              thumbnail="https://loremflickr.com/320/240"
              image="https://www.w3schools.com/howto/img_forest.jpg"
            /> */}
          </div>
        </div>
      </div>
    </section>
  )
}
