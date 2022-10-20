import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import bannerimage from "../../assets/images/inner-banner-2.jpg";
import prdt_img from "../../assets/images/popular-img-1.jpg";

export default function Packages() {
  useEffect(() => {
    document.title = "My Account";
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <section className="inner-banner with-liners">
        <div className="inner-caption">
          <div className="container">
            <div className="row">
              <div className="caption-details bnr-txt">
                <h1>My Profile</h1>
                <ul>
                  <li>
                    <Link to="/"> Home </Link>
                  </li>
                  <li> / </li>
                  <li> My Profile </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="filtering-lsts">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="common-heading cmg-img">
                <span className="alphabet"> </span>
                <h2>
                  {" "}
                  <span>MAKING </span>{" "}
                  <span className="yelow">gOOD hEALTH </span> a Priority!
                </h2>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="totl-pkglst">
                <div className="row">
                  <div className="col-3">
                    <div className="Products-factory-lsts">
                      <ul>
                        <li className="active">
                          <Link to="/">
                            {" "}
                            Neu<span className="difclr">Test</span>{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            {" "}
                            Neu<span className="difclr">Senior</span>{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            {" "}
                            Neu<span className="difclr">Cardio</span>{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            {" "}
                            Neu<span className="difclr">Diabetes </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            {" "}
                            Neu<span className="difclr">Women</span>{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            {" "}
                            Neu<span className="difclr">Fitness</span>{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            {" "}
                            Neu<span className="difclr">
                              Pre-Marital Check
                            </span>{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            {" "}
                            Covid-19 & Fever{" "}
                            <span className="difclr">Care</span>{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-9">
                    <div className="Products-factory-functions">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="pack-deils">
                            <div className="pck-img">
                              <img
                                src={prdt_img}
                                alt="call"
                                className="img-fluid"
                              />
                              <div className="ble-fnt">
                                60 <span>Tests</span>
                              </div>
                            </div>
                            <h3>NEU Express</h3>
                            <h4>
                              Cholesterol, Triglycerides, HDL, Direct LDL,
                              Calculated Total cholesterol to HDL-cholesterol
                              Ratio...<a href="/">+ More</a>
                            </h4>
                            <h5>
                              ₹180{" "}
                              <span className="strke">
                                <s>₹280</s>
                              </span>
                            </h5>
                            <h6>79 % off T&amp;C*</h6>
                            <p>
                              <a href="about-us">Book Now</a>
                            </p>
                          </div>
                        </div>

                        <div className="col-lg-4">
                          <div className="pack-deils">
                            <div className="pck-img">
                              <img
                                src={prdt_img}
                                alt="call"
                                className="img-fluid"
                              />
                              <div className="ble-fnt">
                                60 <span>Tests</span>
                              </div>
                            </div>
                            <h3>NEU Express</h3>
                            <h4>
                              Cholesterol, Triglycerides, HDL, Direct LDL,
                              Calculated Total cholesterol to HDL-cholesterol
                              Ratio...<a href="/">+ More</a>
                            </h4>
                            <h5>
                              ₹180{" "}
                              <span className="strke">
                                <s>₹280</s>
                              </span>
                            </h5>
                            <h6>79 % off T&amp;C*</h6>
                            <p>
                              <a href="about-us">Book Now</a>
                            </p>
                          </div>
                        </div>

                        <div className="col-lg-4">
                          <div className="pack-deils">
                            <div className="pck-img">
                              <img
                                src={prdt_img}
                                alt="call"
                                className="img-fluid"
                              />
                              <div className="ble-fnt">
                                60 <span>Tests</span>
                              </div>
                            </div>
                            <h3>NEU Express</h3>
                            <h4>
                              Cholesterol, Triglycerides, HDL, Direct LDL,
                              Calculated Total cholesterol to HDL-cholesterol
                              Ratio...<a href="/">+ More</a>
                            </h4>
                            <h5>
                              ₹180{" "}
                              <span className="strke">
                                <s>₹280</s>
                              </span>
                            </h5>
                            <h6>79 % off T&amp;C*</h6>
                            <p>
                              <a href="about-us">Book Now</a>
                            </p>
                          </div>
                        </div>

                        <div className="col-lg-4">
                          <div className="pack-deils">
                            <div className="pck-img">
                              <img
                                src={prdt_img}
                                alt="call"
                                className="img-fluid"
                              />
                              <div className="ble-fnt">
                                60 <span>Tests</span>
                              </div>
                            </div>
                            <h3>NEU Express</h3>
                            <h4>
                              Cholesterol, Triglycerides, HDL, Direct LDL,
                              Calculated Total cholesterol to HDL-cholesterol
                              Ratio...<a href="/">+ More</a>
                            </h4>
                            <h5>
                              ₹180{" "}
                              <span className="strke">
                                <s>₹280</s>
                              </span>
                            </h5>
                            <h6>79 % off T&amp;C*</h6>
                            <p>
                              <a href="about-us">Book Now</a>
                            </p>
                          </div>
                        </div>

                        <div className="col-lg-4">
                          <div className="pack-deils">
                            <div className="pck-img">
                              <img
                                src={prdt_img}
                                alt="call"
                                className="img-fluid"
                              />
                              <div className="ble-fnt">
                                60 <span>Tests</span>
                              </div>
                            </div>
                            <h3>NEU Express</h3>
                            <h4>
                              Cholesterol, Triglycerides, HDL, Direct LDL,
                              Calculated Total cholesterol to HDL-cholesterol
                              Ratio...<a href="/">+ More</a>
                            </h4>
                            <h5>
                              ₹180{" "}
                              <span className="strke">
                                <s>₹280</s>
                              </span>
                            </h5>
                            <h6>79 % off T&amp;C*</h6>
                            <p>
                              <a href="about-us">Book Now</a>
                            </p>
                          </div>
                        </div>

                        <div className="col-lg-4">
                          <div className="pack-deils">
                            <div className="pck-img">
                              <img
                                src={prdt_img}
                                alt="call"
                                className="img-fluid"
                              />
                              <div className="ble-fnt">
                                60 <span>Tests</span>
                              </div>
                            </div>
                            <h3>NEU Express</h3>
                            <h4>
                              Cholesterol, Triglycerides, HDL, Direct LDL,
                              Calculated Total cholesterol to HDL-cholesterol
                              Ratio...<a href="/">+ More</a>
                            </h4>
                            <h5>
                              ₹180{" "}
                              <span className="strke">
                                <s>₹280</s>
                              </span>
                            </h5>
                            <h6>79 % off T&amp;C*</h6>
                            <p>
                              <a href="about-us">Book Now</a>
                            </p>
                          </div>
                        </div>
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
