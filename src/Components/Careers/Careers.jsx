import { useEffect } from "react";
import { Link } from "react-router-dom";
import bannerimage from "../../assets/images/inner-banner-2.jpg";

export default function Careers() {
  useEffect(() => {
    document.title = "Careers";
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
                  <li>
                    {" "}
                    <Link to="/reach-us"> Reach us </Link>
                  </li>
                  <li> / </li>
                  <li> Careers </li>
                </ul>
                <h1>
                  Your passion, <br />
                  our prospect! Join us!
                </h1>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="people-function phsiyo-therphy carer-boxes">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="common-heading">
                <h2>
                  {" "}
                  <span className="inlne">Current</span> Openings{" "}
                </h2>
              </div>
              <p>
                We are always open to talking to qualified people for
                appropriate career openings at ADL. From time to time, we also
                advertise in local dailies for specific positions. Every
                employee at ADL has been carefully selected to be part of a team
                that is constantly striving to improve customer experience
                through excellent diagnostic services. If you believe you have
                the right skills, experience and positive attitude to be part of
                a best-in-class laboratory at Bangalore, feel free to forward
                your resume. If your resume suits our requirement, you will be
                shortlisted for further discussion.
              </p>
              <br />
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="car-bxo mb-4">
                <h3>
                  Senior Resident/Pathologist<span>HR/MH 21-08</span>
                </h3>
                <h4>
                  Location : <span> Bengaluru </span>
                </h4>
                <h4>
                  Experience : <span> Fresher or 2-3 years </span>
                </h4>
                <h4>
                  Requirement : <span> 1 </span>
                </h4>
                <p class="d-flex">
                  <Link to="/join-oppourtunities"> Apply Now </Link>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="car-bxo mb-4">
                <h3>
                  Product Specialist<span>HR/PRO 21-08</span>
                </h3>
                <h4>
                  Location : <span> Chennai </span>
                </h4>
                <h4>
                  Experience : <span> 3-4 Years </span>
                </h4>
                <h4>
                  Requirement : <span> 2 </span>
                </h4>
                <p class="d-flex">
                  <Link to="/join-oppourtunities"> Apply Now </Link>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="car-bxo mb-4">
                <h3>
                  Phlebotomy<span> HR/PHB0 21-08 </span>
                </h3>
                <h4>
                  Location : <span> Bengaluru </span>
                </h4>
                <h4>
                  Experience : <span> 0-2 Years </span>
                </h4>
                <h4>
                  Requirement : <span> 5 </span>
                </h4>
                <p class="d-flex">
                  <Link to="/join-oppourtunities"> Apply Now </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
