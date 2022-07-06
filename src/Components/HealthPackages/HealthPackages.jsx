import React from 'react';
import { Link } from 'react-router-dom';
import bannerimage from "../../assets/images/inner-banner-2.jpg"; 
import manualtheraphyicon1 from "../../assets/images/manual-theraphy-icon-1.png"
import manualtheraphyicon2 from "../../assets/images/manual-theraphy-icon-2.png"
import manualtheraphyicon3 from "../../assets/images/manual-theraphy-icon-3.png"
import manualtheraphyicon4 from "../../assets/images/manual-theraphy-icon-4.png"
import manualtheraphy from "../../assets/images/manual-theraphy.jpg" 


export default function HealthPackages() {
  
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
                      <li> Patients </li>
                      <li> / </li> 
                      <li> Health Packages </li>
                    </ul>
                    <h1>
                    Can be started over night, But It  <br></br>takes years to build an Institution.
                    </h1>
                </div>
            </div>
        </div>
        </div>
</section>  

<section className="about-services">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
            <div className="special-instruction">
               
                <p>When your health and lifestyle start moving on top of your priority list, Neuberg Anand Diagnostics emerges as one of the most trusted names in the fields of pathology, advanced diagnostic services, global quality standards and state-of-the-art facilities. With over 48 years of experience, Neuberg Anand Diagnostics is one of leading diagnostic chains. Neuberg Anand Diagnostics brings a generation of advanced yet a ordable healthcare packages designed to suit your needs, with comprehensive and customised AI-based SMART reports to empower your access to quality treatment. ANYTIME. ANYWHERE.</p>

                <p>Been having troubles choosing the right healthcare package for you and your loved ones? Well, now you won’t. Neuberg Anand Diagnostics brings to you customised health packages, specifically designed to suit your health and lifestyle needs.
</p><br></br>
<h3>The Health Check Package most Suited for you & Your Loved Ones</h3>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                   Anand Basic Health Package
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                    Anand Pro Health Checkup
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile1" role="tab" aria-controls="profile" aria-selected="false">
                    Anand General Health Package 
                    </a>
                  </li> 
                  <li className="nav-item" role="presentation">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile2" role="tab" aria-controls="profile" aria-selected="false">
                   Anand Advanced Health Package 
                    </a>
                  </li>  
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className="detilos-expl">
                     <p>Too many things on your mind? Take a deep breath and choose the smartest Basic package, that covers tests on major organs of your body, so that you are prepared for prevention of future diseases way before time.</p>
                  </div>
                  </div>
                  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="detilos-expl">
                     <p>If you think you don’t have the time or the mind space to keep a track on your body’s vital functions, allow us to keep an eye on your organs, and check for your immunity every once in a while.</p>
                  </div>   
                  </div>
                  <div className="tab-pane fade" id="profile1" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="detilos-expl">
                     <p>You have been waiting to entrust your health in the hands of the experts. That’s why we are here for you and we are about to make you stronger!</p>
                  </div>   
                  </div>
                  <div className="tab-pane fade" id="profile2" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="detilos-expl">
                     <p>Before you change your dietary patterns or go in for supplements without consultation with your Doctor, walk in for a Advanced package that checks on your vital organs and vitamin levels.</p>
                  </div>   
                  </div> 
                </div>
              </div>

                </div> 
            </div> 
        </div>
    </section>  

</div>

)
}
