import React from "react";

export default function TestBanner() {
  return (
    <section className="search-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="serchnig text-center">
              <h1>Home Collection Booking in Bangalore</h1>
              <input
                type="text"
                placeholder="Search for Health Packages / Tests / Labs"
              />
              <div className="testBySec d-flex justify-content-center align-items-center">
                <lable className="testTxt">Filter By</lable>
                <div className="badgeSec">
                  <ul className="badgeList">
                    <li className="active">
                      <a className="darkBdrBut ">Conditions</a>
                    </li>
                    <li>
                      <a className="darkBdrBut ">Lifestyle Disorders</a>
                    </li>
                    <li>
                      <a className="darkBdrBut ">Specialized</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="chk-bxes text-center">
                <div className="cutsomCheckBox circle">
                  <input
                    type="radio"
                    id="cond_0"
                    name="category_filter"
                    value="Allergy"
                  />
                  <label for="cond_0">
                    <span className="lableTxt">Allergy</span>
                  </label>
                </div>
                <div className="cutsomCheckBox circle">
                  <input
                    type="radio"
                    id="cond_1"
                    name="category_filter"
                    value="Genetic Disorders"
                  />
                  <label for="cond_1">
                    <span className="lableTxt">Genetic Disorders</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
