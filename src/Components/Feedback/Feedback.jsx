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
import { questions, slugify } from "../../utils";
import axios from "axios";

export default function Feedback() {
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
                    <li> Feedback B2B</li>
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
          <div className="row">
            <center className="mb-4">
              <div className="legacy-care">
                <div className="common-heading">
                  <h2>
                    We value <span className="yelow">your feedback</span>
                  </h2>
                </div>
                <p>
                  We strive to provide you with the best service possible, and your feedback is crucial for us to serve
                  you better. We kindly invite you to take a few minutes to fill out our feedback form. Your insights
                  will help us improve and ensure that we meet your expectations.
                </p>
                <p>Thank you for your time and for choosing Neuberg Anand. We look forward to hearing your thoughts!</p>
                <div className="cmn-buton">
                  <p>
                    <Link to='tel:18004251974'>Call Back</Link>
                  </p>
                </div>
              </div>
            </center>

            <div className="col-12">
              <div className="green-bg animated fadeInRight">
                <form onSubmit={handleSubmit(onSubmit)} className="row"> 
                  <div className="col-lg-4">
                    <div>
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

                      <div className="formdata">
                        <div className="mb-2">
                          <small className="text-light">Rate overall experience</small>
                        </div>
                        <ErrorMessage
                          errors={errors}
                          name="rating"
                          render={({ message }) => (
                            <small className="text-danger ml-2">
                              * {message}
                            </small>
                          )}
                        />
                        <div>
                          <label htmlFor="001" className="form-control mb-3">
                            <input id="001" type="radio" value={slugify('', 'BELOW EXPECTATION')} name="rating" {...register("rating", { required: "This is required." })} />
                            <span className="ml-2">BELOW EXPECTATION</span>
                          </label>
                          <label htmlFor="002" className="form-control mb-3">
                            <input id="002" type="radio" value={slugify('', 'MET EXPECTATION')} name="rating" {...register("rating", { required: "This is required." })} />
                            <span className="ml-2">MET EXPECTATION</span>
                          </label>
                          <label htmlFor="003" className="form-control mb-3">
                            <input id="003" type="radio" value={slugify('', 'EXCEEDED EXPECTATION')} name="rating" {...register("rating", { required: "This is required." })} />
                            <span className="ml-2">EXCEEDED EXPECTATION</span>
                          </label>
                        </div>
                      </div>
                      <div className="formdata">
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
                          className="form-control"
                          name="msg"
                          id="msg"
                          {...register("message", {
                            required: "This is required.",
                          })}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="bg-white rounded">
                      {questions.map((item, i) => (
                        <div className="row border-bottom rounded qa-row align-items-center  m-0 small" key={Math.random()}>
                          <div className="col-sm-6 p-0 my-2 my-sm-0 text-dark p-0"><b className="mr-1">{i + 1}.</b> <span>{item}</span></div>
                          <label forHtml={i + "QA"} className="col p-0 m-0"><input type="radio" value={1} {...register(slugify('QA_', item), { required: "This is required." })} name={slugify('QA_', item)} id={i + "QA"} className="mr-2" required />Yes</label>
                          <label forHtml={i + "QA"} className="col p-0 m-0"><input type="radio" value={0} {...register(slugify('QA_', item), { required: "This is required." })} name={slugify('QA_', item)} id={i + "QA"} className="mr-2" required />No</label>
                          <div className="col-sm-4 p-0 mt-2 mt-sm-0">
                            <textarea className="border w-100" maxLength="255"  {...register(slugify('QAC_', item))} placeholder="Comments ..." rows={1.5}></textarea>
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
          </div>
        </div>
      </section>
    </div>
  );
}