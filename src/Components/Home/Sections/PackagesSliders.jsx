
import React from 'react'
import Sliders from 'react-slick'
import PackageCard from '../../Containers/PackageCardComponent';

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
              <PackageCard/>
              <PackageCard/>
              <PackageCard/>
              <PackageCard/>
              <PackageCard/>
              <PackageCard/>
              <PackageCard/>
              <PackageCard/>
              <PackageCard/>
              <PackageCard/>
            </Sliders>
          </div>
        </div>
      </div>
    </section>
  )
}
