import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bannerimage from "../../assets/images/inner-banner-2.jpg"; 
import hospital1 from "../../assets/images/hos-1.png"; 
import hospital2 from "../../assets/images/hos-2.png"; 
import hospital3 from "../../assets/images/hos-3.png"; 
import hospital4 from "../../assets/images/hos-4.png"; 

export default function ClinicalLabManagement() {
  useEffect(() => {
    document.title = "Clinical Lab Management";
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
                      <li> Doctors </li>
                      <li> / </li> 
                      <li> Clinical Lab Management </li>
                    </ul>
                    <h1>
                    Intelligence in pattern recognition<br></br> for autoimmune diagnosis.
                    </h1>
                </div>
            </div>
        </div>
        </div>
    </section>

    <section className='abt-secton forumn-frm pb-0'>
      <div className="container">
        <div className="row"> 
          <div className="col-lg-8">
          <div className="common-heading"><h2> <span className="inlne">Clinicians  &amp;</span> Physicians</h2>
          <p className='pr-5'>Our qualified and ardent team of doctors and technologists provide strong support to the medical fraternity with the decisive motive being patient care. With our extensive test menu, state-of-of-the-art technology, and fast turn around time, Clinicians and Physicians can expect nothing less than the best in class diagnostic tools to aide in delivering patient care. Our team of experienced and decorated doctors are always eager to discuss the clinical implications of a diagnostic result with clinicians to assist in identifying the right course of treatment.</p>
          </div>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="green-bg ps-rel animated fadeInRight">
              <h4 className="mb-3 text-center text-white">Contact us</h4>   
								<form name="contactform" method="post" action="#" id="contactform" > 
                                <div className="formdata"><input type="text" placeholder="Doctor Name" name="name" id="name" className="form-control jsrequired " /></div>
                                <div className="formdata"><input type="text" placeholder="Specialization" name="name" id="name" className="form-control jsrequired " /></div>
                                <div className="formdata"><input type="text" placeholder="Associated Hospitals/Clinics" name="name" id="name" className="form-control jsrequired " /></div>
                                <div className="formdata"><input type="tel" placeholder="Enter Your Mobile Number" name="mobile" id="mobile" className="form-control jsrequired " /></div>
                                <div className="formdata"> <input type="email" placeholder="Enter Your Email ID" name="email" id="email"  className="form-control jsrequired " /></div>
                                <div className="formdata"><textarea className="form-control" placeholder="Message" name="msg" id="msg"></textarea></div>
                                <div className="formdata"> <input type="button" name="submit" value="Submit" onClick="submit_contact();" /></div>
                            </form>
                            </div>
                        </div>

        </div>
      </div>
    </section>

    <section className='our-presence'>
      <div className="container">
        <div className="row">
            <div className="col-lg-12">
              
              <div class="common-title drk animated fadeInUp mb-3"><h4>Our Presence</h4></div>
               
              <div className="row col-lg-8 mb-5">
              <div className="lst-lction">
              <h5 className='text-yellow'>Bangalore</h5>
              <ul>
              <h6 className='map-ngin'>North</h6>
              <li> <i class="fa fa-map-marker" aria-hidden="true"></i> <Link to='/'>HBR Layout</Link></li> 
              <li> <i class="fa fa-map-marker" aria-hidden="true"></i> <Link to='/'>Peenya</Link></li> 
              <li> <i class="fa fa-map-marker" aria-hidden="true"></i> <Link to='/'>R. T. Nagar</Link></li> 
              <li> <i class="fa fa-map-marker" aria-hidden="true"></i> <Link to='/'>Sanjayanagar</Link></li> 
              <li> <i class="fa fa-map-marker" aria-hidden="true"></i> <Link to='/'>Yelahanka</Link></li>  
              </ul>
              <ul>
              <h6 className='map-ngin'>East</h6>
              <li> <i class="fa fa-map-marker" aria-hidden="true"></i> <Link to='/'>BTM Layout</Link></li>  
              <li> <i class="fa fa-map-marker" aria-hidden="true"></i> <Link to='/'>HSR Layout</Link></li>  
              <li> <i class="fa fa-map-marker" aria-hidden="true"></i> <Link to='/'>Hoodi</Link></li>  
              <li> <i class="fa fa-map-marker" aria-hidden="true"></i> <Link to='/'>Kasturi Nagar</Link></li>  
              <li> <i class="fa fa-map-marker" aria-hidden="true"></i> <Link to='/'>Koramangala</Link></li>  
              </ul>
              <ul>
              <h6 className='map-ngin'>West</h6>
              <li> <i class="fa fa-map-marker" aria-hidden="true"></i> <Link to='/'>Kengeri</Link></li> 
              <li> <i class="fa fa-map-marker" aria-hidden="true"></i> <Link to='/'>Nagarbhavi</Link></li> 
              <li> <i class="fa fa-map-marker" aria-hidden="true"></i> <Link to='/'>Rajajinagar</Link></li> 
              <li> <i class="fa fa-map-marker" aria-hidden="true"></i> <Link to='/'>RR Nagar</Link></li> 
              <li> <i class="fa fa-map-marker" aria-hidden="true"></i> <Link to='/'>Vijayanagar</Link></li>  
              </ul>
              <ul>
              <h6 className='map-ngin'>South</h6>
              <li> <i class="fa fa-map-marker" aria-hidden="true"></i> <Link to='/'>Banashankari</Link></li> 
              <li> <i class="fa fa-map-marker" aria-hidden="true"></i> <Link to='/'>Bannergatta Road</Link></li> 
              <li> <i class="fa fa-map-marker" aria-hidden="true"></i> <Link to='/'>Jayanagar</Link></li> 
              <li> <i class="fa fa-map-marker" aria-hidden="true"></i> <Link to='/'>J. P. Nagar</Link></li>  
              </ul>
              <ul>
              <h6 className='map-ngin'>Central</h6>
              <li> <i class="fa fa-map-marker" aria-hidden="true"></i> <Link to='/'>Shivaji Nagar</Link></li>
              <li> <i class="fa fa-map-marker" aria-hidden="true"></i> <Link to='/'>Hanumanth Nagar</Link></li>
              <li> <i class="fa fa-map-marker" aria-hidden="true"></i> <Link to='/'>Indiranagar</Link></li>
              <li> <i class="fa fa-map-marker" aria-hidden="true"></i> <Link to='/'>Vyalikaval</Link></li>  
              </ul>
              </div>
              </div>  
              <div className="row col-lg-8">
              <div className="lst-lction fl-wdth text-left">
              <h5 className='text-yellow'>Rest in karnataka</h5>
              <ul> 
              <li> <i class="fa fa-map-marker" aria-hidden="true"></i> <Link to='/'>Hubli </Link></li> 
              <li> <i class="fa fa-map-marker" aria-hidden="true"></i> <Link to='/'>Kanakpura Road </Link></li> 
              <li> <i class="fa fa-map-marker" aria-hidden="true"></i> <Link to='/'>Mysuru </Link></li> 
              <li> <i class="fa fa-map-marker" aria-hidden="true"></i> <Link to='/'>Shivamogga </Link></li> 
              <li> <i class="fa fa-map-marker" aria-hidden="true"></i> <Link to='/'>Vidyaranyapura</Link></li>  
              </ul> 
              </div>
              </div>               
            </div>
        </div>
      </div>
    </section>
 
    

    </div>
  )
}
