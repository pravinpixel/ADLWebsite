import React from 'react';
import { Link } from 'react-router-dom';
import bannerimage from "../../assets/images/inner-banner-2.jpg";

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
    </div>
  )
}
