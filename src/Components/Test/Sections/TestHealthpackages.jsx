import React  from "react";
import { Link } from "react-router-dom";
import TestCard from "../../Containers/TestCardComponent";
import loaderGif from '../../../assets/images/loader-2.gif'

export default function   TestHealthPackages(props) {
    
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
                <select value={props.sortBy} className="form-control" onChange={(e) => props.sortByPrice(e.target.value) } >
                  <option value=""> -- Choose --</option>
                  <option value="high"> Price : High-Low</option>
                  <option value="low">  Price : Low-High</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          { 
            props.testListing !== undefined
            ? props.testListing.map((test, index) => (
                <div className="col-lg-3" key={index}>
                  <TestCard test={test} getAllTestData={props.getTestData} />
                </div>
              ))
            : null
          }
        </div>
        <div className="load-mrebtn text-center">
          <a onClick={() => {
            props.getTestData(props.sortBy, props.search, props.tackTest + 4);
            props.setTackTest(props.tackTest + 4)
          }}>
            Load More
          </a>
          {
            props.loader === true ? 
              <h1><img src={loaderGif} alt="loader" /></h1>
            : null
          }
        </div>
      </div>
    </section>
  );
}