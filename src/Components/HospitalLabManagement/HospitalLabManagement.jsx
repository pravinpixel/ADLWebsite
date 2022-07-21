import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bannerimage from "../../assets/images/inner-banner-2.jpg"; 
import hospital1 from "../../assets/images/hos-1.png"; 
import hospital2 from "../../assets/images/hos-2.png"; 
import hospital3 from "../../assets/images/hos-3.png"; 
import hospital4 from "../../assets/images/hos-4.png"; 

export default function HospitalLabManagement() {
  useEffect(() => {
    document.title = "Hospital or Lab Management";
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
                      <li> Hospital or Lab Management </li>
                    </ul>
                    <h1>
                    Intelligence in pattern recognition<br></br> for autoimmune diagnosis.
                    </h1>
                </div>
            </div>
        </div>
        </div>
    </section>

    <section className='abt-secton forumn-frm'>
      <div className="container">
        <div className="row">
          <div className='col-lg-12 mb-5'>
          <div class="common-heading"><h2> <span class="inlne">Hospitals &amp;</span> Referring Laboratories </h2>
          <p>At ADL, we endeavour to provide referral laboratory services to hospitals and laboratories across the region. With a robust logistics network and a seamless IT support, we have managed to maintain quick turn-around-times for all samples received through our hospital and laboratory partners.</p>
          </div>
          </div>
          <div className="col-lg-8">
              <div className="the-chamber mb-5">
              <img src={hospital1} alt="call" className="img-fluid" />
              <div class="common-title drk animated fadeInUp"><h4>Types of MOUs</h4></div>
              <span class="difentate mb-2">Pathology Services in Bangalore</span>
              <p>We have two types of MOUs (Memorandum of Understanding) or contracts based on the payment process- Prepaid and Postpaid. To know more about the details of the MOUs, please fill in the form and one of our executives will contact you.</p>
              </div>
              <div className="the-chamber mb-5">
              <img src={hospital3} alt="call" className="img-fluid" />
              <div class="common-title drk animated fadeInUp"><h4>Reports</h4></div>
              <span class="difentate mb-2">Online Anand Lab Reports,<br></br> Medical Laboratory Services in Bangalore</span>
              <p>Upon signing an MOU with Anand Diagnostic Laboratory, each client lab/hospital is given unique login credentials to our online reports portal. As soon as a report is ready, it is uploaded to the portal and the same can be downloaded immediately by the client lab/hospital. Thus the time takes for a report to reach our clients across the region is eliminated.</p>
              </div>
              <div className="the-chamber mb-5">
              <img src={hospital4} alt="call" className="img-fluid" />
              <div class="common-title drk animated fadeInUp"><h4>Logistics</h4></div> 
              <p>At ADL, we have a robust logistics service, spanning majority of Karnataka. This network includes our sample pick-up team in Bangalore, our representatives in major tier-2 locations across Karnataka and a strong courier service supported by the public transport system in the region.</p>
              </div>
              <div className="the-chamber mb-5">
              <img src={hospital2} alt="call" className="img-fluid" />
              <div class="common-title drk animated fadeInUp"><h4>Value Added Services</h4></div> 
              <p>As part of ADL’s mission to provide quality diagnostic care to the masses, we organise periodic seminars for laboratory technicians and owners in Bangalore, and, upon invitation, in other towns and cities. These seminars focus on good laboratory practices and the basics of quality control among other topics. With a dedicated login for each laboratory/hospital client, it is possible to register for tests online, gain access to reports of all the samples sent by a corporate, and make online payments of invoices, in one simple and easy platform.</p>
              </div>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="green-bg animated fadeInRight">
              <h4 className="mb-3 text-center text-white">Partner with us</h4>
              <h5 className="mb-3 text-left text-yellow">Hospital Details</h5>
              
              <form name="contactform" method="post" action="#" id="contactform" > 
                <div className="formdata"><input type="text" placeholder="Hospital Name " name="name" id="name" className="form-control jsrequired " /></div>  
                <div className="formdata"><textarea className="form-control" placeholder="Hospital Address" name="msg" id="msg"></textarea></div> 
                </form>
                <h5 className="mb-3 text-left text-yellow">Personal Details</h5>
								<form name="contactform" method="post" action="#" id="contactform" > 
                                <div className="formdata"><input type="text" placeholder="Enter Your Name " name="name" id="name" className="form-control jsrequired " /></div>
                                <div className="formdata"><input type="text" placeholder="Designation" name="name" id="name" className="form-control jsrequired " /></div>
                                <div className="formdata"><input type="tel" placeholder="Enter Your Mobile Number" name="mobile" id="mobile" className="form-control jsrequired " /></div>
                                <div className="formdata"> <input type="email" placeholder="Enter Your Email ID" name="email" id="email"  className="form-control jsrequired " /></div>
                                <div className="formdata"><textarea className="form-control" placeholder="Message" name="msg" id="msg"></textarea></div>
                                <div className="formdata"> <input type="button" name="submit" value="Submit" onclick="submit_contact();" /></div>
                            </form>
                            </div>
                        </div>

        </div>
      </div>
    </section>

 
    

    </div>
  )
}
