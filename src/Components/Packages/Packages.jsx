import React from "react";
import { Link } from "react-router-dom";
import bannerimage from "../../assets/images/inner-banner-2.jpg";
import prdt_img from "../../assets/images/popular-img-1.jpg";

export default function Packages() {
  return (
    <div>
      <section className="inner-banner">
        <img src={bannerimage} alt="call" className="img-fluid" />
        <div className="inner-caption">
          <div className="container">
            <div className="row">
              <div className="caption-details bnr-txt">
                <ul>
                  <li>
                    <Link to="/"> Home </Link>
                  </li>
                  <li> / </li>
                  <li> Patients </li>
                  <li> / </li>
                  <li> Health Packages </li>
                </ul>
                <h1>
                  Can be started over night, But It <br></br>takes years to
                  build an Institution.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="packages-listvariants">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-4">
            <div class="common-heading"><h2> <span>MAKING </span> GOOD HEALTH YOUR <span class="yelow">NEU WAY </span> OF LIFE</h2></div>
              <div className="special-instruction">
                <p>
                When your health and lifestyle start moving on top of your priority list, Neuberg Diagnostics emerges as one of the most trusted names in the fields of pathology, advanced diagnostic services, global quality standards and state-of-the-art facilities.</p> 
                
                <p>With over 250 years of combined expertise, Neuberg Diagnostics is one of India’s top diagnostic chains and fastest-growing start-ups.</p> 
                
                <p>Neuberg Diagnostics brings a generation of advanced yet affordable healthcare packages designed to suit your needs in the new normal, followed by comprehensive and customised AI-based SMART reports to empower your access to quality treatment.
                </p> 
              </div>
            </div>
          </div>
        </div>
      </section>

    <section className="filtering-lsts">
        <div className="container">
            
          <div class="row">
            <div className="col-lg-12">
                <div className="totl-pkglst"> 
<div className="row"> 
  <div class="col-3"> 
  <div className="Products-factory-lsts">
    <ul>
    <h4>Filter</h4> 
    <li><Link to="/"> All </Link></li>
    <li className="active"><Link to="/"> Neu<span className="difclr">Test</span> </Link></li>
    <li><Link to="/"> Neu<span className="difclr">Senior</span> </Link></li>
    <li><Link to="/"> Neu<span className="difclr">Cardio</span> </Link></li>
    <li><Link to="/"> Neu<span className="difclr">Diabetes </span></Link></li>
    <li><Link to="/"> Neu<span className="difclr">Women</span> </Link></li>
    <li><Link to="/"> Neu<span className="difclr">Fitness</span> </Link></li>
    <li><Link to="/"> Neu<span className="difclr">Pre-Marital Check</span> </Link></li>
    <li><Link to="/"> Covid-19 & Fever <span className="difclr">Care</span> </Link></li>
    </ul>
  </div>
  </div>
  <div class="col-9"> 
  <div className="Products-factory-functions">
<div className="row">
    <div className="col-lg-4">
    <div class="pack-deils">
        <div class="pck-img">
        <img src={prdt_img} alt="call" className="img-fluid" /> 
        <div class="ble-fnt">60 <span>Tests</span></div>
        </div>
        <h3>NEU Express</h3>
        <h4>Cholesterol, Triglycerides, HDL, Direct LDL, Calculated Total cholesterol to HDL-cholesterol Ratio...<a href="/">+ More</a></h4>
        <h5>₹180 <span class="strke"><s>₹280</s></span></h5>
        <h6>79 % off T&amp;C*</h6>
        <p><a href="about-us">Book Now</a></p>
    </div>
    </div>

    <div className="col-lg-4">
    <div class="pack-deils">
        <div class="pck-img">
        <img src={prdt_img} alt="call" className="img-fluid" /> 
        <div class="ble-fnt">60 <span>Tests</span></div>
        </div>
        <h3>NEU Express</h3>
        <h4>Cholesterol, Triglycerides, HDL, Direct LDL, Calculated Total cholesterol to HDL-cholesterol Ratio...<a href="/">+ More</a></h4>
        <h5>₹180 <span class="strke"><s>₹280</s></span></h5>
        <h6>79 % off T&amp;C*</h6>
        <p><a href="about-us">Book Now</a></p>
    </div>
    </div>

    <div className="col-lg-4">
    <div class="pack-deils">
        <div class="pck-img">
        <img src={prdt_img} alt="call" className="img-fluid" /> 
        <div class="ble-fnt">60 <span>Tests</span></div>
        </div>
        <h3>NEU Express</h3>
        <h4>Cholesterol, Triglycerides, HDL, Direct LDL, Calculated Total cholesterol to HDL-cholesterol Ratio...<a href="/">+ More</a></h4>
        <h5>₹180 <span class="strke"><s>₹280</s></span></h5>
        <h6>79 % off T&amp;C*</h6>
        <p><a href="about-us">Book Now</a></p>
    </div>
    </div>

    </div>

  </div>
  </div>
  </div>
  </div>
  </div>
</div>
        </div>
    </section>

    </div>
  );
}
