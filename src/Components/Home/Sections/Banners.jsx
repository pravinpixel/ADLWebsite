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
            </div>
            <div className='banner-form'>
                <form name="form3" method="post" action="" id="form3">
                    <div className="frm-fields row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h4 className='cont-frmhed'>Book Home Collection</h4>
                            <div className="form-data">
                                <input className="input100" type="text" name="name" id="name" placeholder="Name"/> 
                            </div>
                            <div className="form-data">
                                <input className="input100" type="tel" name="phone"   id="phone" placeholder="Mobile"/> 
                            </div>
                            <div className="form-data">
                                <input className="input100" type="text" name="name" id="name" placeholder="Select Your Location"/> 
                            </div> 
                            <div className="form-data upload-btn-wrapper">
                                <button className="btn">Upload a file</button>
                                <input type="file" name="myfile" />
                            </div>
                            <div className="form-data">
                                <input className="input100" type="text" name="name" id="name" placeholder="Select Test Name"/> 
                                <select  defaultValue={0} className="input100 has-val form-select">
                                    <option disabled value="0">- Select Test -</option>
                                    <option value="0">Blood Test</option>
                                    <option value="0">Urine Test</option>
                                    <option value="0">Stool Test</option>
                                    <option value="0">Sputum Test</option>
                                    <option value="0">Pus Test</option>
                                </select>
                            </div>
                            <div className="form-data date-time">
                                <input className="input100" type="text" name="" id="dateTime" />
                                <span className="focus-input100" data-placeholder="Choose Date and Time"></span>	
                            </div>
                            <div className="form-data sbm">
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