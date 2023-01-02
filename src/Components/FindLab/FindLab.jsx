import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router';
import bannerimage from "../../assets/images/inner-banner-2.jpg";
import axios from "axios";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import { useDispatch } from "react-redux";
import { setLoading } from "../../Redux/Actions/LoaderAction";

export default function FindLab() {
  const location = useLocation();
  const navigate = useNavigate();    
  const dispatch = useDispatch()

  
  const [Lab, setLab] = useState([]); 

  const getLocation = () => {  
    dispatch(setLoading(true))
    axios.get(`${API_URL.GET_LAB_LOCATION}/${location.state.LocationId}`).then((response) => {
      dispatch(setLoading(false))
      setLab(response.data);
    });
  };
  useEffect(() => {
    if(location.state === null) {
      navigate('/') 
    } else {
      getLocation();
    }
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
               
                  <span className="inlne">Our</span> {Lab.length !== 0 ? Object.entries(Lab)[0][0] : null} Locations
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
            {Lab.length !== 0
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
              :  <div style={{ minHeight: "100vh" }}>  </div>}
          </div>
        </div>
      </section>
    </div>
  );
}
