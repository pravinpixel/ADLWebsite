import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import bannerimage from "../../assets/images/inner-banner-2.jpg";
import axios from "axios";
import { API_URL } from "../../Redux/Constant/ApiRoute";

export default function FindLab() {
  const location = useLocation();
  const [Lab, setLab] = useState(null);
  var apiPath;

  const getLocation = () => {
    if (location.state !== null) { 
      apiPath = `${API_URL.GET_LAB_LOCATION}/${location.state.LocationId}`;
    } else {
      apiPath = API_URL.GET_LAB_LOCATION;
    }
    axios.get(apiPath).then((response) => {
      setLab(response.data);
    });
  };
  useEffect(() => {
    getLocation();
    document.title = "FindLab";
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
                  <li> Find our Lab </li>
                </ul>
                <h1>
                  Can be started over night, But It<br></br> takes years to
                  build an Institution.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="people-function phsiyo-therphy">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="common-heading">
                <h2>
               
                  <span className="inlne">Our</span> {Lab&&Object.entries(Lab)[0][0]} Locations
                </h2>
              </div>
              <p>
                Anand Diagnostic Laboratory strives for excellence in patient
                care with its highly efficient and accuracy-oriented processes.
                Our advanced state-of-the-art technology helps the patients in
                achieving a detailed and progressive inference. Here is a list
                of our extensive range of services.
              </p>
            </div>  
            {Lab !== null
              ? Object.entries(Lab)[0][1].map((item, i) => {
                  return (
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-4" key={i}>
                      <div className="locate-box border">
                        <h3>
                          {item.BranchName} <span> {item.BranchCity}, {item.State} - {item.Pincode} </span>
                        </h3>
                        <ul>
                          <li>
                            <i
                              className="fa fa-map-marker"
                              aria-hidden="true"
                            ></i>
                            {item.BranchAddress}
                          </li>
                          <li>
                            <i className="fa fa-clock-o" aria-hidden="true"></i>
                              {item.BranchTimings }
                          </li>
                          <li>
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            {item.BrachContact}
                          </li>
                          <li>
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            {item.BranchEmail}
                          </li>
                        </ul>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </section>
    </div>
  );
}
