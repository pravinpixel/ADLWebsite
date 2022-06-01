import React from 'react'
import logo from './../../assets/images/logo.png';
import location from './../../assets/images/location.png';
import sky from './../../assets/images/sky.png';
import user from './../../assets/images/user.png';
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
              <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
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
                <div className="row">
                  <div className="col">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link to="/" className="nav-link active">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">For Patients</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">For Doctors</Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link to="/" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Health Checkup</Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link to="/" className="dropdown-item">Checkup - 1</Link>
                          </li>
                          <li>
                            <Link to="/" className="dropdown-item">Checkup - 2</Link>
                          </li>
                          <li>
                            <Link to="/" className="dropdown-item">Checkup - 3</Link>
                          </li>
                          <li>
                            <Link to="/" className="dropdown-item">Checkup - 4</Link>
                          </li>
                          <li>
                            <Link to="/" className="dropdown-item">Checkup - 5</Link>
                          </li>
                          <li>
                            <Link to="/" className="dropdown-item">Checkup - 6</Link>
                          </li>
                          <li>
                            <Link to="/" className="dropdown-item">Checkup - 7</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">Find a lab</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">About ADL</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">Reach Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
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