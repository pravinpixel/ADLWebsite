import axios from 'axios'
import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
                <div className='banner-form'>
                    <form onsubmit="return valid_chk3()" name="form3" method="post" action="" id="form3">
                                <div class="frm-fields row clearfix">
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <h4 className='cont-frmhed'>Book Home Collection</h4>
                                    <div class="form-data">
                                        <input class="input100" type="text" name="name" id="name" placeholder="Name"/> 
                                    </div>
                                    <div class="form-data">
                                        <input class="input100" type="tel" name="phone" onkeypress="validate(event)" maxlength="10" id="phone" placeholder="Mobile"/> 
                                    </div>
                                    <div class="form-data">
                                        <input class="input100" type="text" name="name" id="name" placeholder="Select Your Location"/> 
                                    </div> 
                                    <div class="form-data upload-btn-wrapper">
                                    <button class="btn">Upload a file----</button>
                                    <input type="file" name="myfile" />
                                    </div>
                                    <div class="form-data">
                                        <input class="input100" type="text" name="name" id="name" placeholder="Select Test Name"/> 
                                    </div>
                                    <div class="form-data">
                                        <input class="input100" type="text" name="message" id="message" placeholder="Comments"/> 
                                    </div>
                                    <div class="form-data sbm">
                                        <input type="submit" name="submit" value="SUBMIT"/>
                                    </div>
                                </div>
                                </div>
                    </form>
                </div> 
            </div> 
        </div>   
    )
}
export default Banners