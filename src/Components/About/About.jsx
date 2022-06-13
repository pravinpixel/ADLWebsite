import React from 'react';
import { Link } from 'react-router-dom';
import bannerimage from "../../assets/images/inner-banner-2.jpg";
import testuimonialimg from "../../assets/images/testim.jpg";
import dbcde from "../../assets/images/db-cde.png";

export default function About() {
  return (
    <div>
            <section className='inner-banner'>
        <img src={bannerimage} alt="call" className="img-fluid" />
        <div className="inner-caption">
        <div className="container">
            <div className="row">
                <div className="caption-details bnr-txt">
                    <ul>
                      <li><Link to='/'></Link> Home </li>
                      <li> / </li> 
                      <li><Link to='/'></Link> About Us </li>
                    </ul>
                    <h1>
                    Delivering Reliable, Fast and Affordable <br></br>Diagnostic services since 1974   
                    </h1>
                </div>
            </div>
        </div>
        </div>
    </section>

    <section className='abt-secton'>
      <div className="container">
        <div className="row">

          <div className="col-lg-7">
              <div className="legacy-care">
              <div class="common-heading"><h2> <span>Our Legacy </span>
              ENSURING <span className='yelow'>“CARE”</span> IN HEALTHCARE</h2></div>
              <p>May 8, 1974 – the day Anand Diagnostic Laboratory made a humble beginning on Infantry Road, Shivajinagar Bangalore. This was the day Dr. A V Ramaprasad moved from the role of teacher to lead what has grown into a pioneer in technology driven diagnostics in the region. Core principles of honesty and integrity through transparency that were ingrained and percolated down the ladder of the organisation from the time of its inception found roots and are visible 43 years hence. The visionary in Dr. Ramaprasad drove him relentlessly to advocate few basic rules for all to follow a) “The patient comes first. </p>
              <div className="spcl-cnt">
              <img src={dbcde} alt="call" className="img-fluid" />
              The user of our services is the very reason of our existence. Total quality management is the window through which we achieve user satisfaction.
              </div>
              </div>
          </div>

          <div className="col-lg-5">
              <div className="legacy-mage">
              <img src={testuimonialimg} alt="call" className="img-fluid" />
              </div>
          </div>

        </div>
      </div>
    </section>

    </div>
  )
}
