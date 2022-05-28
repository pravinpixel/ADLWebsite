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
    <section class="testimonials">
      <div class="container-fluid pr-0">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div class="testi-section">
              <div class="common-heading">
                <h2><span>What our customers Are </span> saying About us </h2>
              </div>
              <br/> 
              <Sliders class="testimonial-topics" {...settings}> 
                <div class="testims">
                  I am for the First Time using Home service from Neuberg Lab. The Service rendered by the technician was very nice. He was very courteous and punctual
                  <span>Mr. Ramakrishnan Sridher</span>
                </div>
                <div class="testims">
                  I am for the First Time using Home service from Neuberg Lab. The Service rendered by the technician was very nice. He was very courteous and punctual
                  <span>Mr. Ramakrishnan Sridher</span>
                </div>
              </Sliders>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div class="testivideo-section">
              <img src={videoBg} alt="" class="img-fluid"/>
              <div class="plying-btn text-center">
                <a href=""><img src={playButton}alt="" class="img-fluid"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
