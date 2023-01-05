import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import {
  removeTestDetails,
  setTestCartList,
  setTestDetails,
} from "../../Redux/Actions/TestAction";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import { AddToCartList } from "../../Helpers";
import { Link, useLocation } from "react-router-dom";
import testIcon1 from "../../assets/images/testing-icon-1.png";
import testIcon2 from "../../assets/images/testing-icon-2.png";
import testIcon3 from "../../assets/images/testing-icon-3.png";
import testIcon4 from "../../assets/images/testing-icon-4.png";
import testIcon5 from "../../assets/images/testing-icon-5.png";
import CartBtn from "./CartBtn";
import BookedTestSliders from "../Home/Sections/BookedTestSliders";
import { setLoading } from '../../Redux/Actions/LoaderAction'

export default function TestDetails() {
  const location = useLocation();
  const navigate = useNavigate()

  const { TestId } = useParams();
  const dispatch = useDispatch();
  const testDetails = useSelector((state) => state.TestDetails.TestDetails);

  const getTestDetails = async () => {
    dispatch(setLoading(true))
    const response = await axios.get(`${API_URL.TEST_DETAILS}/${TestId}/${location.state.test_type}`)
      .catch((err) => console.log(err));
    if (response.data.status) {
      dispatch(setLoading(false))
      dispatch(setTestDetails(response.data.data));
    } else {
      navigate('/')
    }
  };

  useEffect(() => {
    if (TestId && TestId !== "") getTestDetails();
    dispatch(removeTestDetails());
    window.scroll(0, 0) 
  }, [TestId]);

  const addTestToCart = (testDetails) => {
    AddToCartList(testDetails)
    dispatch(setTestCartList(JSON.parse(localStorage.getItem('CartTestList'))));
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
          <section className="testing-details text-left border-bottom">
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
                      {
                        testDetails.test.BasicInstruction !== ' ' ?
                          <li>
                            <img src={testIcon1} alt="call" className="img-fluid" />
                            <span>Basic Instruction </span>
                            {testDetails.test.BasicInstruction}
                          </li> : ""
                      }
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
                            <s>&#8377;{parseInt(testDetails.test.TestPrice) + 280}</s>
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
                      <li>
                        <img src={testIcon5} alt="call" className="img-fluid" />
                        <span>Home Collection</span>
                        { testDetails.test.HomeCollection === "Y" ? "Included" : "Not Included" }
                      </li>
                    </ul>
                  </div>
                  <div className="case">
                    <p className="d-flex">
                      <CartBtn getData={getTestDetails} testData={testDetails.test} />
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
                            testDetails.sub_test.map((subTest,i) => (
                              <li key={i}>{subTest.SubTestName}</li>
                            ))
                          }
                        </ul>
                      </div>
                      : null
                  }

                </div>
              </div>
              {
                testDetails.test.SpecialInstructionsForPatient !== "" || testDetails.test.SpecialInstructionsForCorporates !== "" || testDetails.test.SpecialInstructionsForDoctors !== "" ?
                  <div className="special-instruction">
                    
                    <h3>Special Instructions</h3>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      {
                        testDetails.test.SpecialInstructionsForPatient !== "" ?
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
                          : ""
                      }
                      {
                        testDetails.test.SpecialInstructionsForCorporates !== "" ?
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
                          : ""
                      }
                      {
                        testDetails.test.SpecialInstructionsForDoctors !== "" ?
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
                          : ""
                      }
                    </ul>
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <div className="detilos-expl">
                          <p>{testDetails.test.SpecialInstructionsForPatient}</p>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      >
                        <div className="detilos-expl">
                          <p>{testDetails.test.SpecialInstructionsForCorporates}</p>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="contact"
                        role="tabpanel"
                        aria-labelledby="contact-tab"
                      >
                         <div className="detilos-expl">
                          <p>{testDetails.test.SpecialInstructionsForCorporates}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                : null
              }
            </div>
          </section>
          <BookedTestSliders title="Other related" subTitle="Tests" />
        </>
      ) : (
        <div style={{ minHeight: "100vh" }}>  </div>
      )}
    </>
  );
}
