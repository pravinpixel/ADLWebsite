import React from 'react'
import { Link } from 'react-router-dom';
import Sliders from 'react-slick'
import  conditionIcon from '../../../assets/images/condition-icon-1.png'

export default function ConditionsSliders() {
  var settings = {
    slidesToScroll: 1,
    infinite:true,
    slidesToShow: 6,
    focusOnSelect: true, 
    autoplay: true,
    dots: false,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 4,
              }
          },
          {
              breakpoint: 900,
              settings: {
                  slidesToShow: 3,
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
    <section className="condition-packages">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="common-heading white">
              <h2><span>Pick Your </span> Tests by Condition </h2>
            </div>
            <br/>
            <Sliders {...settings} className="condition-lsts text-center">
              <div className="tes-cond">
                <img src={conditionIcon} alt="" className="img-fluid"/>
                <h4>Allergy</h4>
                <Link to="/"> + </Link>
              </div>
              <div className="tes-cond">
                <img src={conditionIcon} alt="" className="img-fluid"/>
                <h4>Allergy</h4>
                <Link to="/"> + </Link>
              </div>
              <div className="tes-cond">
                <img src={conditionIcon} alt="" className="img-fluid"/>
                <h4>Allergy</h4>
                <Link to="/"> + </Link>
              </div>
              <div className="tes-cond">
                <img src={conditionIcon} alt="" className="img-fluid"/>
                <h4>Allergy</h4>
                <Link to="/"> + </Link>
              </div>
              <div className="tes-cond">
                <img src={conditionIcon} alt="" className="img-fluid"/>
                <h4>Allergy</h4>
                <Link to="/"> + </Link>
              </div>
              <div className="tes-cond">
                <img src={conditionIcon} alt="" className="img-fluid"/>
                <h4>Allergy</h4>
                <Link to="/"> + </Link>
              </div>
              <div className="tes-cond">
                <img src={conditionIcon} alt="" className="img-fluid"/>
                <h4>Allergy</h4>
                <Link to="/"> + </Link>
              </div>
              <div className="tes-cond">
                <img src={conditionIcon} alt="" className="img-fluid"/>
                <h4>Allergy</h4>
                <Link to="/"> + </Link>
              </div>
              <div className="tes-cond">
                <img src={conditionIcon} alt="" className="img-fluid"/>
                <h4>Allergy</h4>
                <Link to="/"> + </Link>
              </div>
              <div className="tes-cond">
                <img src={conditionIcon} alt="" className="img-fluid"/>
                <h4>Allergy</h4>
                <Link to="/"> + </Link>
              </div>
            </Sliders>
          </div>
        </div>
      </div>
    </section>
  )
}
