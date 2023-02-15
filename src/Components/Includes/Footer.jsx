import React, { useState } from 'react'
import send from './../../assets/images/send.png'
import playstore from './../../assets/images/playstore.png'
import ReachUs from '../Home/Sections/ReachUs'
import { Link } from 'react-router-dom'
import location from './../../assets/images/mob-ic-1.png';
import sky from './../../assets/images/mob-ic-4.png';
import cart from './../../assets/images/mob-ic-3.png';
import toll from './../../assets/images/mob-ic-5.png';
import user from './../../assets/images/mob-ic-2.png';
import { API_URL } from '../../Redux/Constant/ApiRoute'
import { toast } from 'react-hot-toast'
import { NewsletterResponse } from '../../Helpers/FormResponse'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../../Redux/Actions/LoaderAction'
import { Modal } from 'react-bootstrap'
import { Form } from 'react-component-form'
import { setTestLocation } from '../../Redux/Actions/TestAction'

const getCurrentYear = () => {
  return new Date().getFullYear();
};

export default function Footer() {
  const [Email, setEmail] = useState(null);
  const dispatch = useDispatch()
  const [LabLocation, setLabLocation] = useState(null);
  const TestLocation = useSelector((state) => state.TestLocation);
  const authUser = useSelector((state) => state.authUser);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const changeLocation = (data) => {  
    dispatch(setTestLocation(data.location))
    localStorage.setItem('TestLocation',data.location)
    handleClose();
    toast.success('Location to be Changed')
  }
  const SubscribeNewsLetter = () => {
    dispatch(setLoading(true))
    var formdata = new FormData();
    formdata.append("email", Email);
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    fetch(API_URL.NEWS_LETTER, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.Errors === false) {
          NewsletterResponse()
        } else {
          try {
            toast.error(result.Message.email[0])
          } catch (error) {
            toast.error(result.Message)
          }
        }
        setEmail('')
        dispatch(setLoading(false))
      }).catch(error => console.log('error', error));
  }
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
                      <Link to="/accreditation">Accreditation</Link>
                    </li>
                    {/* <li>
                    <Link to="/">Book a Blood Test</Link>
                  </li> */}
                    <li>
                      <a href="https://reports.anandlab.com/v3/index1.html" target="_blank">Download Reports</a>
                    </li>
                    <li>
                      <Link to="/packages">Health Packages</Link>
                    </li>
                    <li>
                      <a href="https://www.anandlab.com/blog/" target="_blank">Blog</a>
                    </li>
                    <li>
                      <Link to="/careers">Careers</Link>
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
                      <Link to="/for-patient">Explore all Tests</Link>
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
                      <Link to="/find-lab">Reach our Lab</Link>
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
                      <Link to="/careers">Job Oppourtunities</Link>
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
                    <Link to="/cancellation-policy">Cancellation Policy</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/terms-conditions">Terms & Conditions</Link>
                  </li> 
                  <li>
                    <Link to="/feedback">Feedback</Link>
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
                <p>Sign Up for our newsletter to get the latest news and updates in your inbox.</p>
                <input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your E-mail Id" name="search" />
                <button type="submit" onClick={SubscribeNewsLetter}><img src={send} alt="" className="img-fluid" /></button>
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
                &copy;  {getCurrentYear()} Anandlab. All Rights Reserved. With <Link to="https://www.pixel-studios.com/" target="_blank"><strong>Pixel Studios</strong></Link>
              </div>
            </div>
          </div>
        </div>
      </footer>


      <div className="mobile-footer">
        <a onClick={handleShow} style={{ color:'black',textTransform:'capitalize' }}>
          <img src={location} alt="" className="img-fluid" />
           {TestLocation !== null ? TestLocation.TestLocation.replaceAll('-', ' ') : null} 
        </a>
        {
          authUser.user.length === 0 && authUser.user !== null ?
            <Link to="/login" data-toggle="tooltip" title="Login to view your Profile">
              <img src={user} alt="" className="img-fluid" />
              <span>Login</span>
            </Link>
            :
            <Link to="/my-account" data-toggle="tooltip" title="view your Profile">
              <img src={user} alt="" className="img-fluid" />
              <span>Account</span>
            </Link>
        }
        <Link to="/my-cart" data-toggle="tooltip" title="Cart Details">
          <img src={cart} alt="" className="img-fluid" />
          Cart
          <span className='numb-circle'>10</span>
        </Link>

        <a href="https://reports.anandlab.com/v3/index1.html" target="_blank" data-toggle="tooltip" title="Download Your Reports">
          <img src={sky} alt="" className="img-fluid" />
          Reports
        </a>
        <a href="tel:18004251974" target="_blank" data-toggle="tooltip" title="Call Us"><img src={toll} alt="" className="img-fluid" />
          Toll-Free
        </a>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        className="otp-pops location-pops"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="row fully-bxn no-gutters">
            <div className="col-lg-12 seceter-frm text-center">
              <h4>Please Select your Location</h4>
              <Form onSubmit={changeLocation}>
                <div className="addres-que customRadio ">
                  <input type="radio" name="location" id="addrs1" value="bangalore" checked={LabLocation === "bangalore"} onChange={(e) => setLabLocation(e.target.value)} />
                  <label for="addrs1">
                    <span>Bangalore</span>
                  </label>
                  <input type="radio" name="location" id="addrs2" value="mangalore" checked={LabLocation === "mangalore"} onChange={(e) => setLabLocation(e.target.value)} />
                  <label for="addrs2">
                    <span>Mangalore</span>
                  </label>
                  <input type="radio" name="location" id="addrs3" value="rest-of-bangalore" checked={LabLocation === "rest-of-bangalore"} onChange={(e) => setLabLocation(e.target.value)} />
                  <label for="addrs3">
                    <span>Rest of Bangalore</span>
                  </label>
                </div>
                <div className="col-lg-12 text-center p-0">
                  <div className="login-btn">
                    <button className="btn-primary"> Locate </button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
