import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import bannerimage from "../../assets/images/inner-banner-2.jpg";
import prdt_img from "../../assets/images/popular-img-1.jpg";

export default function Packages() {
  useEffect(() => {
    document.title = "Our Packages";
    window.scroll(0,0)
  }, []);
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
                  <li> Family Packages </li>
                </ul>
                <h1>
                Health packages for<br></br> you and your family
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section> 

    <section className="filtering-lsts">
        <div className="container">
            
          <div class="row">
          <div className="col-lg-12">
          <div class="common-heading"><h2> <span>MAKING </span> <span class="yelow">gOOD hEALTH </span> a Priority!</h2></div>
          </div>
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
