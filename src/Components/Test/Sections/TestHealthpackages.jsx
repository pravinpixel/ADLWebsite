import { Link } from "react-router-dom";
import TestCard from "../../Containers/TestCardComponent";
import loaderGif from '../../../assets/images/loader-2.gif'
import { API_URL } from "../../../Redux/Constant/ApiRoute";
import { setAllTestDetails } from "../../../Redux/Actions/TestAction";
import { setTestFilters } from '../../../Redux/Actions/TestAction';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {useMemo, useState } from "react";

export default function   TestHealthPackages(props) {
  const testListing        = useSelector((state) => state.TestList.testList);
  const filters            = useSelector((state) => state.filters.filters);
  const dispatch           = useDispatch()
  const [Loader,setLoader] = useState(false)

  const fetchLabTests = () => {
    setLoader(true) 
    axios.post(API_URL.TEST_LISTS, filters).then((response) => {
      setLoader(false) 
      dispatch(setAllTestDetails(response.data.data));
    });
  }
  useMemo(() => fetchLabTests(),[filters])
  return (
    <section className="">
      <div className="container">
        <div className="row my-3">
          <div className="col-lg-6">
            <div className="test-lst">
              <ul>
                <li className="active">
                  <Link to="/">TEST LIST</Link>
                </li> 
              </ul>
            </div>
          </div>
          <div className="col-lg-6 pr-0">
            <div className="col">
              <div className="serch-filter text-right">
                Sort By
                <select value={props.sortBy} className="form-control" onChange={(e) => dispatch(setTestFilters({...filters,TestPrice:e.target.value})) } >
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
            testListing !== undefined
            ? testListing.map((test, index) => (
                <div className="col-lg-3" key={index}>
                  <TestCard test={test} />
                </div>
              ))
            : null
          }
        </div>
        <div className="load-mrebtn text-center">  
          {
            Loader === true ?  
              <a> <img src={loaderGif} width="28px" alt="loader" /> Loading ....</a>
            :  <a onClick={() => {
              setLoader(true) 
              dispatch(setTestFilters({...filters,Tack: filters.Tack + 4}))
            }}> Load More</a>
          }
        </div>
      </div>
    </section>
  );
}