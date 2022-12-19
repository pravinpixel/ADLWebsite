import { useEffect, useState } from 'react'
import blogBg from '../../../assets/images/blog-bg.jpg'
import Sliders from 'react-slick'
import axios from 'axios'
import { API_URL } from "../../../Redux/Constant/ApiRoute";

export default function LatestBlogs() {
  const [news, setNews] = useState(null)
  const getNewsAndEvents = () => {
    axios.post(API_URL.NEWS_AND_EVENTS).then((response) => {
      setNews(response.data.data)
    })
  }
  useEffect(() => {
    getNewsAndEvents() 
  }, [])
  
  var settings = {
    slidesToScroll: 1,
    infinite:true,
    slidesToShow: 2,
    focusOnSelect: true, 
    autoplay: true,
    dots: true,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
          {
              breakpoint: 1030,
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
  };
  return (
    <section className="media-structure">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="common-heading">
              <h2><span>Latest</span> Happenings</h2>
            </div>
              {
                news !== null ?
                  <Sliders {...settings} className="lat-hapns"> 
                    {
                      news.map(item => (
                        <div className="haapns">
                          <h3>{item.created_at}</h3>
                          <h4>{item.title}</h4>
                          <p> {item.description} </p>
                        </div> 
                      )) 
                    }
                  </Sliders>
                : ""
              }
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="common-heading">
              <h2><span>Blog</span> Knowledge HUB</h2>
            </div>
            <div className="knoledge-hub">
              <img src={blogBg} alt="" className="img-fluid"/>
              <div className="know-hub">
                <h4>What is Antibody Testing?</h4>
                <p>The antibody or serology test is done to ascertain a previous viral infection and the body’s immune response towards it.</p>
                <p><a href="">Read More</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
