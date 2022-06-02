import React from 'react'
import Sliders from 'react-slick'
import TestCard from '../../Containers/TestCardComponent';


export default function PopularTests() {
    var settings = {
        slidesToScroll : 1,
        infinite       : true,
        slidesToShow   : 4,
        focusOnSelect  : false, 
        autoplay       : true,
        dots           : false,
        arrows         : true,
        autoplaySpeed  : 4000,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            },
        ]
    };
    return (
        <section className="diagnostics text-left">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="common-heading">
                            <h2><span>Top Booked </span> Diagnostic Tests </h2>
                        </div>
                        <Sliders {...settings} className="topbooked-cases">
                            <TestCard />
                            <TestCard />
                            <TestCard />
                            <TestCard />
                            <TestCard />
                            <TestCard />
                            <TestCard />
                            <TestCard />
                            <TestCard />
                            <TestCard />
                            <TestCard />
                            <TestCard />
                            <TestCard />
                            <TestCard />
                            <TestCard />
                            <TestCard />
                        </Sliders>
                    </div>
                </div>
            </div>
        </section>
    )
}
