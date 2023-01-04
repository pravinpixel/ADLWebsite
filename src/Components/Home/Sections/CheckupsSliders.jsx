import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Sliders from 'react-slick'
import icon1 from '../../../assets/images/icn-1.png'
import icon2 from '../../../assets/images/icn-2.png'
import icon3 from '../../../assets/images/icn-3.png'
import icon4 from '../../../assets/images/icn-4.png'
import icon5 from '../../../assets/images/icn-5.png'
import icon6 from '../../../assets/images/icn-6.png'
import icon7 from '../../../assets/images/icn-7.png'
import { API_URL } from '../../../Redux/Constant/ApiRoute'

export default function CheckupsSliders() {
    var settings = {
        slidesToScroll: 1,
        infinite: true,
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
    useEffect(() => {
        axios.get(API_URL.ORGAN_LIST).then((response) => {
            SetOrgans(response.data)
        })
    });
    const [Organs, SetOrgans] = useState([]);
    return (
        <section className="helth-chkup">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="common-heading">
                            <h2><span>Choose Your </span> Health Checkups / Screenings For </h2>
                        </div>
                        <br />
                        <Sliders className="body-parts text-center"  {...settings}>
                            {
                                Organs !== 0 ?
                                    Organs.map(item => (
                                        <div className="parts-seq">
                                            <img src={item.image} width="100px" className="img-fluid mb-2" />
                                            <span><b>{item.name}</b></span>
                                        </div>
                                    ))
                                : null
                            }
                        </Sliders>
                    </div>
                </div>
            </div>
        </section>
    )
}
