import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import AuthUser, { PutUser } from "../../Helpers/AuthUser";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setLoading } from "../../Redux/Actions/LoaderAction";
import { setAuthUser } from "../../Redux/Actions/TestAction";
import { useForm } from "react-hook-form";  
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

export default function Login() {
  
  let navigate = useNavigate();
  const dispatch = useDispatch()
  
  const formSchema = Yup.object().shape({
    name           : Yup.string().required(),
    moblie         : Yup.string().required(),
    email          : Yup.string().required(),
    password       : Yup.string().required().min(3),
    confirmPassword: Yup.string().required().oneOf([Yup.ref('password')], 'Passwords does not match'),
  })
  const formOptions = { resolver: yupResolver(formSchema) }
  const { register, handleSubmit, reset, formState } = useForm(formOptions)
  const { errors } = formState
  function RegisterNow(data) {
    dispatch(setLoading(true))
    axios.post(API_URL.REGISTER, data).then((response) => {
      dispatch(setLoading(false))
      if (response.data.status) {
        dispatch(setLoading(false))
        PutUser({
          email: response.data.data.email,
          id: response.data.data.id,
          name: response.data.data.name
        })
        dispatch(setAuthUser(response.data.data))
        if (AuthUser()) {
          navigate("/my-account");
        }
        toast.success('Registration Success!')
      } else {
        toast.error(response.data.message)
      }
    })
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
                    <form onSubmit={handleSubmit(RegisterNow)}>
                      <div className="frm-fields row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <div className="common-heading">
                            <h2>Register <span> Here! </span></h2>
                          </div>
                          <div className="row">
                            <div className="form-data col-lg-12">
                              <input className={`input1001 ${errors.name && 'border-danger'}`} type="text" placeholder="Name *" {...register("name")} /> 
                            </div>
                            <div className="form-data col-lg-12">
                              <input className={`input1001 ${errors.moblie && 'border-danger'}`} type="text" placeholder="Moblie *" {...register("moblie")} />
                            </div>
                            <div className="form-data col-lg-12">
                              <input className={`input1001 ${errors.email && 'border-danger'}`} type="email" placeholder="E-mail *" {...register("email")} />
                            </div>
                            <div className="form-data col-lg-12">
                              <input className={`input1001 ${errors.password && 'border-danger'}`} type="password" placeholder="Password *" {...register("password")} />
                            </div>
                            <div className="form-data col-lg-12">
                              <input className={`input1001 ${errors.confirmPassword && 'border-danger'}`} type="password"  {...register("confirmPassword")} placeholder="Re-Enter your Password *" />
                            </div>
                            <div className="form-data sbm col-lg-12">
                              <input type="submit" name="submit" value="REGISTER" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
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
