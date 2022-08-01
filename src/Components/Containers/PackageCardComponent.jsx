import React from 'react'
import popImg from '../../assets/images/popular-img-1.jpg'
import { Link } from 'react-router-dom';

export default function PackageCardComponent() {
  return (
    <div className="pack-deils">
                <div className="pck-img">
                  <img src={popImg} alt="" className="img-fluid"/>
                  <div className="ble-fnt">60 <span>Tests</span></div>
                </div>
                <h3>NEU Express</h3>
                <h4>Cholesterol, Triglycerides, HDL, Direct LDL, Calculated Total cholesterol to HDL-cholesterol Ratio...  
                    <Link to="/">+ More</Link>
                </h4>
                <h5>&#8377;180 <span className="strke"><s>&#8377;280</s></span></h5>
                <h6>79 % off T&C*</h6>
                <p> <Link to="/about-us"> Book Now</Link></p>
              </div>
  )
}
