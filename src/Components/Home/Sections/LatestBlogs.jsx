import React from 'react'
import blogBg from '../../../assets/images/blog-bg.jpg'
import Sliders from 'react-slick'

export default function LatestBlogs() {
  var settings = {
    slidesToScroll: 1,
    infinite:true,
    slidesToShow: 2,
    focusOnSelect: true, 
    autoplay: true,
    dots: true,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
          {
              breakpoint: 1030,
              settings: {
                  slidesToShow: 1,
              }
          },
          {
              breakpoint: 900,
              settings: {
                  slidesToShow: 1,
                  centerMode: true,
              }
          },
          {
            breakpoint: 680,
            settings: {
                slidesToShow: 1,
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
    <section className="media-structure">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="common-heading">
              <h2><span>Latest</span> Happenings</h2>
            </div>
            <Sliders {...settings} className="lat-hapns">
              <div className="haapns">
                <h3>09 August 2020</h3>
                <h4>Genetics For The Obstetricians </h4>
                <p>Those who know ultrasound, unlock with keys; those who know biochemistry, decipher clues and those who master genetics for obstetricians, solve puzzles in a jiffy!z</p>
              </div>
              <div className="haapns">
                <h3>09 August 2020</h3>
                <h4>Early Detection, Diagnosis and Management of Blood Cancer/Disorders </h4>
                <p>Dr. Joseph John MBBS, MD, DM, Head of Clinical Haematology unit at CMC, Ludhiana</p>
              </div>
              <div className="haapns">
                <h3>09 August 2020</h3>
                <h4>Genetics For The Obstetricians </h4>
                <p>Those who know ultrasound, unlock with keys; those who know biochemistry, decipher clues and those who master genetics for obstetricians, solve puzzles in a jiffy!z</p>
              </div>
              <div className="haapns">
                <h3>09 August 2020</h3>
                <h4>Early Detection, Diagnosis and Management of Blood Cancer/Disorders </h4>
                <p>Dr. Joseph John MBBS, MD, DM, Head of Clinical Haematology unit at CMC, Ludhiana</p>
              </div>
            </Sliders>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="common-heading">
              <h2><span>Blog</span> Knowledge HUB</h2>
            </div>
            <div className="knoledge-hub">
              <img src={blogBg} alt="" className="img-fluid"/>
              <div className="know-hub">
                <h4>What is Antibody Testing?</h4>
                <p>The antibody or serology test is done to ascertain a previous viral infection and the body’s immune response towards it.</p>
                <p><a href="">Read More</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
