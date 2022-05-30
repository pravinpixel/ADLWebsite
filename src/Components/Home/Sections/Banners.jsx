import axios from 'axios'
import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setBanners } from '../../../Redux/Actions/BannerAction'
import { API_URL } from '../../../Redux/Constant/ApiRoute'
import {assets} from '../../../../src/Helpers'
import { setBanners } from '../../../Redux/Actions/BannerAction'
import { ApiTypes } from '../../../Redux/Constant/ApiRoute'

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
                {
                    bannerList.length === 0 ?   null    : 
                    <ul className="carousel-indicators"> 
                        {
                            bannerList.banners.data.map(( banner, index ) =>  (
                                <li key={index} data-target="#home-banner-carousel" data-slide-to={index} className={index === 0 ? "active" : ''}></li>
                            ))
                        }
                    </ul>
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
                                    <div key={index} className={index === 0 ? "carousel-item active" : "carousel-item"} style={{ "background": `url(${assets(banner.DesktopImage)})` }}> 
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
                <form onsubmit="return valid_chk()" name="form3" method="post" action="#" id="form">
                    <div class="frm-fields row clearfix">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div class="form-data">
                                <input class="input100" type="text" name="name" id="name" placeholder=""/>
                                <span class="focus-input100" data-placeholder="Your Full Name"></span>
                            </div>
                            <div class="form-data">
                                <input class="input100" type="tel" name="phone" onkeypress="validate(event)" maxlength="10" id="phone" placeholder=""/>
                            <span class="focus-input100" data-placeholder="Your Mobile Number"></span>
                            </div>
                            <div class="form-data">
                                <input class="input100" type="text" name="email" id="email" placeholder=""/>
                                <span class="focus-input100" data-placeholder="Email Address"></span>	
                            </div>
                            <div class="form-data">
                                <input class="input100" type="text" name="location" id="location" placeholder=""/>
                                <span class="focus-input100" data-placeholder="Location"></span>
                            </div>
                                    <div class="form-data">
                                <select class="input100 has-val">
                                    <option selected>- Select Test -</option>
                                    <option>Blood Test</option>
                                    <option>Urine Test</option>
                                    <option>Stool Test</option>
                                    <option>Sputum Test</option>
                                    <option>Pus Test</option>
                                </select>
                                <span class="focus-input100" data-placeholder="Select Test"></span>
                            </div>
                                    <div class="form-data date-time">
                                <input class="input100" type="text" name="" id="dateTime" placeholder=""/>
                                <span class="focus-input100" data-placeholder="Choose Date and Time"></span>	
                            </div>
                            <div class="form-data sbm text-right">
                                <input type="submit" name="submit" value="Submit"/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>   
    )
}
export default Banners