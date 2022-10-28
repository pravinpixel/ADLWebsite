import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bannerimage from "../../assets/images/inner-banner-2.jpg";
import testuimonialimg from "../../assets/images/testim.jpg";
import dbcde from "../../assets/images/db-cde.png";
import valueicon1 from "../../assets/images/value-icon-1.png";
import valueicon2 from "../../assets/images/value-icon-2.png";
import valueicon3 from "../../assets/images/value-icon-3.png";
import valueicon4 from "../../assets/images/value-icon-4.png";
import valueicon5 from "../../assets/images/value-icon-5.png";
import valueicon6 from "../../assets/images/value-icon-6.png";
import valueicon7 from "../../assets/images/value-icon-7.png";
import abtusimg from "../../assets/images/people-behind.png";
import careng1 from "../../assets/images/care-1.jpg";
import careng2 from "../../assets/images/care-2.jpg";
import careng3 from "../../assets/images/care-3.jpg";
import careng4 from "../../assets/images/care-4.jpg";
import careng5 from "../../assets/images/care-5.jpg";
import knwmre from "../../assets/images/know-more.png";

export default function Feedback() {
  useEffect(() => {
    document.title = "Feedback";
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
                      <li> Feedback </li>
                    </ul>
                    <h1>
                    Service with commitment<br></br> and competence!  
                    </h1>
                </div>
            </div>
        </div>
        </div>
    </section>

    <section className='abt-secton forumn-frm'>
      <div className="container">
        <div className="row">

          <div className="col-lg-7">
              <div className="legacy-care">
              <div className="common-heading"><h2> 
              ADL <span className='yelow'>Forum</span> </h2></div>
              <p>Do you have a question regarding a test your doctor prescribed? Curious about what transpires in the time between when your sample was collected and report was issued? Do you have something to share about your experience with us but do not know whom to approach? ‘Ask ADL’ is a highly recommended portal where you can feel free to ask any question that has been on top of your mind and you will be receiving a reply from our experts on the same. Further, this is a platform for us to hear from our valuable customers. Please feel free to share your ideas and feedback.<br></br>
              <b>We are listening!</b></p>
              {/* <div className="spcl-cnt"> 
              <div className="common-title drk animated fadeInUp mb-1">
               <h4>Wellness Packages</h4>
            </div>
            Monitoring health at regular intervals avoids the ignorance of early signs of possible ailments. ADL provides with economical and effectual wellness packages that aid you in staying healthy.
              </div> */}
              <div className='cmn-buton'>
              <p>
              <a href="">Call Back</a>
              <a className='bg-trsnper ylw'>Enquire Now</a>
              </p>
              </div>
              </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-5">
            <div className="green-bg animated fadeInRight">
              <h4 className="mb-3 text-white">For Questions, ideas & Feedback</h4>
								<form name="contactform" method="post" action="#" id="contactform" > 
                                <div className="formdata"><input type="text" placeholder="Enter Your Name " name="name" id="name" className="form-control jsrequired " /></div>
                                <div className="formdata"> <input type="email" placeholder="Enter Your Email ID" name="email" id="email"  className="form-control jsrequired " /></div>
                                <div className="formdata"><input type="tel" placeholder="Enter Your Mobile Number" name="mobile" id="mobile" className="form-control jsrequired " /></div>
                                <div className="formdata"><input type="text" placeholder="Enter Your Location" name="name" id="name" className="form-control jsrequired " /></div> 
                                <div className="formdata"><textarea className="form-control" placeholder="Message" name="msg" id="msg"></textarea></div>
                                <div className="formdata"> <input type="button" name="submit" value="Submit" onClick="submit_contact();" /></div>
                            </form>

                            </div>
                        </div>

        </div>
      </div>
    </section>

 
    

    </div>
  )
}
