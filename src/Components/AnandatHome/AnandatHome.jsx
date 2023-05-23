import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bannerimage from "../../assets/images/inner-banner-4.webp";
import anandhome from "../../assets/images/anandathome.jpg"; 
import { useForm } from "react-hook-form";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import { FormResponse } from "../../Helpers/FormResponse";
import { CgSpinner } from 'react-icons/cg';
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import axios from "axios";

export default function AnandatHome() {
  const [open, setOpen] = useState(true)
  const [Loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required(),
        mobile: Yup.string().matches(/^[6-9]\d{9}$/).required(),
        message: Yup.string().required()
      })
    )
  })
  const contactUsFrom = (data) => {
    setLoading(true)
    data.page = 'ANAND AT HOME'
    axios.post(API_URL.REACH_US, data).then((res) => {
      // FormResponse()
      navigate("/anand-at-home-thank-you");
      setLoading(false)
      reset()
      setOpen(!open)
    })
  }
  useEffect(() => {
    document.title = "COVID testing for employees";
    window.scroll(0, 0);
  }, []);
  return (
    <div> 

      <section className="abt-secton forumn-frm mt-8">
        <div className="container">
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-7">
              <div className="common-heading">
                <h2>
                  <span className="inlne">Why choose </span>
                  Anand@home?
                </h2>
                <img src={anandhome} alt="call" className="img-fluid" />
                <br />
                <br />
                <div className="common-para1 drk detilos-expl indication-details p-0">
                  <ul>
                    <li>Sample collection done right at your doorstep</li>
                    <li>Easy/multiple booking channels- Telephone, Whatsapp, Email, Live Chat, Online Appointment Form</li>
                    <li>Home Care Kit: A complete sample collection kit, sealed for one time use only</li>
                    <li>Since 1974, Ensuring Care in Healthcare, putting customer convenience first</li>
                  </ul>
                  <br />
                  <b>With Anand@home and the Home Care Kit, we’re bringing the finest healthcare experience right to your doorstep.</b>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5 mb-5">
              <div className="green-bg ps-rel franc-isemed animated fadeInRight">
                <h4 className="mb-3 text-center text-white">Enquire Now</h4>
                <form onSubmit={handleSubmit(contactUsFrom)}>
                  <div className="formdata">
                    {errors?.name ? <small className='text-danger'>{errors?.name?.message}</small> : ''}
                    <input {...register('name')} type="text" placeholder="Enter Your Name" className='form-control' />
                  </div>
                  {/* <div className="formdata">
                    {errors?.email ? <small className='text-danger'>{errors?.email?.message}</small> : ''}
                    <input {...register('email')} type="email" placeholder="Enter Your Email ID" className='form-control' />
                  </div> */}
                  <div className="formdata">
                    {errors?.mobile ? <small className='text-danger'>{'Mobile is a invalid field'}</small> : ''}
                    <input {...register('mobile')} type="tel" placeholder="Enter Your Mobile Number" className='form-control' />
                  </div>
                  <h6 className="text-light">How would you like us to connect with you?</h6>
                  {errors?.message ? <div><small className='text-danger'>{'Choose any one!'}</small></div> : ''}
                  <div className="d-flex input-box">
                    <p>
                      <input type="radio" id="test1" value="Contact me on call" name="radio-group"  {...register('message')}/>
                      <label for="test1">Call</label>
                    </p>
                    <p>
                      <input type="radio" id="test2" value="Contact me on Whatsapp" name="radio-group"  {...register('message')}/>
                      <label for="test2">Whatsapp</label>
                    </p>
                    <p>
                      <input type="radio" id="test3" value="Contact me on Email" name="radio-group"  {...register('message')}/>
                      <label for="test3">Email</label>
                    </p>
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
          </div>
        </div>
      </section>
    </div>
  );
}
