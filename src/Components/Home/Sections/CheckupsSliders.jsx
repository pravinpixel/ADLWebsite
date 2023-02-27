import axios from 'axios'
import { useMemo } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import Sliders from 'react-slick'
import {useOrgans} from '../../../Hooks'

export default function CheckupsSliders() {
    const Navigate = useNavigate()
    const Organs = useOrgans()
    const settings = {
        slidesToScroll: 1,
        infinite: true,
        slidesToShow: 7,
        autoplay: true,
        dots: false,
        autoplaySpeed: 1600,
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
    if (!Organs.isLoading) return (
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
                                Organs.data.map((item, i) => (
                                    <div key={i} className="parts-seq" onClick={() => Navigate(`/for-patient?OrganName=${item.name}`)}>
                                        <LazyLoadImage src={item.image} width="70px" className="img-fluid mb-2"/>
                                        <span><b>{item.name}</b></span>
                                    </div>
                                ))
                            }
                        </Sliders>
                    </div>
                </div>
            </div>
        </section>
    )
}
