import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Sliders from 'react-slick'
import conditionIcon from '../../../assets/images/condition-icon-1.png'
import { API_URL } from '../../../Redux/Constant/ApiRoute';

export default function ConditionsSliders() {
  var settings = {
    slidesToScroll: 1,
    infinite: true,
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

        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,

        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 2,

        }
      },
    ]
  };
  useEffect(() => {
    axios.get(API_URL.CONDITIONS_LIST).then((response) => {
      SetConditions(response.data)
    })
  });
  const [Conditions, SetConditions] = useState([]);
  return (
    <section className="condition-packages">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="common-heading white">
              <h2><span>Pick Your </span> Tests by Condition </h2>
            </div>
            <br />
            <Sliders {...settings} className="condition-lsts text-center">
              {
                Conditions !== 0 ?
                  Conditions.map(item => (
                    <div className="tes-cond">
                      <img src={item.image} width="100px" className="img-fluid" />
                      <h4 className='pr-4'>{item.name}</h4>
                      <button><i className="fa fa-plus"></i></button>
                    </div> 
                  ))
                : null
              } 
            </Sliders>
          </div>
        </div>
      </div>
    </section>
  )
}
