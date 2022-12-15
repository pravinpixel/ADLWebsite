import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

export default function Orders() {
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
                        <i className="fa fa-user"></i> 
                         Account information 
                    </Link>
                </li>
                <li>
                    <Link to="/my-account/update-profile"> 
                        <i className="fa fa-pencil-square"></i> 
                        Update Profile
                    </Link>
                </li>
                <li className="active">
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
                      <h4>Your Orders</h4>
                    </div>
                    <div className="acnt-deetils">
                    <table className="table">
  <thead className="thead-light">
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
