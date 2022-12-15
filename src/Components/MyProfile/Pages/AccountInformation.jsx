import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

export default function AccountInformation() {
  useEffect(() => {
    document.title = "Account Information";
    window.scroll(0,0)
  }, []);
  return (
    <div>
      <div className="row">
          <div className="col-3">
            <div className="Products-factory-lsts netser">
              <ul>
                <li  className="active"> 
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
                <li>
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
                      <h4>Basic Information</h4>
                    </div>
                    <div className="acnt-deetils">
                      <ul>
                        <li>
                          <span>
                            <i class="fa fa-user-o" aria-hidden="true"></i>{" "}
                            Name :
                          </span>{" "}
                          John
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-calendar" aria-hidden="true"></i>{" "}
                            DOB :
                          </span>{" "}
                          18/09/1990
                        </li>
                        <li>
                          <span>
                            <i
                              class="fa fa-envelope-o"
                              aria-hidden="true"
                            ></i>{" "}
                            E-mail :
                          </span>{" "}
                          john@gmail.com
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-phone" aria-hidden="true"></i>{" "}
                            Phone :
                          </span>{" "}
                          1234567890
                        </li>
                      </ul>
                    </div>
                  </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}