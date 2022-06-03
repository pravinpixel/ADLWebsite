import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  removeTestDetails,
  setTestCartList,
  setTestDetails,
} from "../../Redux/Actions/TestAction";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import { Link } from "react-router-dom";
import testicon1 from "../../assets/images/testing-icon-1.png";
import testicon2 from "../../assets/images/testing-icon-2.png";
import testicon3 from "../../assets/images/testing-icon-3.png";
import testicon4 from "../../assets/images/testing-icon-4.png";
import {addTestToCart, Loading} from '../../Helpers'
import { toast } from "react-toastify";

export default function TestDetails() {
  const { TestId }  = useParams();
  const dispatch    = useDispatch();
  const testDetails = useSelector((state) => state.TestDetails.TestDetails);

  const getTestDetails = async () => {
    const response = await axios.get(API_URL.TEST_DETAILS + TestId).catch((err) => console.log(err));
    dispatch(setTestDetails(response.data.data));
  };

  useEffect(() => {
    return () => {
      if (TestId && TestId !== "") getTestDetails();
      dispatch(removeTestDetails());
    };
  }, []);

  const addTestToCart  = (testDetails) => { 
    if(localStorage.getItem('CartTestList') == undefined) {
      localStorage.setItem('CartTestList', JSON.stringify([]));
    }
    let currentCart = JSON.parse(localStorage.getItem('CartTestList'));
    localStorage.setItem('CartTestList', JSON.stringify([...currentCart,testDetails]));
    dispatch(setTestCartList(JSON.parse(localStorage.getItem('CartTestList'))));
    toast.success('Test Added Successfully!');
  }

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
                      <span>Test ID - {testDetails.TestId}</span>
                      { testDetails.TestName }
                    </h2>
                  </div>
                  <div className="testng-details">
                    <ul>
                      <li>
                        <img src={testicon1} alt="call" className="img-fluid" />
                        <span>Basic Instruction </span>
                        {testDetails.BasicInstruction}
                      </li>
                      <li>
                        <img src={testicon2} alt="call" className="img-fluid" />
                        <span>Test Shedule</span>
                        {testDetails.TestSchedule}
                      </li>
                      <li className="colap-seing">
                        <img src={testicon3} alt="call" className="img-fluid" />
                        <h5>
                          &#8377;{testDetails.TestPrice} 
                          <span className="strke ml-2">
                            <s>&#8377;{testDetails.TestPrice + 280}</s>
                          </span>
                          <span className="flag-option">
                            <p>10 % off</p>
                          </span>
                        </h5>
                      </li>
                      <li>
                        <img src={testicon4} alt="call" className="img-fluid" />
                        This test is  {testDetails.HomeCollection === "N" ? "Not" : null } eligible for Home Collection.
                      </li>
                    </ul>
                  </div>
                  <div className="case">
                    <p>
                      <a className='text-white' onClick={() => addTestToCart(testDetails)}>ADD</a>
                      <Link className="bg-trsnper" to="/">
                        Know More
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="col-lg-5"></div>
              </div>
            </div>
          </section>
        </>
      ) :
        <Loading/>
      }
    </>
  );
}