import React from 'react'
import send from './../../assets/images/send.png'
import playstore from './../../assets/images/playstore.png'
import ReachUs  from '../Home/Sections/ReachUs'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <ReachUs />
      <footer>
        <div className="container">
          <div className="row no-gutters">
            <div className="col-sm-12 col-md-6 col-lg-7">
              <h5>Quick Links</h5>
              <div className="footer-column">
                <ul>
                  <li>
                    <Link to="/" className="active">Home Collection</Link>
                  </li>
                  <li>
                    <Link to="/">COVID Antibody</Link>
                  </li>
                  <li>
                    <Link to="/">COVID 19 RTPCR Test</Link>
                  </li>
                  <li>
                    <Link to="/">Explore Packages</Link>
                  </li>
                  <li>
                    <Link to="/">Care Packages</Link>
                  </li>
                  <li>
                    <Link to="/">Give Feedback</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to="/">About ADL</Link>
                  </li>
                  <li>
                    <Link to="/">Book Packages</Link>
                  </li>
                  <li>
                    <Link to="/">Book Tests</Link>
                  </li>
                  <li>
                    <Link to="/">Find a Lab</Link>
                  </li>
                  <li>
                    <Link to="/">Blog</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to="/">Events</Link>
                  </li>
                  <li>
                    <Link to="/">Technical Capabilities</Link>
                  </li>
                  <li>
                    <Link to="/">News Clipping</Link>
                  </li>
                  <li>
                    <Link to="/">In The Media</Link>
                  </li>
                  <li>
                    <Link to="/">Careers</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to="/">Services</Link>
                  </li>
                  <li>
                    <Link to="/">Team</Link>
                  </li>
                  <li>
                    <Link to="/">Brands</Link>
                  </li>
                  <li>
                    <Link to="/">Network</Link>
                  </li>
                  <li>
                    <Link to="/">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-2">
              <h5>Terms and Policies</h5>
              <div className="footer-column">
                <ul>
                  <li>
                    <Link to="/">Cancellation Policy</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="/">Disclaimers</Link>
                  </li>
                  <li>
                    <Link to="/">Feedback</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <h5>Subscribe to our newsletter</h5>
              <div className="footer-column subs-cribe">
                <p>Signup for our newsletter to get the latest news, updates in your inbox. </p>
                <input type="text" placeholder="Enter Your E-mail Id" name="search" />
                <button type="submit"><img src={send} alt="" className="img-fluid"/></button>
              </div>
              <h5 className="cips">Download App</h5>
              <Link to="/"><img src={playstore} alt="" className="img-fluid"/></Link>
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
    </>
  )
}
