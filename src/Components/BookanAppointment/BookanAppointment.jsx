import React, { useEffect } from 'react'
import Sliders from 'react-slick'
import { Link } from 'react-router-dom';
import { Form } from 'react-component-form';
import upload from '../../assets/images/upload.png'
import dwd from '../../assets/images/arrow-dwn.png'
import InnerCommonBanner from './Sections/InnerCommonBanner'  
import videoBg from '../../assets/images/appointment.jpg'
import playButton from '../../assets/images/play-icon.png' 

export default function BookanAppointment() {
    useEffect(() => {
        document.title = "Book an Appointment";
        window.scroll(0,0)
      }, []);
  return (
    <div>
     <InnerCommonBanner /> 
     
     <section className='blood-colleion'>
        <div className="container">
            <div className="row align-items-center">
                    <div className="col-lg-6">
                    <div className="contnt-set">
                    <div className="common-heading"><h2> Affordable And Convenient Lab Tests</h2></div>
                    <p>Anand Diagnostic Laboratory being an NABL accredited laboratory offers a hassle-free diagnostic service at both our state of the art labs & from the comfort of your home.<br/><br/>
                    If you wish to avail our "Anand@Home - Home Collection Service", our team of highly trained phlebotomists will deliver the best service from the comfort & safety of your home. <br/><br/>
                    Additionally our customers can also avail the latest service offered by ADL - The revolutionary drive-through blood collection service at Shivajinagar. This will allow an individual to go through the process of registering for the necessary blood tests and giving the blood sample without having to even get out of their car!</p> 
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="testivideo-section">
              <img src={videoBg} alt="" className="img-fluid"/>
              <div className="plying-btn text-center">
                <a href=""><img src={playButton}alt="" className="img-fluid"/></a>
              </div>
            </div> 
          </div>
                </div> 
            </div> 
     </section>

      <section className='book-aptmentfrm'>
      <div className="container">
      <div className="row align-items-center"> 
      <div className='col-lg-5'>

     
      </div> 
      <div className='col-lg-7'>
      <div className="poitment-form">
      <h4>Book your appointment today</h4>  
      <div className='banner-form'>
            <Form>
                <div className="frm-fields row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12"> 
                        <div className="form-data">
                            <input className="input100" type="text" name='name' placeholder="Name" required/> 
                        </div>
                        <div className="form-data">
                            <input className="input100" type="number" pattern="/^\d{10}$/" name='mobile' placeholder="Mobile" required/> 
                        </div>
                        <div className="form-data">
                            <input className="input100" type="text" name='location' placeholder="Select Your Location" required/> 
                        </div> 
                        <div className="form-data">
                            <input className="input100" type="text" name='location' placeholder="Select Your Test" required/> 
                        </div> 
                        <div className="form-data upload-btn-wrapper">
                            <button className="btn">Upload Prescription<img src={upload}/> </button>
                            <input type="file" name="reportFile"  required/>
                        </div> 
                        <div className="form-data">
                            <input className="input100" type="text" name='location' placeholder="Choose your test type" required/> 
                        </div> 
                        <div className="form-data sbm text-center">
                            <input type="submit" name="submit" value="SUBMIT" required/>
                        </div>
                    </div>
                </div>
            </Form>
        </div>
      </div>  
      </div>
      </div>
      </div>
      </section>

    <section className='getng-reprt'>
    <div className="container">
      <div className='distngt-strctre'>
      <div className="row align-items-center"> 
            <div className='col-lg-9'>
              <h4>Getting your Report</h4>
              <p>Collecting of test reports has never been easier. - Once ready, Users can log in to our website and download the reports right on to their computers or mobile devices immediately after our doctors release a report.</p>
            </div>
            <div className='col-lg-3 text-right'>
            <div className="cmn-buton"><p><a href="http://reports.anandlab.com/v3/index1.html" target="_blank">Download Report</a></p></div>
            </div> 
      </div>
      </div>
      </div>   
    </section> 


    </div>
  )
}