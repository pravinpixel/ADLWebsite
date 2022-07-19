import React from 'react'
import logo from './../../assets/images/logo.png';
import logoberg from './../../assets/images/logoberg.png';
import location from './../../assets/images/location.png';
import sky from './../../assets/images/sky.png';
import toll from './../../assets/images/toll.png';
import user from './../../assets/images/user.png';
import men1 from './../../assets/images/men-1.png';
import men2 from './../../assets/images/men-2.png';
import men3 from './../../assets/images/men-3.png';
import men4 from './../../assets/images/men-4.png';
import CartCount from './CartCount';
import { Link } from 'react-router-dom';

export default function Header() { 
  return (
    <header id="header" className="main-header site-navbar">
      <div className="container">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-default navbar-trans navbar-expand-lg">
              <Link to="/" className="navbar-brand text-brand">
                <img src={logo} alt="" className="img-fluid"/>
              </Link>
              <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
                <div className="row align-items-center">
                  <div className="col">
                    <ul className="top-links text-center">
                      <li>
                        <input type="text" placeholder="Search for Health Packages / Tests / Labs" />
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <ul className="icns-lst text-center">
                      <li>
                        <Link to="/">
                          <img src={location} alt="" className="img-fluid"/>
                          <span>Bangalore</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <img src={user} alt="" className="img-fluid"/>
                          <span>Login</span>
                        </Link>
                      </li>
                      <li>
                        <CartCount/> 
                      </li>
                      <li>
                        <Link to="/">
                          <img src={sky} alt="" className="img-fluid"/>
                          <span>Report</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <img src={toll} alt="" className="img-fluid"/>
                          <span>Toll-free</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="">
                  <div className="">

                    <ul className="navbar-nav">  
                      <li className="nav-item dropdown sngle-frce">
                        <Link className="nav-link dropdown-toggle" to="/about-us">About Us</Link>
                        <ul className="dropdown-menu">
                           <li>
                              <Link className="dropdown-item" to="/people-behind"> People behind </Link>
                           </li>
                           <li>
                              <Link className="dropdown-item" to="/history">History</Link>
                           </li>
                           <li>
                              <Link className="dropdown-item" to="/commitment">Commitment</Link>
                           </li>
                           <li>
                              <Link className="dropdown-item" to="/accreditation">Accreditation</Link>
                           </li> 
                        </ul>
                     </li>
                      <li className="nav-item dropdown">
                        <a href="javascript:void(0)" className="nav-link dropdown-toggle"  aria-haspopup="true" aria-expanded="false">Patients</a>
                          <div className="dropdown-bg">
                            
                        <ul className="dropdown-menu topr-clmn row">

                          <li className="col frst-clmn">
                            <ul>
                          <li>
                            <Link to="/patients-consumers" className="dropdown-item">Patients Consumers</Link>
                          </li>

                          <li>
                            <Link to="/packages" className="dropdown-item">Packages</Link>
                          </li>

                          <li>
                            <Link to="/health-packages" className="dropdown-item">Health Packages</Link>
                          </li>

                          <li>
                            <Link to="/" className="dropdown-item">Explore All Tests</Link>
                          </li>

                          <li>
                            <Link to="/" className="dropdown-item">Preparing for Health Checkup</Link>
                          </li> 

                          <li>
                          <Link to="/" className="dropdown-item">Loyalty Program</Link>
                          </li>

                          </ul>
                          </li> 

                          <li className="col secnd-clmn">
                            <ul>
                          <li>
                            <Link to="/" className="dropdown-item">Drive through Blood Collection</Link>
                          </li>
                          <li>
                            <Link to="/" className="dropdown-item">Feedback</Link>
                          </li>
                          <li>
                            <Link to="/" className="dropdown-item">Special offers</Link>
                          </li>
                          <li>
                            <Link to="/" className="dropdown-item">Health tips</Link>
                          </li> 
                          <li>
                            <Link to="/" className="dropdown-item">Frequently asked questions</Link>
                          </li>
                          </ul>
                          </li>

                          <li className="col thrd-clmn">
                            <ul>
                          <li>
                            <Link to="/" className="dropdown-item">
                              <img src={men1} alt="" className="img-fluid"/> 
                              Download Reports
                            </Link>
                          </li>
                          <li>
                            <Link to="/" className="dropdown-item">
                            <img src={men2} alt="" className="img-fluid"/>
                            Book an Appointment
                            </Link>
                          </li>
                          <li>
                            <Link to="/" className="dropdown-item">
                            <img src={men3} alt="" className="img-fluid"/>
                            Diabetes Assesment Tool
                            </Link>
                          </li>
                          <li>
                            <Link to="/" className="dropdown-item">
                            <img src={men4} alt="" className="img-fluid"/>
                            18004251974 (TOLL-FREE)
                            </Link>
                          </li>
                          </ul>
                          </li>
                        </ul>
                        </div>
                      </li> 
                      <li className="nav-item dropdown sngle-frce">
                        <Link className="nav-link dropdown-toggle" to="/"  aria-haspopup="true" aria-expanded="false">Doctors</Link>
                        <ul className="dropdown-menu">
                           <li>
                              <Link className="dropdown-item" to="/"> Directory of service (DOS) </Link>
                           </li>
                           <li>
                              <Link className="dropdown-item" to="/"> Department </Link>
                           </li>
                           <li>
                              <Link className="dropdown-item" to="/"> Hospital or Lab Management </Link>
                           </li>
                           <li>
                              <Link className="dropdown-item" to="/"> Clinician Lab Management </Link>
                           </li>
                           <li>
                              <Link className="dropdown-item" to="/"> Franchise Opportunities </Link>
                           </li>
                           <li>
                              <Link className="dropdown-item" to="/"> Research </Link>
                           </li>   
                        </ul>
                     </li> 
                      <li className="nav-item dropdown">
                        <a href="javascript:void(0)" className="nav-link dropdown-toggle"  aria-haspopup="true" aria-expanded="false">Health Checkup</a>
                          <div className="dropdown-bg">
                            
                        <ul className="dropdown-menu topr-clmn row">

                          <li className="col frst-clmn">
                            <ul>
                          <li>
                            <Link to="/" className="dropdown-item"> Reach our lab </Link>
                          </li>

                          <li>
                            <Link to="/" className="dropdown-item"> Book home collection </Link>
                          </li>

                          <li>
                            <Link to="/" className="dropdown-item"> Full body health packages </Link>
                          </li>

                          <li>
                            <Link to="/" className="dropdown-item"> Clinical & Imaging services </Link>
                          </li>

                          <li>
                          <Link to="/" className="dropdown-item"> Drive through blood collection </Link>
                          </li> 

                          </ul>
                          </li> 

                          <li className="col secnd-clmn">
                            <ul>
                          <li>
                            <Link to="/" className="dropdown-item"> Book COVID test </Link>
                          </li>
                          <li>
                            <Link to="/" className="dropdown-item"> Diabetes DOST </Link>
                          </li>
                          <li>
                            <Link to="/" className="dropdown-item"> Thyroid DOST </Link>
                          </li>
                          <li>
                            <Link to="/" className="dropdown-item"> V-Card, A patient beneficial program </Link>
                          </li>
                          <li>
                            <Link to="/physiotherapy" className="dropdown-item"> Physiotherapy </Link>
                          </li> 

                          </ul>
                          </li>

                          <li className="col thrd-clmn">
                            <ul>
                          <li>
                            <Link to="/" className="dropdown-item">
                              <img src={men1} alt="" className="img-fluid"/> 
                              Download Reports
                            </Link>
                          </li>
                          <li>
                            <Link to="/" className="dropdown-item">
                            <img src={men2} alt="" className="img-fluid"/>
                            Book an Appointment
                            </Link>
                          </li>
                          <li>
                            <Link to="/" className="dropdown-item">
                            <img src={men3} alt="" className="img-fluid"/>
                            Diabetes Assesment Tool
                            </Link>
                          </li>
                          <li>
                            <Link to="/" className="dropdown-item">
                            <img src={men4} alt="" className="img-fluid"/>
                            18004251974 (TOLL-FREE)
                            </Link>
                          </li>
                          </ul>
                          </li>
                        </ul>
                        </div>
                      </li> 
                      <li className="nav-item dropdown sngle-frce">
                        <Link className="nav-link dropdown-toggle" to="/reach-us">Reach Us</Link>
                        <ul className="dropdown-menu">
                           <li>
                              <Link className="dropdown-item" to="/"> Head office & other locations </Link>
                           </li>
                           <li>
                              <Link className="dropdown-item" to="/"> Health Checkup for employees </Link>
                           </li>
                           <li>
                              <Link className="dropdown-item" to="/"> Neuberg Anand Franchise </Link>
                           </li>
                           <li>
                              <Link className="dropdown-item" to="/"> COVID testing for employees </Link>
                           </li>
                           <li>
                              <Link className="dropdown-item" to="/"> Hospital & Lab Partnership </Link>
                           </li>
                           <li>
                              <Link className="dropdown-item" to="/"> Job oppourtunities </Link>
                           </li>
                           <li>
                              <Link className="dropdown-item" to="/"> Upgrade your skills </Link>
                           </li>    
                        </ul>
                     </li>
                    </ul>
                  </div>
                </div>
              </div>
              <Link to="/" className="navbar-brand text-brand">
                <img src={logoberg} alt="" className="img-fluid"/>
              </Link>
              <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}