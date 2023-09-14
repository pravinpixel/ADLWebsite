import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import bannerimage from "../../assets/images/inner-banner-14.webp";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import { FormResponse } from "../../Helpers/FormResponse";
import { setLoading } from "../../Redux/Actions/LoaderAction";
import { useDispatch } from "react-redux";
import { feedbacks, questions, slugify } from "../../utils";
import axios from "axios";

export default function FeedbackB2B() {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const dispatch = useDispatch()

    const onSubmit = (data) => {
        dispatch(setLoading(true))
        data['page_url'] = window.location.href
        axios.post(API_URL.FEEDBACKS, data).then(res => {
            if (res.data.Errors === false) {
                dispatch(setLoading(false))
                reset()
                FormResponse()
            }
        }).catch(error => console.log('error', error));
    }

    useEffect(() => {
        document.title = "Feedback";
        window.scroll(0, 0);
    }, []);
    return (
        <div>
            <section className="inner-banner">
                <img src={bannerimage} alt="call" className="img-fluid" />
                <div className="inner-caption">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="caption-details bnr-txt">
                                    <ul>
                                        <li>
                                            <Link to="/"> Home </Link>
                                        </li>
                                        <li> / </li>
                                        <li> Patients </li>
                                        <li> / </li>
                                        <li> Feedback  </li>
                                    </ul>
                                    <h1>
                                        Service with commitment<br></br> and competence!
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="abt-secton forumn-frm">
                <div className="container">
                    <center className="legacy-care mb-4">
                        <div className="common-heading">
                            <h2>
                                We value <span className="yelow">your feedback</span>
                            </h2>
                        </div>
                        <p>
                            We strive to provide you with the best service possible, and your feedback is crucial for us to serve you better.
                            We kindly invite you to take a few minutes to fill out our feedback form.
                            Your insights will help us improve and ensure that we meet your expectations.
                        </p>
                        <p>Thank you for your time and for choosing Neuberg Anand. We look forward to hearing your thoughts!</p>
                        <div className="cmn-buton">
                            <p>
                                <Link to='tel:18004251974'>Call Back</Link>
                                <Link to='/reach-us' className="bg-trsnper ylw"> Enquire Now</Link>
                            </p>
                        </div>
                    </center>
                    <hr />
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} className="row align-items-center">
                            <div className="col-lg-4 h-100">
                                <div className="green-bg animated fadeInRight h-100">
                                    <div className="formdata">
                                        <small className="text-light">Name</small>
                                        <ErrorMessage
                                            errors={errors}
                                            name="name"
                                            render={({ message }) => (
                                                <small className="text-danger ml-2">
                                                    * {message}
                                                </small>
                                            )}
                                        />
                                        <input
                                            className="form-control jsrequired"
                                            type="text"
                                            name="name"
                                            {...register("name", {
                                                required: "This is required.",
                                            })}
                                        />
                                    </div>
                                    <div className="formdata">
                                        <small className="text-light">Email</small>
                                        <ErrorMessage
                                            errors={errors}
                                            name="email"
                                            render={({ message }) => (
                                                <small className="text-danger ml-2">
                                                    * {message}
                                                </small>
                                            )}
                                        />
                                        <input
                                            className="form-control jsrequired"
                                            type="email"
                                            name="email"
                                            {...register("email", {
                                                required: "This is required.",
                                                pattern: {
                                                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                                    message: 'Invalid email address!'
                                                }
                                            })}
                                        />
                                    </div>
                                    <div className="formdata">
                                        <small className="text-light">Mobile</small>
                                        <ErrorMessage
                                            errors={errors}
                                            name="mobile"
                                            render={({ message }) => (
                                                <small className="text-danger ml-2">
                                                    * {message}
                                                </small>
                                            )}
                                        />
                                        <input
                                            className="form-control jsrequired"
                                            type="tel"
                                            name="mobile"
                                            {...register("mobile", {
                                                required: "This is required.",
                                                pattern: {
                                                    value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                                                    message: 'Not a valid Phone Number'
                                                }
                                            })}
                                        />
                                    </div>
                                    <div className="formdata">
                                        <small className="text-light">Location</small>
                                        <ErrorMessage
                                            errors={errors}
                                            name="location"
                                            render={({ message }) => (
                                                <small className="text-danger ml-2">
                                                    * {message}
                                                </small>
                                            )}
                                        />
                                        <input
                                            className="form-control jsrequired"
                                            type="text"
                                            name="location"
                                            {...register("location", {
                                                required: "This is required.",
                                            })}
                                        />
                                    </div>
                                    <div className="formdata m-0">
                                        <small className="text-light">Remarks</small>
                                        <ErrorMessage
                                            errors={errors}
                                            name="message"
                                            render={({ message }) => (
                                                <small className="text-danger ml-2">
                                                    * {message}
                                                </small>
                                            )}
                                        />
                                        <textarea
                                            className="form-control m-0"
                                            name="msg"
                                            id="msg"
                                            {...register("message", {
                                                required: "This is required.",
                                            })}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 h-100">
                                <div className="green-bg pb-0 px-4 pt-4 h-100">
                                    {feedbacks.map((item, i) => (
                                        <div className="pb-4" key={Math.random()}>
                                            <div className="row border bg-white rounded align-items-center m-0" >
                                                <div className="col-sm-12 text-dark p-2 fw-bold d-flex border-bottom"><b className="mr-1">{i + 1}.</b> <span>{item}</span></div>
                                                <label forHtml={i + "QA"} className="small rounded text-secondary qa-row col-sm-4 d-flex m-0"><input type="radio" {...register(slugify('QA_', item), { required: "This is required." })} name={slugify('QA_', item)} id={i + "QA"} className="mr-2" required value="Exceeding Expectations" />Exceeding Expectations</label>
                                                <label forHtml={i + "QA"} className="small rounded text-secondary qa-row col-sm-4 d-flex m-0"><input type="radio" {...register(slugify('QA_', item), { required: "This is required." })} name={slugify('QA_', item)} id={i + "QA"} className="mr-2" required value="Meet Expectations" />Meet Expectations</label>
                                                <label forHtml={i + "QA"} className="small rounded text-secondary qa-row col-sm-4 d-flex m-0"><input type="radio" {...register(slugify('QA_', item), { required: "This is required." })} name={slugify('QA_', item)} id={i + "QA"} className="mr-2" required value="Below Expectations" />Below Expectations</label>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="text-center">
                                    <input
                                        type="submit"
                                        name="submit"
                                        value="Submit"
                                        className="px-5 btn-primary border border-light mt-3"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}