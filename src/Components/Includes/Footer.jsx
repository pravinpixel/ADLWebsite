import React from 'react'
import send from './../../assets/images/send.png'
import playstore from './../../assets/images/playstore.png'
import ReachUs  from '../Home/Sections/ReachUs'
import { Link } from 'react-router-dom'
import location from './../../assets/images/mob-ic-1.png';
import sky from './../../assets/images/mob-ic-4.png';
import cart from './../../assets/images/mob-ic-3.png';
import toll from './../../assets/images/mob-ic-5.png';
import user from './../../assets/images/mob-ic-2.png'; 
export default function Footer() {
  return (
    <>
      <ReachUs />
      <footer>
        <div className="container">
          <div className="row no-gutters">
            <div className="col-sm-12 col-md-12 col-lg-12 p-0">
              
              <div className="footer-column row">
              <div className="col-lg-2">
                <ul>
                <h5>Quick Links</h5> 
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/people-behind">People Behind</Link>
                  </li>
                  <li>
                    <Link to="/history">History</Link>
                  </li>
                  <li>
                    <Link to="/commitment">Commitment</Link>
                  </li>
                  <li>
                    <Link to="/">Accreditation</Link>
                  </li>
                  {/* <li>
                    <Link to="/">Book a Blood Test</Link>
                  </li> */}
                  <li>
                    <a href="https://reports.anandlab.com/v3/index1.html" target="_blank">Download Reports</a>
                  </li>
                  <li>
                    <Link to="">Health Packages</Link>
                  </li>
                  <li>
                  <a href="https://www.anandlab.com/blog/" target="_blank">Blog</a>
                  </li>
                  <li>
                    <Link to="/">Careers</Link>
                  </li>
                </ul>
                </div>
                <div className="col-lg-3">
                <ul>
                <h5>Patients</h5>
                  <li>
                    <Link to="/packages">Packages</Link>
                  </li>
                  <li>
                    <Link to="">Explore all Tests</Link>
                  </li>
                  <li>
                    <Link to="/preparing-for-health-checkup">Preparing for Health Checkup</Link>
                  </li>
                  <li>
                  <a href="https://reports.anandlab.com/v3/index1.html" target="_blank">Report Download</a>
                  </li>
                  {/* <li>
                    <Link to="/">Book an Appointment </Link>
                  </li> */}
                  <li>
                    <Link to="/patients-consumers">Patient Care</Link>
                  </li>
                  <li>
                    <Link to="/feedback">Feedback</Link>
                  </li> 
                  {/* <li>
                    <Link to="/">Special Offers</Link>
                  </li> */}
                  <li>
                    <a href="https://www.anandlab.com/blog/" target="_blank">Health Tips</a>
                  </li>
                  {/* <li>
                    <Link to="/">Diabetes Assessment Tool</Link>
                  </li> */}
                  <li>
                    <Link to="/faq">FAQ’s</Link>
                  </li>
                </ul>
                </div>
                <div className="col-lg-3">
                <ul>
                <h5>Doctors</h5>
                  <li>
                    <a href="https://reports.anandlab.com/dos/" target="_blank">Directory of Service</a>
                  </li>
                  <li>
                    <Link to="/department">Department</Link>
                  </li>
                  <li>
                    <Link to="/hospital-or-lab-management">Hospital or Lab Management</Link>
                  </li>
                  <li>
                    <Link to="/clinical-lab-management">Clinician Lab Management</Link>
                  </li>
                  <li>
                    <Link to="/franchising-opportunities">Franchise Opportunities</Link>
                  </li>
                  <li>
                    <Link to="/research">Research</Link>
                  </li>
                </ul>
                </div>
                {/* <div className="col-lg-2">
                <ul>
                <h5>Health Checkup</h5>
                  {/* <li>
                    <Link to="/">Reach Our Lab</Link>
                  </li> 
                  <li>
                    <Link to="/book-an-appointment">Book Home Collection</Link>
                  </li>
                  <li>
                    <Link to="">Full Body Health Packages</Link>
                  </li>
                  <li>
                    <Link to="">Clinical & Imaging Services</Link>
                  </li>
                  <li>
                    <Link to="/">Drive through Blood Collection</Link>
                  </li>
                  <li>
                    <Link to="/">Book COVID Test</Link>
                  </li>
                  <li>
                    <Link to="/">Diabetes DOST</Link>
                  </li>
                  <li>
                    <Link to="/">Thyroid DOST</Link>
                  </li>
                  <li>
                    <Link to="/">V-Card, A Patient Beneficial Program</Link>
                  </li>  
                  <li>
                    <Link to="/physiotherapy">Physiotherapy</Link>
                  </li>
                </ul>
                </div> */}
                <div className="col-lg-2">
                <ul>
                <h5>Reach Us</h5>
                  <li>
                    <Link to="/reach-us">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="">Reach our Lab</Link>
                  </li>
                  {/* <li>
                    <Link to="/healthcheckup-for-employees">Health Checkup for Employees</Link>
                  </li>
                  <li>
                    <Link to="/">Neuberg Anand Franchise</Link>
                  </li>
                  <li>
                    <Link to="/">COVID Testing for Employees</Link>
                  </li>
                  <li>
                    <Link to="/">Hospital & Lab Partnership</Link>
                  </li> */}
                  <li>
                    <Link to="/">Job Oppourtunities</Link>
                  </li>
                  <li>
                    <a href="http://www.naalm.com/academics/" target="_blank">Upgrade your Skills</a>
                  </li>
                </ul>
                </div>
                <div className="col-lg-2">
                <ul>
                <h5>Terms and Policies</h5>
                  <li>
                    <Link to="">Cancellation Policy</Link>
                  </li>
                  <li>
                    <Link to="">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="">Disclaimers</Link>
                  </li>
                  <li>
                    <Link to="">Feedback</Link>
                  </li>
                </ul>
                <h5 className="cips">Download App</h5>
              <a href="https://play.google.com/store/apps/details?id=com.neubergdiagnostics" target="_blank"><img src={playstore} alt="" className="img-fluid"/></a>
                </div>
              </div>
            </div> 
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="footer-column subs-cribe">
              <h5>Subscribe to our newsletter</h5>
                <p>Signup for our newsletter to get the latest news, updates in your inbox. </p>
                <input type="text" placeholder="Enter Your E-mail Id" name="search" />
                <button type="submit"><img src={send} alt="" className="img-fluid"/></button>
              </div> 
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col">
              <div className="divider"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <div className="text-white footer-bottom-text text-center">
                &copy;  2022 Anandlab. All Rights Reserved. With <Link to="https://www.pixel-studios.com/" target="_blank"><strong>Pixel Studios</strong></Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="mobile-footer">
	    <a href="" data-toggle="tooltip" title="Current Location" >
      <img src={location} alt="" className="img-fluid"/>
      Location
      </a>
	    <a href="/login" data-toggle="tooltip" title="Login to view your Profile">
      <img src={user} alt="" className="img-fluid"/>
      Login
      </a>
	    <a href="" data-toggle="tooltip" title="Cart Details">
      <img src={cart} alt="" className="img-fluid"/>
      Cart
      </a>
	    <a href="https://reports.anandlab.com/v3/index1.html" target="_blank"data-toggle="tooltip" title="Download Your Reports">
      <img src={sky} alt="" className="img-fluid"/>
      Reports
      </a>
	    <a href="" target="_blank" data-toggle="tooltip" title="Call Us"><img src={toll} alt="" className="img-fluid"/>
      Toll-Free
      </a>
      </div>

    </>
  )
}
