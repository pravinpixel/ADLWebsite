import { useRef, useState , useEffect } from "react";
import logo from "./../../assets/images/logo.png";
import logoberg from "./../../assets/images/logoberg.png";
import location from "./../../assets/images/location.png";
import sky from "./../../assets/images/sky.png";
import toll from "./../../assets/images/toll.png";
import user from "./../../assets/images/user.png"; 
import men4 from "./../../assets/images/men-4.png";
import dwd from "./../../assets/images/dwd.png";
import CartCount from "./CartCount";
import { Link } from "react-router-dom";
import { Form } from "react-component-form";
import Modal from "react-bootstrap/Modal";
import { useSelector ,useDispatch } from "react-redux";
import { setTestLocation } from "../../Redux/Actions/TestAction";
import { toast } from "react-hot-toast";

export default function Header() {
  const authUser = useSelector((state) => state.authUser); 
  const TestLocation = useSelector((state) => state.TestLocation); 

  const navElement = useRef();
  const toggleIcon = useRef();
  const [show, setShow] = useState(false);
  const [LabLocation, setLabLocation] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()
  const changeLocation = (data) => {  
    dispatch(setTestLocation(data.location))
    localStorage.setItem('TestLocation',data.location)
    handleClose();
    toast.success('Location to be Changed')
  }
  useEffect(() => {
    if(TestLocation !== null) {
      setLabLocation(TestLocation.TestLocation) 
    }
  }, [])
  
  function handleLink(e) {
    navElement.current.classList.remove("show");
    toggleIcon.current.classList.add("collapsed");
    let navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((navItem) => {
      if (navItem.classList.contains("active")) {
        navItem.classList.remove("active");
      }
    });
    let plusItems = document.querySelectorAll(".fa-minus");
    console.log(plusItems);
    plusItems.forEach((plusItem) => {
      if (plusItem.classList.contains("fa-minus")) {
        plusItem.classList.remove("fa-minus");
        plusItem.classList.add("fa-plus");
      }
    });
  }

  function mobileToggle(e) {
    e.preventDefault();

    let root = e.target.parentElement.parentElement;
    let child = e.target;
    if (child.classList.contains("fa-plus")) {
      child.classList.remove("fa-plus");
      child.classList.add("fa-minus");
    } else {
      child.classList.add("fa-plus");
      child.classList.remove("fa-minus");
    }
    if (root.classList.contains("active")) {
      root.classList.remove("active");
      navElement.current.classList.remove("down-menu-open");
    } else {
      root.classList.add("active");
      navElement.current.classList.add("down-menu-open");
    }
  }
  return (
    <>
      <header id="header" className="main-header site-navbar">
        <div className="container">
          <div className="row">
            <div className="col">
              <nav className="navbar navbar-default navbar-trans navbar-expand-lg">
                <Link to="/" className="navbar-brand text-brand">
                  <img src={logo} alt="" className="img-fluid" />
                </Link>
                <div
                  className="navbar-collapse collapse justify-content-center"
                  id="navbarDefault"
                  ref={navElement}
                >
                  <div className="row align-items-center no-disp-tabscrn">
                    <div className="col">
                      <ul className="top-links text-center">
                        <li>
                          <input
                            type="text"
                            placeholder="Search for Health Packages / Tests / Labs"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="col">
                      <ul className="icns-lst text-center">
                        <li>
                          <a onClick={handleShow}>
                            <img src={location} alt="" className="img-fluid" />
                            <span>{TestLocation !== null ? TestLocation.TestLocation.replaceAll('-',' ') : null}</span>
                          </a>
                        </li>
                        <li> 
                          {
                            authUser.user.length === 0 && authUser.user !== null ? 
                              <Link to="/login">
                                <img src={user} alt="" className="img-fluid" />
                                <span>Login</span>
                              </Link>
                            :
                              <Link to="/my-account">
                                <img src={user} alt="" className="img-fluid" />
                                <span>My Account</span>
                              </Link>
                          }
                        </li>
                        <li>
                          <CartCount />
                        </li>
                        <li>
                          <a
                            href="https://reports.anandlab.com/v3/index1.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img src={sky} alt="" className="img-fluid" />
                            <span>Report</span>
                          </a>
                        </li>
                        <li>
                          <a href="tel:18004251974">
                            <img src={toll} alt="" className="img-fluid" />
                            <span>Toll-free</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <ul className="navbar-nav">
                        <li className="nav-item dropdown sngle-frce about-inn">
                          <Link
                            onClick={handleLink}
                            className="nav-link dropdown-toggle"
                            to="/about-us"
                          >
                            About Us
                          </Link>
                          <span
                            className="mobile-toggle"
                            onClick={mobileToggle}
                          >
                            <i className="fa fa-plus about-inn"></i>
                          </span>
                          <ul className="dropdown-menu frresplyr-abt">
                            <li>
                              <Link
                                onClick={handleLink}
                                className="dropdown-item"
                                to="/people-behind"
                              >
                                {" "}
                                People behind{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={handleLink}
                                className="dropdown-item"
                                to="/history"
                              >
                                History
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={handleLink}
                                className="dropdown-item"
                                to="/commitment"
                              >
                                Commitment
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={handleLink}
                                className="dropdown-item"
                                to="/accreditation"
                              >
                                Accreditation
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown">
                          <Link
                            onClick={handleLink}
                            className="nav-link dropdown-toggle"
                            to="#"
                          >
                            Patients
                          </Link>
                          <span
                            className="mobile-toggle"
                            onClick={mobileToggle}
                          >
                            <i className="fa fa-plus"></i>
                          </span>
                          <div className="dropdown-bg">
                            <ul className="dropdown-menu frresplyr-pat topr-clmn row">
                              <li className="col frst-clmn">
                                <ul>
                                  <li>
                                    <Link
                                      onClick={handleLink}
                                      to="/packages"
                                      className="dropdown-item"
                                    >
                                      Packages
                                    </Link>
                                  </li>

                                  {/* <li>
                            <Link  onClick={handleLink}  to="/health-packages" className="dropdown-item">Health Packages</Link>
                          </li> */}

                                  <li>
                                    <Link
                                      onClick={handleLink}
                                      to="/"
                                      className="dropdown-item"
                                    >
                                      Explore All Tests
                                    </Link>
                                  </li>

                                  <li>
                                    <Link
                                      onClick={handleLink}
                                      to="/preparing-for-health-checkup"
                                      className="dropdown-item"
                                    >
                                      Preparing for Health Checkup
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      onClick={handleLink}
                                      to="/drive-through-blood-collection"
                                      className="dropdown-item"
                                    >
                                      Drive through Blood Collection
                                    </Link>
                                  </li>

                                  {/* <li>
                          <Link  onClick={handleLink}  to="/" className="dropdown-item">Loyalty Program</Link>
                          </li> */}
                                </ul>
                              </li>

                              <li className="col secnd-clmn">
                                <ul>
                                  <li>
                                    <Link
                                      onClick={handleLink}
                                      to="/patients-consumers"
                                      className="dropdown-item"
                                    >
                                      Patient Care
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      onClick={handleLink}
                                      to="/feedback"
                                      className="dropdown-item"
                                    >
                                      Feedback
                                    </Link>
                                  </li>
                                  {/* <li>
                            <Link  onClick={handleLink}  to="/" className="dropdown-item">Special offers</Link>
                          </li> */}
                                  <li>
                                    <a
                                      href="https://www.anandlab.com/blog/"
                                      target="_blank"
                                      className="dropdown-item"
                                      rel="noreferrer"
                                    >
                                      Health tips
                                    </a>
                                  </li>
                                  <li>
                                    <Link
                                      onClick={handleLink}
                                      to="/faq"
                                      className="dropdown-item"
                                    >
                                      Frequently asked questions
                                    </Link>
                                  </li>
                                </ul>
                              </li>

                              <li className="col thrd-clmn">
                                <ul>
                                  {/* <li>
                            <a href="https://reports.anandlab.com/v3/index1.html" target="_blank"className="dropdown-item">
                              <img src={men1} alt="" className="img-fluid"/> 
                              Download Reports
                            </a>
                          </li> */}
                                  {/* <li>
                            <Link  onClick={handleLink}  to="/book-an-appointment" className="dropdown-item">
                            <img src={men2} alt="" className="img-fluid"/>
                            Book an Appointment
                            </Link>
                          </li> */}
                                  {/* <li>
                            <a href="https://forms.zohopublic.com/neubergdiagnostics/form/NeubergDiabetesAssessment/formperma/gOG36LHmwXiCENsjMNLd9CZV-Z5yXgfhgyZx0Tz2RyE" target="_blank" className="dropdown-item">
                            <img src={men3} alt="" className="img-fluid"/>
                            Diabetes Assesment Tool
                            </a>
                          </li> */}
                                  <li className="dwd">
                                    <a
                                      href="https://reports.anandlab.com/v3/index1.html"
                                      target="_blank"
                                      className="dropdown-item"
                                      rel="noreferrer"
                                    >
                                      <img
                                        src={dwd}
                                        alt=""
                                        className="img-fluid"
                                      />
                                      Download Reports
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      onClick={handleLink}
                                      href="tel:18004251974"
                                      className="dropdown-item"
                                    >
                                      <img
                                        src={men4}
                                        alt=""
                                        className="img-fluid"
                                      />
                                      18004251974 (TOLL-FREE)
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="nav-item dropdown sngle-frce">
                          <Link
                            onClick={handleLink}
                            className="nav-link dropdown-toggle"
                            to="#"
                          >
                            Doctors
                          </Link>
                          <span
                            className="mobile-toggle"
                            onClick={mobileToggle}
                          >
                            <i className="fa fa-plus"></i>
                          </span>
                          <ul className="dropdown-menu frresplyr-doc">
                            <li>
                              <a
                                className="dropdown-item"
                                href="https://reports.anandlab.com/dos/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                {" "}
                                Directory of service (DOS){" "}
                              </a>
                            </li>
                            <li>
                              <Link
                                onClick={handleLink}
                                className="dropdown-item"
                                to="/department"
                              >
                                {" "}
                                Department{" "}
                              </Link>
                            </li>
                                  <li>
                                    <Link
                                      onClick={handleLink}
                                      to="/physiotherapy"
                                      className="dropdown-item"
                                    >
                                      {" "}
                                      Physiotherapy{" "}
                                    </Link>
                                  </li>
                            <li>
                              <Link
                                onClick={handleLink}
                                className="dropdown-item"
                                to="/hospital-or-lab-management"
                              >
                                {" "}
                                Hospital or Lab Management{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={handleLink}
                                className="dropdown-item"
                                to="/clinical-lab-management"
                              >
                                {" "}
                                Clinician Lab Management{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={handleLink}
                                className="dropdown-item"
                                to="/franchising-opportunities"
                              >
                                {" "}
                                Franchise Opportunities{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={handleLink}
                                className="dropdown-item"
                                to="/research"
                              >
                                {" "}
                                Research{" "}
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item sngle-frce about-inn">
                          <Link
                            onClick={handleLink}
                            className="nav-link"
                            to="/packages"
                          >Health Checkup
                          </Link> 
                        </li>
                        {/* <li className="nav-item dropdown">
                          <Link
                            onClick={handleLink}
                            className="nav-link dropdown-toggle"
                            to="#"
                          >
                            Health Checkup
                          </Link>
                          <span
                            className="mobile-toggle"
                            onClick={mobileToggle}
                          >
                            <i className="fa fa-plus"></i>
                          </span>
                          <div className="dropdown-bg">
                            <ul className="dropdown-menu frresplyr-hea topr-clmn row">
                              <li className="col frst-clmn">
                                <ul>
                                  {/* <li>
                            <Link  onClick={handleLink}  to="/book-an-appointment" className="dropdown-item"> Reach our lab </Link> 
                          </li>  

                                  <li>
                                    <Link
                                      onClick={handleLink}
                                      to="/book-an-appointment"
                                      className="dropdown-item"
                                    >
                                      {" "}
                                      Book home collection{" "}
                                    </Link>
                                  </li>

                                  <li>
                                    <Link
                                      onClick={handleLink}
                                      to="/"
                                      className="dropdown-item"
                                    >
                                      {" "}
                                      Full body health packages{" "}
                                    </Link>
                                  </li>
                                  {/* <li>
                          <Link  onClick={handleLink}  to="/patients-consumers" className="dropdown-item"> Drive through blood collection </Link>
                          </li>   
                                </ul>
                              </li>

                              <li className="col secnd-clmn">
                                <ul>
                                  {/* <li>
                            <a href="http://reports.anandlab.com/feverclinicapp/initfeverclinic.aspx" target="_blank" className="dropdown-item"> Book COVID test </a>
                          </li>
                          <li>
                            <Link  onClick={handleLink}  to="/" className="dropdown-item"> Diabetes DOST </Link>
                          </li>
                          <li>
                            <Link  onClick={handleLink}  to="/" className="dropdown-item"> Thyroid DOST </Link>
                          </li>
                          <li>
                            <Link  onClick={handleLink}  to="/patients-consumers" className="dropdown-item"> V-Card, A patient beneficial program </Link>
                          </li>  

                                  <li>
                                    <Link
                                      onClick={handleLink}
                                      to="/"
                                      className="dropdown-item"
                                    >
                                      {" "}
                                      Clinical & Imaging services{" "}
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      onClick={handleLink}
                                      to="/physiotherapy"
                                      className="dropdown-item"
                                    >
                                      {" "}
                                      Physiotherapy{" "}
                                    </Link>
                                  </li>
                                </ul>
                              </li>

                              <li className="col thrd-clmn">
                                <ul>
                                  <li>
                          <a href="https://reports.anandlab.com/v3/index1.html" target="_blank"className="dropdown-item">
                              <img src={men1} alt="" className="img-fluid"/> 
                              Download Reports
                            </a>
                          </li>
                          <li>
                            <Link  onClick={handleLink}  to="/book-an-appointment" className="dropdown-item">
                            <img src={men2} alt="" className="img-fluid"/>
                            Book an Appointment
                            </Link>
                          </li>
                          <li>
                          <a href="https://forms.zohopublic.com/neubergdiagnostics/form/NeubergDiabetesAssessment/formperma/gOG36LHmwXiCENsjMNLd9CZV-Z5yXgfhgyZx0Tz2RyE" target="_blank" className="dropdown-item">
                            <img src={men3} alt="" className="img-fluid"/>
                            Diabetes Assesment Tool
                          </a>
                          </li> 
                                  <li>
                                    <a
                                      onClick={handleLink}
                                      href="tel:18004251974"
                                      className="dropdown-item"
                                    >
                                      <img
                                        src={men4}
                                        alt=""
                                        className="img-fluid"
                                      />
                                      18004251974 (TOLL-FREE)
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </li> */}
                        <li className="nav-item dropdown sngle-frce">
                          <Link
                            onClick={handleLink}
                            className="nav-link dropdown-toggle"
                            to="/reach-us"
                          >
                            Reach Us
                          </Link>
                          <span
                            className="mobile-toggle"
                            onClick={mobileToggle}
                          >
                            <i className="fa fa-plus"></i>
                          </span>
                          <ul className="dropdown-menu frresplyr-con">
                            <li>
                              <Link
                                onClick={handleLink}
                                className="dropdown-item"
                                to="/"
                              >
                                {" "}
                                Reach our lab{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={handleLink}
                                className="dropdown-item"
                                to="/healthcheckup-for-employees"
                              >
                                {" "}
                                Health Checkup for employees{" "}
                              </Link>
                            </li>
                            {/* <li>
                              <Link  onClick={handleLink}  className="dropdown-item" to="/anandlab-franchise"> Neuberg Anand Franchise </Link>
                           </li>
                           <li>
                              <Link  onClick={handleLink}  className="dropdown-item" to="/covidtesting-employees"> COVID testing for employees </Link>
                           </li>
                           <li>
                              <Link   onClick={handleLink}  className="dropdown-item" to="/hospital-or-lab-management"> Hospital & Lab Partnership </Link>
                           </li> */}
                            <li>
                              <Link
                                onClick={handleLink}
                                className="dropdown-item"
                                to="/"
                              >
                                {" "}
                                Job oppourtunities{" "}
                              </Link>
                            </li>
                            <li>
                              <a
                                href="http://www.naalm.com/academics/"
                                target="_blank"
                                className="dropdown-item"
                                rel="noreferrer"
                              >
                                {" "}
                                Upgrade your skills{" "}
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <Link
                  onClick={handleLink}
                  to="/"
                  className="navbar-brand text-brand rit-sde"
                >
                  <img src={logoberg} alt="" className="img-fluid" />
                </Link>
                <button
                  ref={toggleIcon}
                  className="navbar-toggler collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarDefault"
                  aria-controls="navbarDefault"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
                <a
                  href="#"
                  className="srch-btn"
                  data-toggle="modal"
                  data-target="#srch"
                  rel="noreferrer"
                >
                  <i className="fa fa-search" aria-hidden="true"></i>
                </a>

                <div
                  className="modal fade cstm tpm-set"
                  id="srch"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="mdl-cnt">
                          <input
                            type="text"
                            placeholder="Search for Health Packages / Tests / Labs"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

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
                  <input type="radio" name="location" id="addrs2" value="mangalore" checked={LabLocation === "mangalore"} onChange={(e) => setLabLocation(e.target.value)}/>
                  <label for="addrs2">
                    <span>Mangalore</span>
                  </label>
                  <input type="radio" name="location" id="addrs3" value="rest-of-bangalore" checked={LabLocation === "rest-of-bangalore"} onChange={(e) => setLabLocation(e.target.value)}/>
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
  );
}
