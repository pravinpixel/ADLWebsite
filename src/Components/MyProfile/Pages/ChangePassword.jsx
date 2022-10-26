import React from 'react'
import { Link } from 'react-router-dom'

export default function ChangePassword() {
  return (
    <div>
      <div className="row">
          <div className="col-3">
            <div className="Products-factory-lsts netser">
              <ul>
                <li> 
                    <Link to="/my-account">
                        <i class="fa fa-user"></i>
                        Account information 
                    </Link>
                </li>
                <li> 
                    <Link to="/my-account/update-profile"> 
                        <i class="fa fa-pencil-square"></i> 
                        Update Profile
                    </Link>
                </li>
                <li>
                  <Link to="/my-account/orders">
                    <i class="fa fa-shopping-cart"></i>
                    Orders
                  </Link>
                </li>
                <li>
                  <Link to="/my-account/return-orders">
                    <i class="fa fa-reply-all"></i>
                    Return Orders
                  </Link>
                </li>
                <li>
                  <Link to="/my-account/address">
                    <i class="fa fa-map-marker"></i>
                    Address
                  </Link>
                </li>
                <li className="active">
                  <Link to="/my-account/change-password">
                    <i class="fa fa-lock"></i> Change Password
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i class="fa fa-power-off"></i>
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
                        <h4>Change Password</h4>
                      </div>
                      <div className="update-profile">
                      <form name="contactform" method="post" action="#" id="contactform" > 
                                <div className="formdata"><input type="password" placeholder="Current Password" name="name" id="name" className="form-control jsrequired " /></div>
                                <div className="formdata"> <input type="password" placeholder="New Paaword" name="email" id="email"  className="form-control jsrequired " /></div>
                                <div className="formdata"> <input type="password" placeholder="Re-type New Password" name="email" id="email"  className="form-control jsrequired " /></div>   
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
