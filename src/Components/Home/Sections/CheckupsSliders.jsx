import axios from 'axios'
import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import Sliders from 'react-slick' 
import { setOrgans, setTestFilters } from '../../../Redux/Actions/TestAction'
import { API_URL } from '../../../Redux/Constant/ApiRoute'

export default function CheckupsSliders() {
    const  Navigate = useNavigate()
    const  dispatch = useDispatch()
    const  filters = useSelector((state) => state.filters.filters)
    const  Organs = useSelector((state) => state.organs.data) 
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
    const FetchOrgans = () =>{
        axios.get(API_URL.ORGAN_LIST).then((response) => { 
            dispatch(setOrgans(response.data))
        })
    }
    const FilterHandler = (value) => {
        dispatch(setTestFilters({...filters,OrganName:value})) 
        Navigate('for-patient')
    }
    useEffect(() => {
        FetchOrgans()
    },[]); 
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
                                Organs !== undefined ?
                                    Organs.map((item,i) => (
                                        <div key={i} className="parts-seq" onClick={() => FilterHandler(item.name)}>
                                            <img src={item.image} width="70px" className="img-fluid mb-2" />
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
