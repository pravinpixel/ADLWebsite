import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bannerimage from "../../assets/images/inner-banner-10.webp";
import axios from "axios";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import PackageCardComponent from "../Containers/PackageCardComponent";
import { useDispatch, useSelector } from "react-redux";
import GenderFilter from "./GenderFilter";
import ConditionFilter from "./ConditionFilter";
import OrganFilter from "./OrganFilter";
import PriceFilters from "./PriceFilters";
import { setPackageFilters } from "../../Redux/Actions/TestAction";

export default function Packages() {
  useEffect(() => {
    document.title = "Our Packages";
    window.scroll(0, 0);
  }, [])

  const dispatch = useDispatch()
  const [Packages, setPackages] = useState([])
  const [EmptyData, setEmptyData] = useState(false)
  const packageFilters = useSelector((state) => state.packageFilters.filters)

  const fetchPackages = () => {
    axios.post(API_URL.PACKAGES_LIST, packageFilters).then((response) => {
      setPackages(response.data.data)
      if(response.data.count === 0) {
        setEmptyData(true)
      } else {
        setEmptyData(false)
      }
    });
  };

  const clearAllFilters = () => {
    var checkboxes = document.querySelectorAll('input:checked')
    for(var i=0;i<checkboxes.length;i++) {
      if(checkboxes[i].type=='checkbox') {
        checkboxes[i].checked=false;
      }
    }
    dispatch(setPackageFilters({
      ApplicableGender: null,
      TestName: null,
      TestPrice: 'high',
      HealthCondition: null,
      OrganName: null,
      Tack: 8,
    }))
  }

  useEffect(() => {
    fetchPackages();
  }, [packageFilters]);

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
                  <li> Patients </li>
                  <li> / </li>
                  <li> Packages </li>
                </ul>
                <h1>
                  Health packages for<br></br> you and your family
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="filtering-packages filtering-lsts">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="common-heading">
                <h2>
                  <span>MAKING </span>
                  <span className="yelow">GOOD HEALTH </span> a Priority!
                </h2>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="totl-pkglst">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div className="filter-lists Products-factory-lsts">
                      <h3>
                        Filters
                        <button onClick={clearAllFilters} className="btn-sm btn-danger float-right rounded"><i className="fa fa-times"></i> Clear</button>
                      </h3>
                      <GenderFilter />
                      <ConditionFilter />
                      <OrganFilter />
                      <PriceFilters />
                    </div>
                  </div>
                  <div className="col-9">
                    {EmptyData === true ? 
                      <h5 className="py-3">No Result Found !</h5>
                    : null}
                    <div className="Products-factory-functions">
                      <div className="row">
                        {
                          Packages.length !== 0 
                          ?
                            Packages.map((item, index) => <div key={index} className="col-lg-4"><PackageCardComponent data={item} /></div> )
                          : null
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}