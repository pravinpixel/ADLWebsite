import React from 'react';
import { Link } from "react-router-dom";
import bannerimage from "../../../assets/images/inner-banner-1.jpg"

export default function 
() {
  return (
    <section className='inner-banner'>
        <img src={bannerimage} alt="call" className="img-fluid" />
        <div className="inner-caption">
        <div className="container">
            <div className="row">
                <div className="caption-details bnr-txt">
                    <ul>
                      <li><Link to='/'> Home </Link></li>
                      <li> / </li>
                      <li><Link to='/'></Link> Services </li>
                      <li> / </li>
                      <li><Link to='/'></Link> Manual Therapy </li>
                    </ul>
                    <h1>
                      Manual Therapy   
                    </h1>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}
