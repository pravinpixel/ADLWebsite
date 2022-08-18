import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Sliders from "react-slick";
import {
  removeTestDetails,
  setTestCartList,
  setTestDetails,
} from "../../Redux/Actions/TestAction";
import { API_URL } from "../../Redux/Constant/ApiRoute"; 
import { AddToCartList, Loading } from "../../Helpers";
import TestCard from "./TestCardComponent";
import { Link } from "react-router-dom";
import testIcon1 from "../../assets/images/testing-icon-1.png";
import testIcon2 from "../../assets/images/testing-icon-2.png";
import testIcon3 from "../../assets/images/testing-icon-3.png";
import testIcon4 from "../../assets/images/testing-icon-4.png";
import CartBtn from "./CartBtn";

export default function TestDetails() {
  const { TestId } = useParams();
  const dispatch = useDispatch();
  const testDetails = useSelector((state) => state.TestDetails.TestDetails);

  const getTestDetails = async () => {
    const response = await axios
      .get(API_URL.TEST_DETAILS + TestId)
      .catch((err) => console.log(err));
    dispatch(setTestDetails(response.data.data));
  };

  useEffect(() => {
    // return () => {
      if (TestId && TestId !== "") getTestDetails();
        dispatch(removeTestDetails());
      // };
  }, []);

  const addTestToCart = (testDetails) => {
    AddToCartList(testDetails)
    dispatch(setTestCartList(JSON.parse(localStorage.getItem('CartTestList'))));
  };

  var settings = {
    slidesToScroll: 1,
    infinite: true,
    slidesToShow: 4,
    focusOnSelect: false,
    autoplay: true,
    dots: false,
    arrows: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
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
          slidesToShow: 1, 
        },
      },
    ],
  };

  return (
    <>
      {testDetails !== undefined ? (
        <>
          <section className="comon-testdetail-banner">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="bnr-txt text-left">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li> / </li>
                      <li>
                        <Link to="/for-patient">Book a Test</Link>
                      </li>
                      <li> / </li>
                      <li>
                        <Link to="">Angiotensin Converting Enzyme</Link>
                      </li>
                    </ul>
                    <h1>
                      Book Lab Tests <span>Anywhere - Anytime</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="testing-details text-left">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="commentestng-heads">
                    <h2>
                      <span>Test ID - {testDetails.test.TestId}</span>
                      {testDetails.test.TestName}
                    </h2>
                  </div>
                  <div className="testng-details">
                    <ul>
                      <li>
                        <img src={testIcon1} alt="call" className="img-fluid" />
                        <span>Basic Instruction </span>
                        {testDetails.test.BasicInstruction}
                      </li>
                      <li>
                        <img src={testIcon2} alt="call" className="img-fluid" />
                        <span>Test Shedule</span>
                        {testDetails.test.TestSchedule}
                      </li>
                      <li className="colap-seing">
                        <img src={testIcon3} alt="call" className="img-fluid" />
                        <h5>
                          &#8377;{testDetails.test.TestPrice}
                          <span className="strke ml-2">
                            <s>&#8377;{testDetails.test.TestPrice + 280}</s>
                          </span>
                          <span className="flag-option">
                            <p>10 % off</p>
                          </span>
                        </h5>
                      </li>
                      <li>
                        <img src={testIcon4} alt="call" className="img-fluid" />
                        This test is
                        {testDetails.test.HomeCollection === "N" ? "Not" : null}
                        eligible for Home Collection.
                      </li>
                    </ul>
                  </div>
                  <div className="case">
                    <p>
                      <CartBtn getData={getTestDetails} testData={testDetails.test} />
                      <Link className="bg-trsnper" to="/">
                        Book Home Collection
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="col-lg-5">
                  {
                    testDetails.sub_test.length !== 0 ? 
                      <div className="availab-lity">
                        <h4>Available Sub Tests </h4>
                        <ul>
                          {
                            testDetails.sub_test.map((subTest)=> (
                              <li>{subTest.SubTestName} (Chromogenic)</li>
                            ))
                          }
                        </ul>
                      </div>
                    : null
                  }
                  
                </div>
              </div>
              <div className="special-instruction">
                <h3>Special Instructions</h3>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      For Patient
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      For Corporates
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="contact-tab"
                      data-toggle="tab"
                      href="#contact"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      For Doctors
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="detilos-expl">
                      <ul>
                        <li>
                          a) Samples are stable for 1 week refrigerated at 2-8 0
                          C.
                        </li>
                        <li>
                          b) Frozen sample is stable for several months.
                          _Interfering substances:
                          <br />
                          ACE activity is inhibited by EDTA, Heavy metal ions,
                          Captopril. ACE activity should mainly be used to
                          monitor activity of disease and not for primary
                          diagnosis. However, high levels are found in about 85%
                          cases with active pulmonary sarcoidosis.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    ..2.
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    ...3
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="diagnostics most-poptst text-left">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="common-heading">
                    <h2>
                      <span>Other related </span>Tests
                    </h2>
                  </div>
                  <Sliders {...settings} className="topbooked-cases">
                    <TestCard />
                    <TestCard />
                    <TestCard />
                    <TestCard />
                    <TestCard />
                    <TestCard />
                    <TestCard />
                    <TestCard />
                    <TestCard />
                    <TestCard />
                    <TestCard />
                    <TestCard />
                    <TestCard />
                    <TestCard />
                    <TestCard />
                    <TestCard />
                  </Sliders>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
