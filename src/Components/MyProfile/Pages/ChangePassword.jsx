import React from "react";
import { Link } from "react-router-dom";

export default function ChangePassword() {
  return (
    <div className="col-9">
      <div className="Products-factory-functions">
        <div className="row">
          <div className="col-12">
            <div className="accnt-heads">
              <h4>Change Password</h4>
            </div>
            <div className="update-profile">
              <form
                name="contactform"
                method="post"
                action="#"
                id="contactform"
              >
                <div className="formdata">
                  <input
                    type="password"
                    placeholder="Current Password"
                    name="name"
                    id="name"
                    className="form-control jsrequired "
                  />
                </div>
                <div className="formdata">
                  {" "}
                  <input
                    type="password"
                    placeholder="New Paaword"
                    name="email"
                    id="email"
                    className="form-control jsrequired "
                  />
                </div>
                <div className="formdata">
                  {" "}
                  <input
                    type="password"
                    placeholder="Re-type New Password"
                    name="email"
                    id="email"
                    className="form-control jsrequired "
                  />
                </div>
                <div className="formdata">
                  {" "}
                  <input
                    type="button"
                    name="submit"
                    value="Update"
                    onClick="submit_contact();"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
