import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bannerimage from "../../assets/images/inner-banner-2.jpg"; 
import hospital1 from "../../assets/images/hos-1.png"; 
import hospital2 from "../../assets/images/hos-2.png"; 
import hospital3 from "../../assets/images/hos-3.png"; 
import hospital4 from "../../assets/images/hos-4.png"; 

export default function Research() {
  useEffect(() => {
    document.title = "Research";
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
                      <li> Research </li>
                    </ul>
                    <h1>
                    Affirmative & accurate <br></br>solutions!
                    </h1>
                </div>
            </div>
        </div>
        </div>
    </section>

    <section className='abt-secton forumn-frm'>
      <div className="container">
        <div className="row"> 
          <div className="col-lg-8">
          <div className="common-heading"><h2> <span className="inlne">Our </span> Resources</h2>
          <p>At ADL, we have two strong resources that are highly beneficial to those conducting medical research – the extensive experiential knowledge of our doctors; and our wide menu that ranges from routine to highly specialised diagnostic tests. If you are a Clinical Research Organisation or a student who would like to utilise our services for research purposes, fill out the form and we will get in touch with you.</p>
          </div>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="green-bg ps-rel animated fadeInRight">
              <h4 className="mb-3 text-center text-white">Have any Queries?</h4>   
								<form name="contactform" method="post" action="#" id="contactform" > 
                                <div className="formdata"><input type="text" placeholder="Name" name="name" id="name" className="form-control jsrequired " /></div>
                                <div className="formdata"><input type="text" placeholder="City" name="name" id="name" className="form-control jsrequired " /></div> 
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

  
 
    

    </div>
  )
}
