import React from "react";
import { Link } from "react-router-dom";
import TestCard from "../../Containers/TestCardComponent";

export default function TestHealthPackages() {
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
                Sort By{" "}
                <select class="form-control " id="seek" name="seek">
                  <option value="Orthopaedic Care">Price : Low-High</option>
                  <option value="Orthopaedic Care">Price : High-Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <TestCard />
          </div>
          <div className="col-lg-3">
            <TestCard />
          </div>
          <div className="col-lg-3">
            <TestCard />
          </div>
          <div className="col-lg-3">
            <TestCard />
          </div>
          <div className="col-lg-3">
            <TestCard />
          </div>
          <div className="col-lg-3">
            <TestCard />
          </div>
          <div className="col-lg-3">
            <TestCard />
          </div>
          <div className="col-lg-3">
            <TestCard />
          </div>
        </div> 
        
          <div className="load-mrebtn text-center">
            <Link to="/">Load More</Link>
          </div> 

      </div>
    </section>
  );
}
