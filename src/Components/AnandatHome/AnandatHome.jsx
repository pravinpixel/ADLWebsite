import React, { useEffect } from "react";
import Sliders from "react-slick";
import { Link } from "react-router-dom";
import bannerimage from "../../assets/images/inner-banner-9.webp";
import anandhome from "../../assets/images/anandathome.jpg";
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

export default function AnandatHome() {
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
            <div className="col">
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
                  <li> Anand @ Home </li>
                </ul>
                <h1>
                Care Made Convenient
                <br /> Sample Collection at your Doorstep
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

            <div className="col-sm-12 col-md-12 col-lg-5">
              <div className="green-bg ps-rel franc-isemed animated fadeInRight">
                <h4 className="mb-3 text-center text-white">Enquire Now</h4> 
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
                      type="text"
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
                  
                  <h6 className="text-light">How would you like us to connect with you?</h6>
                  <div className="d-flex input-box">
                  <p>
                  <input type="radio" id="test1" name="radio-group" />
                  <label for="test1">Call</label>
                  </p>
                  <p>
                  <input type="radio" id="test2" name="radio-group" />
                  <label for="test2">Whatsapp</label>
                  </p>
                  <p>
                  <input type="radio" id="test3" name="radio-group" />
                  <label for="test3">Email</label>
                  </p>   
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
