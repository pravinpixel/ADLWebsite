import React from 'react'
import { Link } from 'react-router-dom'

export default function UpdateProfile() {
  return (
    <div>
      <div className="row">
          <div className="col-3">
            <div className="Products-factory-lsts netser">
              <ul>
                <li> 
                    <Link to="/my-account">
                        <i className="fa fa-user"></i>
                        Account information 
                    </Link>
                </li>
                <li className="active"> 
                    <Link to="/my-account/update-profile"> 
                        <i className="fa fa-pencil-square"></i> 
                        Update Profile
                    </Link>
                </li>
                <li>
                  <Link to="/my-account/orders">
                    <i className="fa fa-shopping-cart"></i>
                    Orders
                  </Link>
                </li>
                <li>
                  <Link to="/my-account/return-orders">
                    <i className="fa fa-reply-all"></i>
                    Return Orders
                  </Link>
                </li>
                <li>
                  <Link to="/my-account/address">
                    <i className="fa fa-map-marker"></i>
                    Address
                  </Link>
                </li>
                <li>
                  <Link to="/my-account/change-password">
                    <i className="fa fa-lock"></i> Change Password
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fa fa-power-off"></i>
                    Log Out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-9">
            <div className="Products-factory-functions">
              <div className="row">
              <div className="col-12">
                      <div className="accnt-heads">
                        <h4>Profile</h4>
                      </div>
                      <div className="update-profile">
                      <form name="contactform" method="post" action="#" id="contactform" > 
                                <div className="formdata"><input type="text" placeholder="Name" name="name" id="name" className="form-control jsrequired " /></div>
                                <div className="formdata"> <input type="email" placeholder="Date of Birth" name="email" id="email"  className="form-control jsrequired " /></div>
                                <div className="formdata"> <input type="email" placeholder="Email Id" name="email" id="email"  className="form-control jsrequired " /></div>
                                <div className="formdata"><input type="tel" placeholder="Phone Number" name="mobile" id="mobile" className="form-control jsrequired " /></div>  
                                <div className="formdata"> <input type="button" name="submit" value="Update" onClick="submit_contact();" /></div>
                            </form>
                      </div>
                    </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
