import axios from 'axios'
import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import bannerImage from '../../../assets/images/banner-image1.jpg'
import bannerImage2 from '../../../assets/images/banner-image2.jpg'
import { setBanners } from '../../../Redux/Actions/BannerAction'
import { API_URL } from '../../../Redux/Constant/ApiRoute'
import {assets} from '../../../../src/Helpers'

const Banners = () => { 
    const dispatch      =   useDispatch();
    const bannerList    =   useSelector((state) =>  state.HomePageBanners)

    useEffect(() => {
        return () => {
            axios.get(API_URL.BANNERS).then((response) => {
                dispatch(setBanners(response.data))
            });
        }
    }, []);
 

    return ( 
        <div className="banner-conceptual">
            <div id="home-banner-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                {/* <!-- Indicators --> */}
                
                {
                    bannerList.length !== 0 ? 
                        <ul className="carousel-indicators"> 
                            {
                                bannerList.banners.data.map(( banner, index ) =>  (
                                    <li data-target="#home-banner-carousel" data-slide-to={index} className={index === 0 ? "active" : ''}></li>
                                ))
                            }
                        </ul>
                    : null
                }
                
                {/* <!-- The slideshow --> */}
                <div className="carousel-inner">
                    {
                        bannerList.length === 0 
                        ? 
                            <div className="carousel-item active bg-dark"> 
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12">				
                                            <div className="carousel-caption">
                                                <h1>
                                                    <span className='bg-secondary text-secondary'>ENSURING “CARE” IN</span><br/>
                                                    <span className='bg-secondary text-secondary'>HEALTHCARE Step Up .</span><br/>
                                                    <span className='bg-secondary text-secondary'>for Good Health.</span>
                                                </h1>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </div> 
                        : 
                        <>
                            {
                                bannerList.banners.data.map(( banner, index ) =>  ( 
                                    <div class={index === 0 ? "carousel-item active" : "carousel-item"} style={{ "background": `url(${assets(banner.DesktopImage)})` }}> 
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-sm-12 col-md-12 col-lg-12">				
                                                    <div className="carousel-caption">
                                                        <h1>{banner.Title}</h1> 
                                                    </div>
                                                </div> 
                                            </div>
                                        </div>
                                    </div> 
                                ))
                            } 
                        </>
                    } 
                </div> 
            </div> 
            <div className='banner-form'>

            </div>
        </div>   
    )
}
export default Banners