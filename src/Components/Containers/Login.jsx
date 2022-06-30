import React from "react";
import { Form } from "react-component-form";
import { Link } from "react-router-dom"; 

export default function Login() {
  return (
    <div> 
      <section className="main-billfrm cmnmenu-topmargin">
        <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-9"> 
                <div className="row fully-bxn no-gutters">
                <div className="col-lg-6">
                  <div className="dhoni-bgm">
                  <div className="common-heading"><h2> Welcome <span> to Neuberg Anand </span> </h2></div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="cir-frm"> 
                  <Form>
                    <div className="frm-fields row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="common-heading"><h2> Login <span> Here! </span> </h2></div>
                        <div className="row">
                        <div className="form-data col-lg-12"> 
                            <input className="input100" type="text" name='name' placeholder="Username" required/> 
                        </div>
                        <div className="form-data col-lg-12"> 
                            <input className="input100" type="text" name='name' placeholder="Password" required/> 
                        </div>
                        <div className="form-data sbm col-lg-12">
                            <input type="submit" name="submit" value="LOGIN" required/>
                        </div>
                        </div>
                        <div className="col-lg-12 text-center">
                          <div className="user-regster">
                           New User <Link to=''> Register Here!</Link>
                          </div>
                        </div>
                        <div className="col-lg-12 text-center p-0">
                        <div className="mid-poart">
                          <h5>or</h5>
                        </div>
                        </div>
                        <div className="col-lg-12 text-center p-0">
                          <div className="login-btn">
                            <Link to=''>Guest User</Link>
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

    </div>
  );
}
