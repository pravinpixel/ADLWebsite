import { useState } from "react";
import { Form } from "react-component-form";
import { Link } from "react-router-dom";
import axios from "axios"; 
function ForgotPassword() {
    const [email, setEmail] = useState()
    const SendRestLink = () => {

    }
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
                                                            Rest Password <span> Here! </span>
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
                                                       
                                                        <div className="form-data sbm col-lg-12">
                                                            <button type="button" className="btn-primary" onClick={SendRestLink}>REST</button>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 text-center mb-3">
                                                        <div className="user-regster">
                                                            Back to Login ? <Link to="/login"> click Here!</Link>
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
    )
}

export default ForgotPassword