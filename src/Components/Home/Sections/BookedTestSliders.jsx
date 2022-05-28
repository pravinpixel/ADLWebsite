import React from 'react'
import Sliders from 'react-slick'

export default function BookedTestSliders() {
    var settings = {
        slidesToScroll : 1,
        infinite       : true,
        slidesToShow   : 6,
        focusOnSelect  : true, 
        autoplay       : true,
        dots           : false,
        arrows         : true,
        autoplaySpeed  : 4000,
        responsive: [
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
                        <div className="case">
                            <h3>Cholesterol Total, Serum</h3>
                            <h4>This test is to measure Cholesterol in Blood Serum. </h4>
                            <h5>&#8377;180 <span className="strke"><s>&#8377;280</s></span></h5>
                            <p><a href="about-us">ADD</a></p>
                        </div>
                        <div className="case">
                            <h3>Complete Blood <br/> Count</h3>
                            <h4>This test is to measure total blood count.</h4>
                            <h5>&#8377;180 <span className="strke"><s>&#8377;280</s></span></h5>
                            <p><a href="about-us">ADD</a></p>
                        </div>
                        <div className="case">
                            <h3>Covid19 Antibody IgG Test</h3>
                            <h4>Basic screening test to check the presence ...</h4>
                            <h5>&#8377;180 <span className="strke"><s>&#8377;280</s></span></h5>
                            <p><a href="about-us">ADD</a></p>
                        </div>
                        <div className="case">
                            <h3>Lipid Profile <br/> Test</h3>
                            <h4>This test is used to measure the amount of cholesterol ...</h4>
                            <h5>&#8377;180 <span className="strke"><s>&#8377;280</s></span></h5>
                            <p><a href="about-us">ADD</a></p>
                        </div>
                        <div className="case">
                            <h3>Dengue NS1 <br/> Antigen</h3>
                            <h4>This test is used to detect dengue in early days ...</h4>
                            <h5>&#8377;180 <span className="strke"><s>&#8377;280</s></span></h5>
                            <p><a href="about-us">ADD</a></p>
                        </div>
                        <div className="case">
                            <h3>Fasting Glucose <br/> Test</h3>
                            <h4>This test is to measure Cholesterol in Blood Serum.</h4>
                            <h5>&#8377;180 <span className="strke"><s>&#8377;280</s></span></h5>
                            <p><a href="about-us">ADD</a></p>
                        </div>
                        <div className="case">
                            <h3>Cholesterol Total, Serum</h3>
                            <h4>This test is to measure Cholesterol in Blood Serum. </h4>
                            <h5>&#8377;180 <span className="strke"><s>&#8377;280</s></span></h5>
                            <p><a href="about-us">ADD</a></p>
                        </div>
                        <div className="case">
                            <h3>Complete Blood <br/> Count</h3>
                            <h4>This test is to measure total blood count.</h4>
                            <h5>&#8377;180 <span className="strke"><s>&#8377;280</s></span></h5>
                            <p><a href="about-us">ADD</a></p>
                        </div>
                        <div className="case">
                            <h3>Covid19 Antibody IgG Test</h3>
                            <h4>Basic screening test to check the presence ...</h4>
                            <h5>&#8377;180 <span className="strke"><s>&#8377;280</s></span></h5>
                            <p><a href="about-us">ADD</a></p>
                        </div>
                        <div className="case">
                            <h3>Lipid Profile <br/> Test</h3>
                            <h4>This test is used to measure the amount of cholesterol ...</h4>
                            <h5>&#8377;180 <span className="strke"><s>&#8377;280</s></span></h5>
                            <p><a href="about-us">ADD</a></p>
                        </div>
                        <div className="case">
                            <h3>Dengue NS1 <br/> Antigen</h3>
                            <h4>This test is used to detect dengue in early days ...</h4>
                            <h5>&#8377;180 <span className="strke"><s>&#8377;280</s></span></h5>
                            <p><a href="about-us">ADD</a></p>
                        </div>
                        <div className="case">
                            <h3>Fasting Glucose <br/> Test</h3>
                            <h4>This test is to measure Cholesterol in Blood Serum.</h4>
                            <h5>&#8377;180 <span className="strke"><s>&#8377;280</s></span></h5>
                            <p><a href="about-us">ADD</a></p>
                        </div>
                    </Sliders>
                </div>
            </div>
        </div>
    </section>
  )
}