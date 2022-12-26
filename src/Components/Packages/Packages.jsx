import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import bannerimage from "../../assets/images/inner-banner-2.jpg";
import prdt_img from "../../assets/images/popular-img-1.jpg";

export default function Packages() {
  useEffect(() => {
    document.title = "Our Packages";
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
                  <li> Patients </li>
                  <li> / </li>
                  <li> Packages </li>
                </ul>
                <h1>
                  Health packages for<br></br> you and your family
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="filtering-packages filtering-lsts">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="common-heading">
                <h2>
                  <span>MAKING </span>
                  <span className="yelow">gOOD hEALTH </span> a Priority!
                </h2>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="totl-pkglst">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div className="filter-lists Products-factory-lsts">
                      <h3>Filters</h3>
                      <ul>
                        <h4>Gender</h4>
                        <li>
                          <label className="cstm-chkbx">
                            Male
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </li>
                        <li>
                          <label className="cstm-chkbx">
                            Female
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </li>
                        <li>
                          <label className="cstm-chkbx">
                            Others
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </li>
                      </ul>
                      <ul>
                        <h4>Conditions</h4>
                        <li>
                          <label className="cstm-chkbx">
                            Condition - 1
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </li>
                        <li>
                          <label className="cstm-chkbx">
                            Condition - 2
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </li>
                        <li>
                          <label className="cstm-chkbx">
                            Condition - 3
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </li>
                        <li>
                          <label className="cstm-chkbx">
                            Condition - 4
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </li>
                        <li>
                          <label className="cstm-chkbx">
                            Condition - 5
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </li>
                      </ul>
                      <ul>
                        <h4>Organs</h4>
                        <li>
                          <label className="cstm-chkbx">
                            Organ - 1
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </li>
                        <li>
                          <label className="cstm-chkbx">
                            Organ - 2
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </li>
                        <li>
                          <label className="cstm-chkbx">
                            Organ - 3
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </li>
                        <li>
                          <label className="cstm-chkbx">
                            Organ - 4
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </li>
                        <li>
                          <label className="cstm-chkbx">
                            Organ - 5
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </li>
                      </ul>
                      <ul>
                        <h4>Price Range</h4>
                        <li>
                          <label className="cstm-chkbx">
                            Low to High
                            <input type="radio" name="price_range" />
                            <span className="checkmark"></span>
                          </label>
                        </li>
                        <li>
                          <label className="cstm-chkbx">
                             High to low
                            <input type="radio" name="price_range" />
                            <span className="checkmark"></span>
                          </label>
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
                              ₹180
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
                              ₹180
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
                              ₹180
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
                              ₹180
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
                              ₹180
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
                              ₹180
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
