import React from 'react';
import { Link } from 'react-router-dom';
import bannerimage from "../../assets/images/inner-banner-2.jpg"; 
import commi1 from "../../assets/images/comite-1.jpg"; 


export default function Commitment() {
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
                      <li><Link to='/'></Link> Commitment </li>
                    </ul>
                    <h1>
                    Haematology services extending<br></br> beyond the blood smear
                    </h1>
                </div>
            </div>
        </div>
        </div>
</section> 

<section className="section range-of-products section-top-btm">
<div className="container">
   <div className="row flex-column-reverse flex-md-row">
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
         <div className="rnge-prds text-left">
            <div className="common-title drk animated fadeInUp mb-3">
               <h4>“Care” for our Patrons</h4>
            </div>
            <div className="common-para1 drk">
               <p className="animated fadeInUp">We believe that our foremost duty is to serve the people that entrust us with their health needs. We care about offering a safe, secure, complete and confident service experience to our patrons. We care about taking every measure to earn our patrons’ trust, and leave no stone unturned to ensure that this trust is not lost. We care about providing reliable results at an affordable cost and maintain transparency throughout the service experience.</p>
            </div>
         </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
         <div className="prdts-img animated fadeInRight">
         <img src={commi1} alt="call" className="img-fluid" />
         </div>
      </div>            
   </div>
   <div class="row">
      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 animated fadeInUp"><hr/></div>
   </div>
</div>
</section> 

<section className="section range-of-products section-top-btm">
<div className="container">
   <div className="row flex-column-reverse flex-md-row">
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
         <div className="prdts-img animated fadeInRight">
         <img src={commi1} alt="call" className="img-fluid" />
         </div>
      </div>   
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
         <div className="rnge-prds text-left">
            <div className="common-title drk animated fadeInUp mb-3">
               <h4>“Care” for our Patrons</h4>
            </div>
            <div className="common-para1 drk">
               <p className="animated fadeInUp">We believe that our foremost duty is to serve the people that entrust us with their health needs. We care about offering a safe, secure, complete and confident service experience to our patrons. We care about taking every measure to earn our patrons’ trust, and leave no stone unturned to ensure that this trust is not lost. We care about providing reliable results at an affordable cost and maintain transparency throughout the service experience.</p>
            </div>
         </div>
      </div>         
   </div>
   <div class="row">
      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 animated fadeInUp"><hr/></div>
   </div>
</div>
</section>

</div>

)
}
