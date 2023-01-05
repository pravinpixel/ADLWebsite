import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bannerimage from "../../assets/images/inner-banner-16.webp"; 


export default function Contact() {
    useEffect(() => {
        document.title = "Reach Us";
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
                      <li><Link to='/'></Link> Contact Us </li>
                    </ul>
                    <h1>
                    How Can we Help! You?
                    </h1>
                </div>
            </div>
        </div>
        </div>
</section>

<section className="section cont-acts">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"> 
                    <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-12">
                            <div className="row">
                                <div className="col-sm-12 col-md-4 col-lg-4">
                                <div className="contact-box animated fadeInUp">
                                <p><i className="fa fa-map-marker" aria-hidden="true"></i><strong>No 54, Bowring Tower, Bowring hospital road, Shivaji Nagar, Bangalore – 560001</strong></p>
                            </div>
                                </div>
                                <div className="col-sm-12 col-md-4 col-lg-4">
                                <div className="contact-box animated fadeInUp">
                                <p><i className="fa fa-phone" aria-hidden="true"></i>General : 18004251974</p>
                            </div>
                                </div>
                                <div className="col-sm-12 col-md-4 col-lg-4">
                                <div className="contact-box animated fadeInUp">
                                <p><i className="fa fa-clock-o" aria-hidden="true"></i>
                                Mon - Fri : 7:00 a.m – 7:00 p.m <br></br>
                                Sundays & Holidays : 7:00 a.m – 1:00 p.m  
                                </p>
                            </div>
                                </div> 
                            </div>     
                           <div className="mb-5 animated fadeInUp"><hr/></div>
                            <h5 className="animated fadeInUp mb-3 text-center"><strong>Health and Customer Care Enquiry</strong></h5>
                            <p className="text-center">Need assistance or want to share your Health experience with us? You can call us or email us:</p>
                            <div className="row justify-content-center">
                                <div className="col-sm-12 col-md-12 col-lg-6">                                    
                                    <div className="contact-box animated fadeInUp">
                                    <p><i className="fa fa-envelope" aria-hidden="true"></i><a href="mailto:digitalleads@neubergdiagnostics.com" target="_blank">digitalleads@neubergdiagnostics.com</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5 animated fadeInUp"><hr/></div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-8">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15551.398949025306!2d77.606148!3d12.981461!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x33ceeda312ca9a2c!2sAnand%20Diagnostic%20Laboratory%20(A%20Neuberg%20Associate)!5e0!3m2!1sen!2sin!4v1656335670159!5m2!1sen!2sin" className="contact-map" allowFullScreen="" loading="lazy"></iframe>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="green-bg animated fadeInRight">
                                <h4 className="mb-3 text-white">Get in Touch</h4>
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
        </div>
    </div>
</section>  
    

    </div>
  )
}
