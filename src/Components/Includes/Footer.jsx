import React from 'react'
import send from './../../assets/images/send.png'
import playstore from './../../assets/images/playstore.png'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row no-gutters">
          <div className="col-sm-12 col-md-6 col-lg-7">
            <h5>Quick Links</h5>
            <div className="footer-column">
              <ul>
                <li>
                  <a className="active" href="./">Home Collection</a>
                </li>
                <li>
                  <a className="" href=" ">COVID Antibody</a>
                </li>
                <li>
                  <a className="" href=" ">COVID 19 RTPCR Test</a>
                </li>
                <li>
                  <a className="" href=" ">Explore Packages</a>
                </li>
                <li>
                  <a className="" href=" ">Care Packages</a>
                </li>
                <li>
                  <a className="" href=" ">Give Feedback</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a className="" href="./">About ADL</a>
                </li>
                <li>
                  <a className="" href="./">Book Packages</a>
                </li>
                <li>
                  <a className="" href="./">Book Tests</a>
                </li>
                <li>
                  <a className="" href="./">Find a Lab</a>
                </li>
                <li>
                  <a className="" href="./">Blog</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a className="" href="./">Events</a>
                </li>
                <li>
                  <a className="" href="./">Technical Capabilities</a>
                </li>
                <li>
                  <a className="" href="./">News Clipping</a>
                </li>
                <li>
                  <a className="" href="./">In The Media</a>
                </li>
                <li>
                  <a className="" href="./">Careers</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a className="" href="./">Services</a>
                </li>
                <li>
                  <a className="" href="./">Team</a>
                </li>
                <li>
                  <a className="" href="./">Brands</a>
                </li>
                <li>
                  <a className="" href="./">Network</a>
                </li>
                <li>
                  <a className="" href="./">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-2">
            <h5>Terms and Policies</h5>
            <div className="footer-column">
              <ul>
                <li>
                  <a className="" href="./">Cancellation Policy</a>
                </li>
                <li>
                  <a className="" href="./">Privacy Policy</a>
                </li>
                <li>
                  <a className="" href="./">Terms & Conditions</a>
                </li>
                <li>
                  <a className="" href="./">Disclaimers</a>
                </li>
                <li>
                  <a className="" href="./">Feedback</a>
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
            <a href=""><img src={playstore} alt="" className="img-fluid"/></a>
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
              &copy;  2022 Anandlab. All Rights Reserved. With <a href="https://www.pixel-studios.com/" target="_blank"><strong>Pixel Studios</strong></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
