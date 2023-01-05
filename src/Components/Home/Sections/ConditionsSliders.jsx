import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import Sliders from 'react-slick'
import { setTestFilters } from '../../../Redux/Actions/TestAction';
import { API_URL } from '../../../Redux/Constant/ApiRoute';

export default function ConditionsSliders() {
  const  Navigate = useNavigate()
  const  dispatch = useDispatch()
  const  filters = useSelector((state) => state.filters.filters)
  const settings = {
    slidesToScroll: 1,
    infinite: true,
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 1600,
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
  const FilterHandler = (value) => {
    dispatch(setTestFilters({...filters,HealthCondition:value})) 
    Navigate('for-patient')
  }
  const FetchConditions = () => {
    axios.get(API_URL.CONDITIONS_LIST).then((response) => {
      SetConditions(response.data)
    })
  }
  useEffect(() => {
    FetchConditions()
  },[]);
  const [Conditions, SetConditions] = useState([]);
  return (
    <section className="condition-packages">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="common-heading white">
              <h2><span>Select Your Test According </span> to Your Condition </h2>
            </div>
            <br />
            <Sliders {...settings} className="condition-lsts text-center">
              {
                Conditions !== 0 ?
                  Conditions.map((item,i) => (
                    <div key={i} className="tes-cond">
                      <img src={item.image} width="100px" className="img-fluid" />
                      <h4 className='pr-4'>{item.name}</h4>
                      <button onClick={() => FilterHandler(item.name)}><i className="fa fa-plus"></i></button>
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
