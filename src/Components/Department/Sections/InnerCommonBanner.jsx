import React from 'react';
import { Link } from "react-router-dom";
import bannerimage from "../../../assets/images/inner-banner-2.jpg"

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
                      <li> Patients </li>
                      <li> / </li>
                      <li> Drive Through Blood Collection </li>
                    </ul>
                    <h1>
                    A compilation of valuable information not only <br/>helps in increasing the knowledge base of our customers   
                    </h1>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}
