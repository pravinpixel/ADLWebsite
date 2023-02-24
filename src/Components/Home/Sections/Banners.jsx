import { assets } from '../../../../src/Helpers'
import BannerForm from './BannerForm'
import { useBanner } from '../../../Hooks'

const Banners = () => {
    const banners = useBanner()
    if (!banners.isLoading) return (
        <div className="banner-conceptual">
            <div id="home-banner-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                <ul className="carousel-indicators">
                    {
                        banners.data.data.map((banner, index) => (
                            <li key={index} data-target="#home-banner-carousel" data-slide-to={index} className={index == 0 ? "active" : null}></li>
                        ))
                    }
                </ul>
                <div className="carousel-inner" style={{ "background": "linear-gradient(#503390,#7e2e91)" }}>
                    {
                        banners.data.data.map((banner, index) => (
                            <div key={index} className={index === 0 ? "carousel-item active" : "carousel-item"}>
                                <div className="row">
                                    <a className="col-sm-12 col-md-12 col-lg-12 p-0" href={banner.Url} target="_blank">
                                        <img className="w-100" src={`${assets(window.innerWidth > 980 ? banner.DesktopImage : banner.MobileImage)}`} />
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* ========= Banner Form ========= */}
            <BannerForm />
            {/* ========= End : Banner Form ========= */}
        </div>
    )
}
export default Banners