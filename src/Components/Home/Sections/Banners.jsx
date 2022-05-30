import axios from 'axios'
import React, { useEffect, componentDidMount, useMemo } from 'react'

import bannerImage from '../../../assets/images/banner-image1.jpg'
import bannerImage2 from '../../../assets/images/banner-image2.jpg'
import bannerLiner from '../../../assets/images/banner-liner.jpg'
import { ApiTypes } from '../../../Redux/Constant/ApiRoute'

const Banners = () => {

    useEffect(() => {
        axios.get(ApiTypes.BANNERS).then((response) => {
            const bannerList = response.data
            // console.log(bannerList)
        });
    });
    return (
        <div className="banner-conceptual"> 
            <div id="home-banner-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                {/* ============== Indicators ========== */}
                <ul className="carousel-indicators">
                    <li data-target="#home-banner-carousel" data-slide-to="0" className="active"></li>
                    <li data-target="#home-banner-carousel" data-slide-to="1"></li> 
                </ul>

                {/* ============== The slideshow ========== */}
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{"background" : `url(${bannerImage})` }}> 
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-12">				
                                    <div className="carousel-caption">
                                        <p><img src={ bannerLiner } alt="" className="img-fluid" /></p>
                                        <p><a href="about-us">Book Now</a></p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div> 
                    <div className="carousel-item" style={{ "backgroundImage": `url(${bannerImage2})` }}> 
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-12">				
                                    <div className="carousel-caption">
                                        <p><img src={ bannerLiner } alt="" className="img-fluid" /></p>
                                        <p><a href="about-us">Book Now</a></p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>  
                </div> 
            </div> 
        </div>
    )
}
export default Banners