import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

export default function ReturnOrders() {
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
                <li className="active">
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
                      <h4>Return Orders</h4>
                    </div>
                    <div className="acnt-deetils">
                    <table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">Order Id</th>
      <th scope="col">Package Name</th>
      <th scope="col">Status</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">7854189</th>
      <td>Neu Test</td>
      <td>Pending</td>
      <td>Cancel</td>
    </tr> 
    <tr>
      <th scope="row">7854189</th>
      <td>Neu Test</td>
      <td>Pending</td>
      <td>Cancel</td>
    </tr>
    <tr>
      <th scope="row">7854189</th>
      <td>Neu Test</td>
      <td>Pending</td>
      <td>Cancel</td>
    </tr>
  </tbody>
</table>
                    </div>
                  </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
