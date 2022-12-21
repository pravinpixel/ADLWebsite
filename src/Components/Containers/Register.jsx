import axios from "axios";
import { useState } from "react";
import { Form } from "react-component-form";
import { Link } from "react-router-dom";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import AuthUser, { PutUser } from "../../Helpers/AuthUser";
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  let navigate = useNavigate();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    }
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
    if (name === "confirm_password") {
      setConfirmPassword(value);
    }
  };
 
  const handleSubmit = () => {
    if(password === confirmPassword) {
      axios.post(API_URL.REGISTER,{
        name    : name,
        email   : email,
        password: password,
      }).then((response) => {
        PutUser({
          email : response.data.data.email,
          id : response.data.data.id
        })
        if(AuthUser()) {
          navigate("/checkout");
        }
      })
    }
  };

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
                              
                              Register <span> Here! </span>
                            </h2>
                          </div>
                          <div className="row">
                            <div className="form-data col-lg-12">
                              <input
                                className="input100"
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                                onChange={(e) => handleInputChange(e)}
                              />
                            </div>
                            <div className="form-data col-lg-12">
                              <input
                                className="input100"
                                type="text"
                                name="email"
                                placeholder="E-mail"
                                required
                                onChange={(e) => handleInputChange(e)}
                              />
                            </div>
                            <div className="form-data col-lg-12">
                              <input
                                className="input100"
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                                onChange={(e) => handleInputChange(e)}
                              />
                            </div>
                            <div className="form-data col-lg-12">
                              <input
                                className="input100"
                                type="password"
                                name="confirm_password"
                                placeholder="Re-Enter your Password"
                                required
                                onChange={(e) => handleInputChange(e)}
                              />
                            </div>
                            <div className="form-data sbm col-lg-12">
                              <input
                                onClick={()=>handleSubmit()} 
                                type="submit"
                                name="submit"
                                value="REGISTER"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Form>
                    <div className="col-lg-12 text-center mt-3">
                      <div className="user-regster">
                        Already have a account ?<Link to="/login"> Login</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
