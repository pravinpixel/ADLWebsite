
import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react';
import Sliders from 'react-slick'
import { API_URL } from '../../../Redux/Constant/ApiRoute';
import PackageCard from '../../Containers/PackageCardComponent';

export default function PackagesSliders({title,subTitle}) {
  const [Packages , SetPackages] = useState(null);
  var settings = {
    slidesToScroll: 1,
    infinite:true,
    slidesToShow: 4,
    autoplay: true,
    dots: false,
    arrows: true,
    autoplaySpeed: 3000,
    responsive: [
          {
              breakpoint: 1100,
              settings: {
                  slidesToShow: 3,
              }
          },
          {
              breakpoint: 900,
              settings: {
                  slidesToShow: 2,
                   
              }
          },
          {
            breakpoint: 680,
            settings: {
                slidesToShow: 2,
                 
            }
        },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                   
              }
          },
    ]
  };
  const getPackageSliders = () => {
    axios.post(API_URL.TEST_LISTS + "/packages", { 
      search: null,
      tack  : 10,
      sort  : 'hight'
    }).then((response) => {
      SetPackages(response.data.data)
    });
  }; 
  useEffect(() => {
    getPackageSliders();
  }, []);
  return (
    <section className="popular-packages">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="common-heading">
              <h2><span>{title}</span>{subTitle}</h2>
            </div>
            <br/>
            <Sliders {...settings} className="popular-lists">
              {
                Packages != null ?
                  Packages.map((item,index) => (
                    <div key={index}>
                      <PackageCard data={item} packages={getPackageSliders}/>
                    </div>
                  ))
                : ""
              } 
            </Sliders>
          </div>
        </div>
      </div>
    </section>
  )
}
