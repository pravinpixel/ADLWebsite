import React from 'react'
import logo from './../../assets/images/logo.png';
import logoberg from './../../assets/images/logoberg.png';
import location from './../../assets/images/location.png';
import sky from './../../assets/images/sky.png';
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
                          <img src={sky} alt="" className="img-fluid"/>
                          <span>Report</span>
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
                    </ul>
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <ul className="navbar-nav"> 
                      <li className="nav-item">
                        <Link to="/for-patient" className="nav-link">About us</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">Patients</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">Doctors</Link>
                      </li> 
                      <li className="nav-item dropdown">
                        <Link to="/" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Health Checkup</Link>
                          <div className="dropdown-bg">
                            
                        <ul className="dropdown-menu topr-clmn row">

                          <li className="col frst-clmn">
                            <ul>
                          <li>
                            <Link to="/" className="dropdown-item">Health Packages</Link>
                          </li>

                          <li>
                            <Link to="/" className="dropdown-item">Explore All Tests</Link>
                          </li>

                          <li>
                            <Link to="/" className="dropdown-item">Preparing for Health Checkup</Link>
                          </li>

                          <li>
                            <Link to="/" className="dropdown-item">Report Download</Link>
                          </li>

                          <li>
                          <Link to="/" className="dropdown-item">Book an appointment</Link>
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
                            <Link to="/" className="dropdown-item">Diabetes Assessment tool</Link>
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
                      <li className="nav-item">
                        <Link to="/" className="nav-link">Reach Us</Link>
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