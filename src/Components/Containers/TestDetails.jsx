import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  removeTestDetails,
  setTestDetails,
} from "../../Redux/Actions/TestAction";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import { Link } from "react-router-dom";

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
    return () => {
      if (TestId && TestId !== "") getTestDetails();
      dispatch(removeTestDetails());
    };
  }, []);

  return (
    <>
      {testDetails !== undefined ? (
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
                  <h1>Book Lab Tests <span>Anywhere - Anytime</span></h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
