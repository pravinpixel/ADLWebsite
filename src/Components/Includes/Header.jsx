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
                        <a href="#">
                          <img src={location} alt="" className="img-fluid"/>
                          <span>Bangalore</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img src={sky} alt="" className="img-fluid"/>
                          <span>Report</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img src={user} alt="" className="img-fluid"/>
                          <span>Login</span>
                        </a>
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
                        <a className="nav-link active" href="./">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="./">For Patients</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="./">For Doctors</a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Health Checkup</a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href=" ">Checkup - 1</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href=" ">Checkup - 2</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href=" ">Checkup - 3</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href=" ">Checkup - 4</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href=" ">Checkup - 5</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href=" ">Checkup - 6</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href=" ">Checkup - 7</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="">Find a lab</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="">About ADL</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="">Reach Us</a>
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