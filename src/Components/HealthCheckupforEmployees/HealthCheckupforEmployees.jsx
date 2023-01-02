import React, { useEffect } from "react";
import Sliders from "react-slick";
import { Link } from "react-router-dom";
import bannerimage from "../../assets/images/inner-banner-17.webp";
import helthchkp from "../../assets/images/helthchkp.jpg";
import preicn1 from "../../assets/images/pre-1.png";
import preicn2 from "../../assets/images/pre-2.png";
import preicn3 from "../../assets/images/pre-3.png";
import preicn4 from "../../assets/images/pre-4.png";
import preicn5 from "../../assets/images/pre-5.png";
import preicn6 from "../../assets/images/pre-6.png";
import preicn7 from "../../assets/images/pre-7.png";
import preicn8 from "../../assets/images/pre-8.png";
import preicn9 from "../../assets/images/pre-9.png";
import preicn10 from "../../assets/images/pre-10.png";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import { FormResponse } from "../../Helpers/FormResponse";
import { useDispatch } from "react-redux";
import { setLoading } from "../../Redux/Actions/LoaderAction";

export default function HealthCheckupforEmployees() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    dispatch(setLoading(true))

    var formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("email", data.email);
    formdata.append("mobile", data.mobile);
    formdata.append("company_name", data.company_name);
    formdata.append("designation", data.designation);
    formdata.append("address", data.address);
    formdata.append("message", data.message);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(API_URL.HEALTHCHECKUP_FOR_EMPLOYEES, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.Errors === false) {
          reset();
          dispatch(setLoading(false))
          FormResponse()
        }
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    document.title = "COVID testing for employees";
    window.scroll(0, 0);
  }, []);

  var consumeing = {
    slidesToScroll: 1,
    infinite: true,
    slidesToShow: 3,
    focusOnSelect: true,
    autoplay: true,
    dots: true,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

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
                  <li> Health Checkup for Employees </li>
                </ul>
                <h1>
                  Intelligence in pattern recognition
                  <br /> for autoimmune diagnosis
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="abt-secton forumn-frm">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="common-heading">
                <h2>
                  Pre-Employment and Annual{" "}
                  <span className="inlne">Health Check-Ups </span>
                </h2>
                <img src={helthchkp} alt="call" className="img-fluid" />
                <br />
                <br />
                <p>
                  We are looking for Partners who can grow with us and help us
                  expand our reach to offer state of the art diagnostic services
                  available across the country. Today Anand Diagnostic
                  Laboratory is a leading diagnostic player with over 100+
                  clinical laboratories and 1500+ collection centers across
                  India. We invite you to be a franchisee and be part of this
                  growth story.
                </p>
                <p>
                  An association with us offers an ideal environment and
                  platform for a partner to be part of the growing Indian
                  healthcare industry. We offer exciting opportunities to
                  enthusiastic individuals with a strong business acumen and
                  interest in replicating the Anand Diagnostic Laboratory
                  business model successfully in their locality.
                </p>
                <br />
              </div>
              <div className="common-heading">
                <h2 className="mb-0">Packages we offer</h2>
                <Sliders {...consumeing} className="consumeing">
                  <div className="box-cos">
                    <img src={preicn1} alt="" className="img-fluid" />
                    <h4>
                      Basic Health <br></br> Check-up
                    </h4>
                  </div>
                  <div className="box-cos">
                    <img src={preicn2} alt="" className="img-fluid" />
                    <h4>
                      Executive/master<br></br> Health Check-up
                    </h4>
                  </div>
                  <div className="box-cos">
                    <img src={preicn3} alt="" className="img-fluid" />
                    <h4>
                      Check-up <span>(Below 12 years of age)</span>
                    </h4>
                  </div>
                  <div className="box-cos">
                    <img src={preicn4} alt="" className="img-fluid" />
                    <h4>
                      Pre-manal <br></br>Health Ceckup
                    </h4>
                  </div>
                  <div className="box-cos">
                    <img src={preicn5} alt="" className="img-fluid" />
                    <h4>
                      Bone <br></br>Health Package
                    </h4>
                  </div>
                  <div className="box-cos">
                    <img src={preicn6} alt="" className="img-fluid" />
                    <h4>
                      Senior citizen <br></br> Health Check-up
                    </h4>
                  </div>
                  <div className="box-cos">
                    <img src={preicn7} alt="" className="img-fluid" />
                    <h4>
                      Basic Health <br></br> Check-up
                    </h4>
                  </div>
                  <div className="box-cos">
                    <img src={preicn8} alt="" className="img-fluid" />
                    <h4>
                      Executive/master<br></br> Health Check-up
                    </h4>
                  </div>
                  <div className="box-cos">
                    <img src={preicn9} alt="" className="img-fluid" />
                    <h4>
                      Check-up <span>(Below 12 years of age)</span>
                    </h4>
                  </div>
                  <div className="box-cos">
                    <img src={preicn10} alt="" className="img-fluid" />
                    <h4>
                      Pre-manal <br></br>Health Ceckup
                    </h4>
                  </div>
                </Sliders>
              </div>
            </div>

            <div className="col-sm-12 col-md-5 col-lg-5">
              <div className="green-bg ps-rel franc-isemed animated fadeInRight">
                <h4 className="mb-3 text-center text-white">Reach Us</h4>
                <h5 className="mb-3 text-left text-yellow">Personal Details</h5>
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
                    <small className="text-light">Designation</small>
                    <ErrorMessage
                      errors={errors}
                      name="designation"
                      render={({ message }) => (
                        <small className="text-danger ml-2">* {message}</small>
                      )}
                    />
                    <input
                      className="form-control jsrequired"
                      type="text"
                      name="designation"
                      {...register("designation", {
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
                      name="msg"
                      id="msg"
                      {...register("message", {
                        required: "This is required.",
                      })}
                    ></textarea>
                  </div>
                  <h5 className="mb-3 text-left text-yellow">
                    Company Details
                  </h5>
                  <div className="formdata">
                    <small className="text-light">Company Name</small>
                    <ErrorMessage
                      errors={errors}
                      name="company_name"
                      render={({ message }) => (
                        <small className="text-danger ml-2">* {message}</small>
                      )}
                    />
                    <input
                      className="form-control jsrequired"
                      type="text"
                      name="company_name"
                      {...register("company_name", {
                        required: "This is required.",
                      })}
                    />
                  </div>
                  <div className="formdata">
                    <small className="text-light">Address</small>
                    <ErrorMessage
                      errors={errors}
                      name="address"
                      render={({ message }) => (
                        <small className="text-danger ml-2">* {message}</small>
                      )}
                    />
                    <textarea
                      className="form-control"
                      name="address"
                      id="msg"
                      {...register("message", {
                        required: "This is required.",
                      })}
                    ></textarea>
                  </div>
                  <div className="formdata">
                    <input
                      type="submit"
                      name="submit"
                      value="Submit"
                      onClick="submit_contact();"
                    />
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
