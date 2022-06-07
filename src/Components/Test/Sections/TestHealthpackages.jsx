import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setAllTestDetails } from "../../../Redux/Actions/TestAction";
import { API_URL } from "../../../Redux/Constant/ApiRoute";
import TestCard from "../../Containers/TestCardComponent";

export default function TestHealthPackages() {
  const dispatch      = useDispatch();
  const testListing   = useSelector((state) => state.TestList.testList);
  const [tackTest, setTackTest] = useState(4);

  const getAllTest = () => { 
    axios
      .post(API_URL.TEST_LISTS, {
        tack: tackTest,
      })
      .then((response) => {
        dispatch(setAllTestDetails(response.data.data));
      });
  };
  useEffect(() => {
    return () => {
      getAllTest();
    };
  }, []);
  return (
    <section className="">
      <div className="container">
        <div className="row my-3">
          <div className="col-lg-6">
            <div className="test-lst">
              <ul>
                <li className="active">
                  <Link to="/">TEST</Link>
                </li>
                <li>
                  <Link to="/">HEALTH PACKAGES</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 pr-0">
            <div className="col">
              <div className="serch-filter text-right">
                Sort By
                <select className="form-control " id="seek" name="seek">
                  <option value="Orthopaedic Care">Price : Low-High</option>
                  <option value="Orthopaedic Care">Price : High-Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {testListing !== undefined
            ? testListing.map((test, index) => (
                <div className="col-lg-3" key={index}>
                  <TestCard />
                </div>
              ))
            : null}
        </div>
        <div className="load-mrebtn text-center">
          <a onClick={() => {
            setTackTest(tackTest + 4);
            getAllTest();
          }}>
            Load More
          </a>
        </div>
      </div>
    </section>
  );
}