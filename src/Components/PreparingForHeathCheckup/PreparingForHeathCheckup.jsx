import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bannerimage from "../../assets/images/inner-banner-2.jpg";  
import lab from "../../assets/images/lab.jpg"; 
import nurse from "../../assets/images/doc-nur.png"; 

export default function PreparingForHeathCheckup() {
  useEffect(() => {
    document.title = "Preparing For Heath Checkup";
    window.scroll(0,0)
  }, []);
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
                      <li> Preparing for Health Checkup </li>
                    </ul>
                    <h1>
                    Prepare yourself for <br></br>a correct lab result
                    </h1>
                </div>
            </div>
        </div>
        </div>
</section>  

<section className='prepareing-checkup'>
<div className="container">
<div className="row align-items-center">

<div className="col-lg-7">
<div className="rnge-prds text-left">
<div class="common-heading"> 
</div>
<div className="common-title drk animated fadeInUp mb-3">
<h4>Test Preparation</h4>
</div>
<div className="common-para1 drk detilos-expl indication-details p-0">
<p className="animated fadeInUp">Prior to visiting our Lab, you may want to ask your physician the following questions:</p>
<ul>
<li>What test is being performed?</li>
<li>Why does the test need to be done?</li>
<li>What type of specimen is needed for testing (blood, saliva, urine, semen, stool, hair)? When can I expect to hear about my test results?</li>
<li>How will the test results affect the course of my care?</li>
</ul>
</div>
</div>
</div>

<div className="col-lg-5">
<div className="legacy-mage text-center">
<img src={lab} alt="call" className="img-fluid" /><br></br><br></br>
<div className='cmn-buton'>
<p>
<a href="">Reach Us</a> 
</p>
</div>
</div>
</div>


</div>  
</div>  
</section>

<section className='testing-sector text-white'>
<div className="container">
<div className="row align-items-center">

<div className="col-lg-5">

</div>

<div className="col-lg-7">
<div className="rnge-prds text-left"> 
<div className="common-title drk animated fadeInUp mb-3">
<h4> What To Expect During Your Lab Visit</h4>
</div>
<div className="common-para1 drk detilos-expl indication-details p-0">
  <b>Our staff will make the specimen collection process as safe, quick, and comfortable as possible while safeguarding your dignity and privacy.</b><br></br><br></br>
<p className="animated fadeInUp">Labs are generally the busiest from opening until 10:00 AM. Unless you are required to fast, it’s best to schedule an appointment during off-peak hours.</p>
<h5>When visiting a lab, you should bring:</h5>
<ul>
<li>The test request form from a health care professional requesting the laboratory testing</li>
<li>A photo ID (for example, Aadhar Card, Voter ID Card, driver’s license or Passport)</li>
</ul> <br></br> 
<p>Children must be supervised at all times while at our labs. Please plan ahead.</p> 
<i><b>Note</b>: You may not bring children inside the collection area during a drug screen procedure.</i> <br></br>  <br></br> 
<div className='cmn-buton'>
<p>
<a href="">Reach Us</a> 
</p>
</div>
</div>
</div>
</div>

</div> 
</div>  
</section>

<section className='prepareing-checkup'>
<div className="container">
<div className="row align-items-center">


<div className="col-lg-5">
<div className="legacy-mage text-center">
<img src={nurse} alt="call" className="img-fluid" /><br></br><br></br>
<div className='cmn-buton'>
<p>
<a href="">Reach Us</a> 
</p>
</div>
</div>
</div>

<div className="col-lg-7">
<div className="rnge-prds pl-3 text-left"> 
<div className="common-title drk animated fadeInUp mb-3">
<h4>Patients Test Information</h4>
</div>
<div className="common-para1 drk detilos-expl indication-details p-0">
<p className="animated fadeInUp">Sometimes special preparation is required to improve the accuracy of a test. This may involve:</p>
<ul>
<li>Fasting (not eating any or certain foods) for several hours or even overnight</li>
<li>Drinking more or less water than usual</li>
<li>Avoiding certain medications or vitamin and herbal supplements prior to testing. It is important to talk to your doctor about the medications you are currently taking (including supplements and other over-the-counter medications) before making changes prior to having laboratory tests performed.</li>
</ul>
<p className="animated fadeInUp">Sometimes special preparation is required to improve the accuracy of a test. This may involve:If you are delivering a specimen to the lab, there might be special instructions for transporting the specimen. Your physician should provide you with written instructions for preparing for your test. Follow those instructions exactly as they are written. If you are not certain if special preparation is required, or if you have questions about the instructions you were given, contact your physician’s office.</p>
<p className="animated fadeInUp">If you did not follow the test preparation instructions you received from your physician, let the staff at the specimen collection lab know about this before your specimen is collected.</p>
</div>
</div>
</div>

</div>  
</div>  
</section>

</div>

)
}
