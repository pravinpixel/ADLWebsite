import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import bannerimage from "../../assets/images/inner-banner-17.webp";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import { CareerResponse } from "../../Helpers/FormResponse";
import { useDispatch } from "react-redux";
import { setLoading } from "../../Redux/Actions/LoaderAction";

export default function Career() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(setLoading(true));
    var formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("email", data.email);
    formdata.append("mobile", data.mobile);
    formdata.append("file", data.chooseFile[0], data.chooseFile[0].name);
    // formdata.append("message", data.message);
    formdata.append("job_id", "1");

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(API_URL.JOB_APPLY, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        dispatch(setLoading(false));
        reset();
        CareerResponse();
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    document.title = "Senior Resident/Pathologist";
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <section className="inner-banner">
        <img src={bannerimage} alt="call" className="img-fluid" />
        <div className="inner-caption">
          <div className="container">
            <div className="row">
              <div className="caption-details bnr-txt">
                <ul>
                  <li>
                    <Link to="/"> Home </Link>
                  </li>
                  <li> / </li>
                  <li>
                    {" "}
                    <Link to="/reach-us"> Reach us </Link>
                  </li>
                  <li> / </li>
                  <li>
                    {" "}
                    <Link to="/careers"> Careers </Link>
                  </li>
                  <li> / </li>
                  <li> Senior Resident/Pathologist </li>
                </ul>
                <h1>
                  Your passion, <br />
                  our prospect! Join us!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="abt-secton forumn-frm carr-eer">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="common-heading">
                <h2 className="mb-0">
                  Senior Resident/Pathologist <br />
                  <span className="inlne">HR/MH 21-08</span>
                </h2>
                <div className="carere-options">
                  <h4>
                    <i className="fa fa-user" aria-hidden="true"></i> Job Title{" "}
                    <span> Senior Resident/Pathologist </span>
                  </h4>
                  <h4>
                    <i className="fa fa-id-card-o" aria-hidden="true"></i> Job
                    Code <span> HR/MH 21-08 </span>
                  </h4>
                  <h4>
                    <i className="fa fa-map-marker" aria-hidden="true"></i> Job
                    Location <span> Bengaluru </span>
                  </h4>
                  <h5>Responsibilities:</h5>
                  <ul>
                    <li>
                      Manages overall go-to-market strategy for syringe pump &
                      Infusion Pump product lines, including overall commercial
                      planning, key marketing initiatives, and financial results
                      for the product line.
                    </li>
                  </ul>
                  <h5>Department:</h5>
                  <p>Cytogenetics</p>
                  <h5>Qualification:</h5>
                  <p>MBBS, MD Pathology/ MBBS, MD Anatomy</p>
                  <h5>Experience:</h5>
                  <p>Fresher or 2-3 years</p>
                  <h5>No Of Requirement:</h5>
                  <p>1</p>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-5 col-lg-5">
              <div className="green-bg ps-rel franc-isemed animated fadeInRight">
                <h4 className="mb-3 text-center text-white">
                  Apply for this Position
                </h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="formdata">
                    <small className="text-light">Name</small>
                    <ErrorMessage
                      errors={errors}
                      name="name"
                      render={({ message }) => (
                        <small className="text-danger ml-2">* {message}</small>
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
                        <small className="text-danger ml-2">* {message}</small>
                      )}
                    />
                    <input
                      className="form-control jsrequired"
                      type="email"
                      name="email"
                      {...register("email", {
                        required: "This is required.",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          message: "Invalid email address!",
                        },
                      })}
                    />
                  </div>
                  <div className="formdata">
                    <small className="text-light">Mobile</small>
                    <ErrorMessage
                      errors={errors}
                      name="mobile"
                      render={({ message }) => (
                        <small className="text-danger ml-2">* {message}</small>
                      )}
                    />
                    <input
                      className="form-control jsrequired"
                      type="number"
                      name="mobile"
                      {...register("mobile", {
                        required: "This is required.",
                        pattern: {
                          value:
                            /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                          message: "Not a valid Phone Number",
                        },
                      })}
                    />
                  </div>
                  <div className="formdata">
                    <small className="text-light">Upload Resume</small>
                    <ErrorMessage
                      errors={errors}
                      name="chooseFile"
                      render={({ message }) => (
                        <small className="text-danger ml-2">* {message}</small>
                      )}
                    />
                    <input
                      className="form-control jsrequired"
                      type="file"
                      name="chooseFile"
                      {...register("chooseFile", {
                        required: "This is required.",
                      })}
                    />
                  </div>
                  <div className="formdata">
                    <small className="text-light">Message</small>
                    <ErrorMessage
                      errors={errors}
                      name="message"
                      render={({ message }) => (
                        <small className="text-danger ml-2">* {message}</small>
                      )}
                    />
                    <textarea
                      className="form-control"
                      name="message"
                      id="msg"
                      {...register("message", {
                        required: "This is required.",
                      })}
                    ></textarea>
                  </div>

                  <div className="formdata">
                    <input type="submit" name="submit" value="Apply Now" />
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
