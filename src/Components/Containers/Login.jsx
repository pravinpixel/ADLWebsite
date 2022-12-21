import { useState } from "react";
import { Form } from "react-component-form";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <section className="main-billfrm cmnmenu-topmargin">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="row fully-bxn no-gutters">
                <div className="col-lg-6">
                  <div className="dhoni-bgm">
                    <div className="common-heading">
                      <h2>
                        Welcome <span> to Neuberg Anand </span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="cir-frm">
                    <Form>
                      <div className="frm-fields row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <div className="common-heading">
                            <h2>
                              Login <span> Here! </span>
                            </h2>
                          </div>
                          <div className="row">
                            <div className="form-data col-lg-12">
                              <input
                                className="input100"
                                type="text"
                                name="name"
                                placeholder="Username"
                                onChange={(e) => setUserName(e.target.value)}
                                required
                              />
                            </div>
                            <div className="form-data col-lg-12">
                              <input
                                className="input100"
                                type="text"
                                name="name"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                              />
                            </div>
                            <div className="form-data sbm col-lg-12">
                              <input
                                type="submit"
                                name="submit"
                                value="LOGIN"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 text-center p-0">
                            <div className="mid-poart">
                              <h5>or</h5>
                            </div>
                          </div>
                          <div className="col-lg-12 text-center p-0">
                            <div className="login-btn">
                              <Link to="" onClick={handleShow}>
                                Login with OTP{" "}
                              </Link>
                            </div>
                          </div>
                          <div className="col-lg-12 text-center mt-3">
                            <div className="user-regster">
                              New User
                              <Link to="/register"> Register Here!</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal show={show} onHide={handleClose} className="otp-pops" centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="row fully-bxn no-gutters">
            <div className="col-lg-6">
              <div className="dhoni-bgm">
                <div className="common-heading">
                  <h2>
                    {" "}
                    Welcome <span> to Neuberg Anand </span>{" "}
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cir-frm">
                <Form>
                  <div className="frm-fields row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="common-heading">
                        <h2>
                          {" "}
                          Login <span> with OTP! </span>{" "}
                        </h2>
                      </div>
                      <div className="row">
                        <div className="form-data col-lg-12">
                          <input
                            className="input100"
                            type="text"
                            name="name"
                            placeholder="Enter your Phone Number"
                            required
                          />
                        </div>
                        <div className="form-data sbm col-lg-12">
                          <input
                            type="submit"
                            name="submit"
                            value="Send OTP"
                            required
                          />
                        </div>

                        <div className="form-data col-lg-12">
                          <input
                            className="input100"
                            type="text"
                            name="name"
                            placeholder="Received OTP"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 text-center p-0">
                        <div className="mid-poart">
                          <h5>or</h5>
                        </div>
                      </div>
                      <div className="col-lg-12 text-center p-0">
                        <div className="login-btn">
                          <Link to="" onClick={handleClose}>
                            Login with Username & Password{" "}
                          </Link>
                        </div>
                      </div>

                      <div className="col-lg-12 text-center">
                        <div className="user-regster">
                          New User <Link to="/register"> Register Here!</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
