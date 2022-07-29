import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bannerimage from "../../assets/images/inner-banner-2.jpg"; 
import Accordion from 'react-bootstrap/Accordion';

export default function Faq() {
  useEffect(() => {
    document.title = "Frequently Asked Questions";
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
                      <li> Frequently Asked Questions </li>
                    </ul>
                    <h1>
                    Got questions? <br></br>We've got answers  
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
              Frequently <span className='yelow'>Asked Questions</span> </h2></div>   
              <Accordion defaultActiveKey={['']} flush>

      <Accordion.Item eventKey="0">
        <Accordion.Header>1. Where do I get my login information from?</Accordion.Header>
        <Accordion.Body>
        Login information is available on the bottom of the receipt bill.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>2. Will my doctor accept the online report?</Accordion.Header>
        <Accordion.Body>
        Yes. The online reports are exact replica of the reports you will get if you come to the lab to collect them in person. 
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
      <Accordion.Header>3. How do I know if my report is ready for viewing online?</Accordion.Header>
      <Accordion.Body>
      You will get an SMS alert once the report gets ready. Also after you login to our website using the login details, you can see the status of the report from the Reports status tab 
      </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
      <Accordion.Header>4. Can I still come to the lab to collect the report?</Accordion.Header>
      <Accordion.Body>
      Yes, you can always come to the lab to collect the hard copy of the report, but that will be really unnecessary if you have a printer at home and can print the report from here. The report you print here and the report you collect from the lab, are exactly the same. Your doctor will accept the report you print at home as much as he/she will accept the report you collect at the lab.  
      </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
      <Accordion.Header>5. Can I see the reports on my Ipad and mobile phone?</Accordion.Header>
      <Accordion.Body>
      Yes. You can see the reports on multiple devices. Even this site can be viewed comfortably on your mobile device. Recently we also launched a Mobile App for android phones.<br/><br/>

      To access the reports through the mobile app, first download and install the app from  
      <b> https://play.google.com/store/apps/details?id=com.anandmapp</b><br/><br/>
      After installing the app, the patient has to self register after which they are ready to access the reports from their mobile devices.<br/><br/>

      To access, they will need to login with their unique id and password. The unique id will be given to the patient at the time of registration.
  
      </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
      <Accordion.Header>6. How secure is my report online?</Accordion.Header>
      <Accordion.Body>
      The login is authenticated through a user-id and access code (which is unique) to every patient. The login process is encrypted. Users have option to change the password to keep it more secure.
      </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6">
      <Accordion.Header>7. For how long are my reports kept online?</Accordion.Header>
      <Accordion.Body>
      The reports will be available online for 3 years after which they are archived. 
      </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="7">
      <Accordion.Header>8. Why do I need a PDF reader to see the report?</Accordion.Header>
      <Accordion.Body>
     A document in PDF format provides consistency of look and feel and font styles across all document types. Hence PDF is used as an industry standard when viewing documents online so that everyone gets to see the report in exactly the same way. To view a PDF document, you need a PDF reader like Adobe PDF reader or Nitro PDF reader.<br/><br/>
     All these readers are free to download.<br/><br/>
      Download Adobe PDF reader from here:<br/>
      <b>http://get.adobe.com/reader</b><br/><br/>
      Download Nitro PDF reader from here:<br/>
      <b>http://www.nitropdf.com/pdf-reader</b><br/><br/>
      </Accordion.Body>
      </Accordion.Item>

    </Accordion>
              </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-5">
            <div className="green-bg animated fadeInRight">
              <h4 className="mb-3 text-white"> For Questions </h4>
								<form name="contactform" method="post" action="#" id="contactform" > 
                                <div className="formdata"><input type="text" placeholder="Enter Your Name " name="name" id="name" className="form-control jsrequired " /></div>
                                <div className="formdata"> <input type="email" placeholder="Enter Your Email ID" name="email" id="email"  className="form-control jsrequired " /></div>
                                <div className="formdata"><input type="tel" placeholder="Enter Your Mobile Number" name="mobile" id="mobile" className="form-control jsrequired " /></div>
                                <div className="formdata"><input type="text" placeholder="Enter Your Location" name="name" id="name" className="form-control jsrequired " /></div> 
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