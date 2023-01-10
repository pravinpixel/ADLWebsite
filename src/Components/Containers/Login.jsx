import { useEffect, useState } from "react";
import { Form } from "react-component-form";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import AuthUser, { PutUser, RemoveUser } from "../../Helpers/AuthUser";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../../Redux/Actions/TestAction";
import { setLoading } from "../../Redux/Actions/LoaderAction";

export default function Login() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [Otp, setOtp] = useState(null);
  const [serverOtp, setServerOtp] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const LoginAccount = () => {
    dispatch(setLoading(true))
    axios.post(API_URL.LOGIN, {
      email: email,
      password: password,
    }).then((response) => {
      dispatch(setLoading(false))
      if (response.data.status) {
        PutUser({
          email: response.data.data.email,
          id: response.data.data.id,
          name: response.data.data.name,
        })
        dispatch(setAuthUser(response.data.data))
        toast.success('Loggin Success')
        navigate("/my-cart");
      } else {
        toast.error(response.data.message)
      }
    }).catch((errors) => {
      console.log(errors.response)
    });
  }
  const LoginWithOtp = () => {
    dispatch(setLoading(true))
    axios.post(API_URL.LOGIN_WITH_OTP, {
      email: email,
      mobile: mobileNumber,
    }).then((response) => {
      dispatch(setLoading(false))
      if (response.data.status) {
        setServerOtp(response.data.otp)
        PutUser({
          email: response.data.data.email,
          id: response.data.data.id,
          name: response.data.data.name,
        })
        toast.success('Enter Your OTP !')
      } else {
        toast.error(response.data.message)
      }
    }).catch((errors) => {
      console.log(errors.response)
    });
  }
  const VerifyOtp = () => {
    if(Otp == serverOtp) {
      dispatch(setAuthUser(AuthUser()))
      toast.success('Loggin Success')
      navigate("/my-cart");
    } else {
      toast.error('Ivalid OTP! Try again!')
      RemoveUser()
    }
  }
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

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
                                name="email"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                              />
                            </div>
                            <div className="form-data col-lg-12">
                              <input
                                className="input100"
                                type="password"
                                name="name"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                              />
                            </div>
                            <div className="form-data sbm col-lg-12">
                              <button type="button" className="btn-primary" onClick={LoginAccount}>LOGIN</button>
                            </div>
                          </div>
                          <div className="col-lg-12 text-center mb-3">
                            <div className="user-regster">
                              Forgot Your Password ? <Link to="/forgot-password"> click Here!</Link>
                            </div>
                          </div>
                          <div className="col-lg-12 text-center p-0">
                            <div className="mid-poart">
                              <h5>or</h5>
                            </div>
                          </div>
                          <div className="col-lg-12 text-center p-0 mb-3">
                            <div className="login-btn">
                              <Link to="" onClick={handleShow}>
                                Login with OTP{" "}
                              </Link>
                            </div>
                          </div>
                          <div className="col-lg-12 text-center">
                            <div className="user-regster">
                              You Don't have a account ?
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
                <div className="frm-fields row clearfix">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="common-heading">
                      <h2>
                        {" "}
                        Login <span> with OTP! </span>{" "}
                      </h2>
                    </div>
                    <div className="row">
                      {
                        serverOtp == null ?
                          <div className="col p-0">
                            <Form>
                              <div className="form-data col-lg-12">
                                <input
                                  className="input100"
                                  type="email"
                                  name="name"
                                  placeholder="Enter Email Address"
                                  onChange={(e) => setEmail(e.target.value)}
                                  required
                                />
                              </div>
                              <div className="form-data col-lg-12">
                                <input
                                  className="input100"
                                  type="email"
                                  name="name"
                                  placeholder="Enter your Phone Number"
                                  onChange={(e) => setMobileNumber(e.target.value)}
                                  required
                                />
                              </div>
                              <div className="form-data sbm col-lg-12">
                                <input
                                  type="submit"
                                  name="submit"
                                  value="Send OTP"
                                  onClick={LoginWithOtp}
                                  required
                                />
                              </div>
                            </Form>
                          </div>
                          :
                          <>
                            <div className="form-data col-lg-12">
                              <input
                                className="input100"
                                type="text"
                                name="name"
                                onChange={(e) => setOtp(e.target.value)}
                                placeholder="Received OTP"
                                required
                              />
                            </div>
                            <div className="form-data sbm col-lg-12">
                              <input
                                type="submit"
                                name="submit"
                                value="Verfiy OTP"
                                onClick={VerifyOtp}
                                required
                              />
                            </div>
                          </>
                      }



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
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div >
  );
}
