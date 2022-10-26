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
                    <Link to="/"> Home </Link>
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
                <Link to="/">
                  <i class="fa fa-power-off"></i> Log Out
                </Link>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="totl-pkglst">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
