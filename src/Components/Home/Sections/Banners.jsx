import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_URL } from '../../../Redux/Constant/ApiRoute'
import { assets } from '../../../../src/Helpers'
import { setBanners } from '../../../Redux/Actions/BannerAction'
import { setLoading } from '../../../Redux/Actions/LoaderAction'
import Carousel from 'react-bootstrap/Carousel';
import BannerForm from './BannerForm'
import axios from 'axios'

const Banners = () => {
    const dispatch = useDispatch();
    const bannerList = useSelector((state) => state.HomePageBanners)
    const getBanners = () => {
        dispatch(setLoading(true))
        axios.get(API_URL.BANNERS).then((response) => {
            dispatch(setLoading(false))
            dispatch(setBanners(response.data))
        });
    }
    useMemo(() => getBanners(), []);
    return (
        <>
            <div className="banner-conceptual">
                <div id="home-banner-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                    {
                        bannerList.length === 0 ? null :
                        <ul className="carousel-indicators">
                            {
<<<<<<< Updated upstream
                                bannerList.banners.data.map((banner, index) => (
                                    <li key={index} data-target="#home-banner-carousel" data-slide-to={index} className={index == 0 ? "active" : null}></li>
                                ))
                            }
                        </ul>
                    }
                    <div className="carousel-inner" style={{ "background": "linear-gradient(#503390,#7e2e91)" }}>
                        {
                            bannerList.length === 0
                                ?
                                <div className="carousel-item active"></div>
                                :
                                <>
                                    {
                                        bannerList.banners.data.map((banner, index) => (
                                            <div key={index} className={index === 0 ? "carousel-item active" : "carousel-item"} style={{ "background": `url(${assets(window.innerWidth > 600 ? banner.DesktopImage : banner.MobileImage)})` }}>
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                                            <div className="carousel-caption">
                                                                <h1>{banner?.Title ?? ""}</h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
=======
                                bannerList.banners.data.map(( banner, index ) =>  ( 
                                    <div key={index} className={index === 0 ? "carousel-item active" : "carousel-item"} style={{ "background": `url()` }}> 
                                            <div className="row">
                                                <div className="col-sm-12 col-md-12 col-lg-12 p-0">	
                                                
                                                <img className="w-100" src={`${assets(window.innerWidth > 980 ? banner.DesktopImage : banner.MobileImage)}`} /> 
                                                
                                        
>>>>>>> Stashed changes
                                            </div>
                                        ))
                                    }
                                </>
                        }
                    </div>
                </div>
                {/* ========= Banner Form ========= */}
                <BannerForm />
                {/* ========= End : Banner Form ========= */}
            </div>
        </>
    )
}
export default Banners