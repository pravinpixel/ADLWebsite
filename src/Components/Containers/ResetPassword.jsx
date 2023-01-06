import { useState } from "react";
import { Form } from "react-component-form";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {API_URL} from '../../Redux/Constant/ApiRoute'
import axios from "axios"; 
import { ContentContainer } from "../../Helpers";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
function ResetPassword() {
    const location = useParams() 
    const [newPassowrd, setNewPassowrd]         = useState(null)
    const [confirmPassowrd, setConfirmPassowrd] = useState(null)
    const SendRestLink = () => {
        if(newPassowrd === confirmPassowrd) {
            axios.post(API_URL.RESET_PASSWORD + location.customer_id,{
                new_password : newPassowrd
            }).then((response) => {
                if(response.data.status) {
                    toast.success(response.data.message)
                } else {
                    toast.error(response.data.message)
                }
            })   
        } else {
            toast.error("Confirm Password is Not Matched!")
        }
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
                                                            Reset Password <span> Here! </span>
                                                        </h2>
                                                    </div>
                                                    <div className="row">
                                                        <div className="form-data col-lg-12">
                                                            <input
                                                                className="input100"
                                                                type="text"
                                                                name="email"
                                                                placeholder="Enter the new password .."
                                                                onChange={(e) => setNewPassowrd(e.target.value)}
                                                                required
                                                            />
                                                        </div>  
                                                        <div className="form-data col-lg-12">
                                                            <input
                                                                className="input100"
                                                                type="text"
                                                                name="email"
                                                                placeholder="Re-enter the new password .."
                                                                onChange={(e) => setConfirmPassowrd(e.target.value)}
                                                                required
                                                            />
                                                        </div>  
                                                        <div className="form-data sbm col-lg-12">
                                                            <button type="button" className="btn-primary" onClick={SendRestLink}>RESET</button>
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

export default ResetPassword