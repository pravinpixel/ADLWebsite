import React from 'react'
import Sliders from 'react-slick'
import icon1 from '../../../assets/images/icn-1.png'
import icon2 from '../../../assets/images/icn-2.png'
import icon3 from '../../../assets/images/icn-3.png'
import icon4 from '../../../assets/images/icn-4.png'
import icon5 from '../../../assets/images/icn-5.png'
import icon6 from '../../../assets/images/icn-6.png'
import icon7 from '../../../assets/images/icn-7.png' 

export default function CheckupsSliders() {
    var settings = {
        slidesToScroll: 1,
        infinite:true,
        slidesToShow: 7,
        focusOnSelect: true, 
        autoplay: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 4,
                         
                    }
                },
                {
                breakpoint: 680,
                settings: {
                    slidesToShow: 3,
                     
                }
            },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                         
                    }
                },
        ]
    };
  return (
    <section className="helth-chkup">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="common-heading">
                        <h2><span>Choose Your </span> Health Checkups / Screenings For </h2>
                    </div>
                    <br/>
                    <Sliders className="body-parts text-center"  {...settings}>
                        <div className="parts-seq">
                            <img src={icon1} alt="" className="img-fluid"/>
                            <span>Brain</span>
                        </div>
                        <div className="parts-seq">
                            <img src={icon2} alt="" className="img-fluid"/>
                            <span>Liver</span>
                        </div>
                        <div className="parts-seq">
                            <img src={icon3} alt="" className="img-fluid"/>
                            <span>Stomach</span>
                        </div>
                        <div className="parts-seq">
                            <img src={icon4} alt="" className="img-fluid"/>
                            <span>Lungs</span>
                        </div>
                        <div className="parts-seq">
                            <img src={icon5} alt="" className="img-fluid"/>
                            <span>Heart</span>
                        </div>
                        <div className="parts-seq">
                            <img src={icon6} alt="" className="img-fluid"/>
                            <span>Kidney</span>
                        </div>
                        <div className="parts-seq">
                            <img src={icon7} alt="" className="img-fluid"/>
                            <span>Thyroid</span>
                        </div>
                        <div className="parts-seq">
                            <img src={icon1} alt="" className="img-fluid"/>
                            <span>Brain</span>
                        </div>
                        <div className="parts-seq">
                            <img src={icon1} alt="" className="img-fluid"/>
                            <span>Liver</span>
                        </div>
                        <div className="parts-seq">
                            <img src={icon2} alt="" className="img-fluid"/>
                            <span>Stomach</span>
                        </div>
                        <div className="parts-seq">
                            <img src={icon3} alt="" className="img-fluid"/>
                            <span>Lungs</span>
                        </div>
                        <div className="parts-seq">
                            <img src={icon4} alt="" className="img-fluid"/>
                            <span>Heart</span>
                        </div>
                        <div className="parts-seq">
                            <img src={icon5} alt="" className="img-fluid"/>
                            <span>Kidney</span>
                        </div>
                        <div className="parts-seq">
                            <img src={icon6} alt="" className="img-fluid"/>
                            <span>Thyroid</span>
                        </div>
                    </Sliders>
                </div>
            </div>
        </div>
    </section>
  )
}
