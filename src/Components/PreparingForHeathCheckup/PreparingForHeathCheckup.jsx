import React from 'react';
import { Link } from 'react-router-dom';
import bannerimage from "../../assets/images/inner-banner-2.jpg"; 
import commi1 from "../../assets/images/comite-1.jpg"; 
import commi2 from "../../assets/images/comite-2.jpg"; 
import commi3 from "../../assets/images/comite-3.jpg"; 
import commi4 from "../../assets/images/comite-4.jpg"; 
import commi5 from "../../assets/images/comite-5.jpg"; 


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
