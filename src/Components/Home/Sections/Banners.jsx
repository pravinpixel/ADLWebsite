import axios from 'axios'
import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import bannerImage from '../../../assets/images/banner-image1.jpg'
import bannerImage2 from '../../../assets/images/banner-image2.jpg'
import { setBanners } from '../../../Redux/Actions/BannerAction'
import { ApiTypes } from '../../../Redux/Constant/ApiRoute'

const Banners = () => { 
    const dispatch      =   useDispatch();
    const bannerList    =   useSelector((state) =>  state.HomePageBanners)

    useEffect(() => {
        return () => {
            axios.get(ApiTypes.BANNERS).then((response) => {
                dispatch(setBanners(response.data))
            });
        }
    }, []);

    return (
        <>  
            {
                bannerList.length === 0 
                ? 
                    <div>loading</div>
                : 
                <div className="banner-conceptual">
                    <div id="home-banner-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                        {/* <!-- Indicators --> */}
                        <ul className="carousel-indicators">
                            <li data-target="#home-banner-carousel" data-slide-to="0" className="active"></li>
                            <li data-target="#home-banner-carousel" data-slide-to="1"></li> 
                        </ul>
                        {/* <!-- The slideshow --> */}
                        <div className="carousel-inner">
                            <div className="carousel-item active" style={{"background" : `url(${bannerImage})` }}> 
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12">				
                                            <div className="carousel-caption">
                                                <h1>ENSURING “CARE” IN<br></br> HEALTHCARE Step Up<br></br> for Good Health.</h1>
                                                {/* <p><a href="about-us">Book Now</a></p> */}
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </div> 
                            <div className="carousel-item" style={{ "background": `url(${bannerImage2})` }}> 
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12">				
                                            <div className="carousel-caption">
                                                <h1>ENSURING “CARE” IN<br></br> HEALTHCARE Step Up<br></br> for Good Health.</h1>
                                                {/* <p><a href="about-us">Book Now</a></p> */}
                                            </div>
                                        </div> 
                                    </div>
                                </div>  
                            </div> 
                        </div> 
                    </div> 
                    <div className='banner-form'>

                    </div>
                </div>
            } 
        </>
    )
}
export default Banners