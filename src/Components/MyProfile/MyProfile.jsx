import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function MyProfile() {
  return (
    <div>
      <section className="inner-banner with-liners">
        <div className="inner-caption">
          <div className="container">
            <div className="row">
              <div className="caption-details bnr-txt">
                <h1>My Profile</h1>
                <ul>
                  <li>
                    <Link to="/my-account/"> Home </Link>
                  </li>
                  <li> / </li>
                  <li> My Profile </li>
                  <li> / </li>
                  <li> Account Information </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="filtering-lsts">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="common-heading cmg-img">
                <span
                  className="alphabet-argmnt"
                  style={{ background: "#5c2d91", color: "#fff" }}
                >
                  J
                </span>
                <h2>
                  <span> Hello! </span> <span className="yelow"> John </span>
                </h2>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="logout-set text-right">
                <Link to="/my-account/">
                  <i className="fa fa-power-off"></i> Log Out
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <div className="Products-factory-lsts netser shadow-sm border">
                  <ul>
                    <li>
                      <Link to="/my-account/information">
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
                      <Link to="/my-account/">
                        <i className="fa fa-power-off"></i>
                        Log Out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-9">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
