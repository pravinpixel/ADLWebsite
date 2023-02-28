import axios from "axios";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { API_URL } from "../Redux/Constant/ApiRoute";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { CgSpinner } from 'react-icons/cg';
import { FormResponse } from '../Helpers/FormResponse';

function FloatingForm() {
    const [open, setOpen] = useState(true)
    const [Loading, setLoading] = useState(false)
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(
            Yup.object().shape({
                name: Yup.string().required(),
                email: Yup.string(),
                mobile: Yup.string().matches(/^[6-9]\d{9}$/).required(),
            })
        )
    })
    const contactUsFrom = (data) => {
        setLoading(true)
        data.email = 'anandlab@gmail.com'
        axios.post(API_URL.REACH_US, data).then((res) => {
            FormResponse()
            setLoading(false)
            reset()
            setOpen(!open)
        })
    }

    return (
        <div className="womensdayawrap">
            <div className={open == true ? 'womendaycontent ' : 'womendaycontent conthgt'}>
                <div className="green-bg animated fadeInRight">
                    <h4 className="mb-3 text-white">Get in Touch</h4>
                    <form onSubmit={handleSubmit(contactUsFrom)}>
                        <div className="formdata">
                            {errors?.name ? <small className='text-danger'>{errors?.name?.message}</small> : ''}
                            <input {...register('name')} type="text" placeholder="Enter Your Name" className='form-control' />
                        </div> 
                        <div className="formdata">
                            {errors?.mobile ? <small className='text-danger'>{'mobile is a required field'}</small> : ''}
                            <input {...register('mobile')} type="tel" placeholder="Enter Your Mobile Number" className='form-control' />
                        </div>
                        <div className="formdata">
                            <input {...register('email')} type="email" placeholder="Enter Your Email ID" className='form-control' />
                        </div>
                        <div className="formdata">
                            {
                                Loading === true
                                    ?
                                    <button type="submit" disabled className="btn-primary btn-flx-full">
                                        <CgSpinner className="fa-spin mr-2" />
                                        Loading ...
                                    </button>
                                    :
                                    <button type="submit" className="btn-primary btn-flx-full">
                                        Submit
                                    </button>
                            }
                        </div>
                    </form>
                </div>
            </div>
            <div className="womensdayawrapsec" onClick={() => setOpen(!open)} >
                <span>
                    <img src={require('../../src/assets/images/call-girl.png')} className="img-responsive" alt="Call" />
                    <div className="mob-rlce">Reach Us</div>
                </span>
                <span>
                    <h2>Callback</h2>
                    <p>Click here to reach us</p>
                </span>
                {open ? <FaPlus /> : <FaMinus />}
            </div>
        </div>
    )
}

export default FloatingForm