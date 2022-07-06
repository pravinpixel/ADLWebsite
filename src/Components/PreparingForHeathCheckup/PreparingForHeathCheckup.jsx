import React from 'react';
import { Link } from 'react-router-dom';
import bannerimage from "../../assets/images/inner-banner-2.jpg";  

export default function PreparingForHeathCheckup() {
  
  return ( 

<div>
<section className='inner-banner'>
    <img src={bannerimage} alt="call" className="img-fluid" />
        <div className="inner-caption">
        <div className="container">
            <div className="row">
                <div className="caption-details bnr-txt">
                    <ul>
                      <li><Link to='/'> Home </Link></li>
                      <li> / </li> 
                      <li><Link to='/'></Link> Preparing for Heath Checkup </li>
                    </ul>
                    <h1>
                    Haematology services extending<br></br> beyond the blood smear
                    </h1>
                </div>
            </div>
        </div>
        </div>
</section>  



</div>

)
}
