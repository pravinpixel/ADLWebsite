import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link ,useNavigate} from "react-router-dom";
import Sliders from "react-slick";
// import { toast } from "react-toastify";
import { setTopBookedTest } from "../../../Redux/Actions/TestAction";
import { API_URL } from "../../../Redux/Constant/ApiRoute";
import CartBtn from "../../Containers/CartBtn";

export default function BookedTestSliders({title , subTitle}) {
  var settings = {
    slidesToScroll: 1,
    infinite: true,
    slidesToShow: 5,
    focusOnSelect: false,
    autoplay: true,
    dots: false,
    arrows: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3, 
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2, 
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  };
  const dispatch = useDispatch();
  const [currentTestPrice , setCurrentTestPrice] = useState(0)
  const navigate = useNavigate() 
  const topBookedTestList = useSelector((state) => state.TopBookedTests.tests);
  const TestLocation = useSelector((state) => state.TestLocation); 
  const getBookedTestSliders = () => {
    axios.get(API_URL.TOP_BOOKED_TEST).then((response) => {
      dispatch(setTopBookedTest(response.data.data));
    });
  };
  
  const CheckTestPrice = (props) => {
    var price
    props.test.test_price.map((item,i) => {
      if(item.TestLocation ===  TestLocation.TestLocation) {
        price = item.TestPrice
      }
    })
    if(price !== undefined) {
      return price
    } else {
      return props.test.TestPrice
    }
  }

  useEffect(() => {
    // return () => {
      getBookedTestSliders();
    // };
  }, []);

  return (
    <section className="diagnostics text-left">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="common-heading">
              <h2>
                <span>{title} </span> {subTitle}
              </h2>
            </div>
            {topBookedTestList !== undefined ? (
              <Sliders {...settings} className="topbooked-cases">
                {topBookedTestList.map((test, index) => (
                  <div className="case p-3" key={index}>
                    <div className="link" onClick={() => navigate(`/test/${test.TestSlug}`,{ state : { test_type : 'test' } })}>
                      <h3 className="text-capitalize">
                        {`${test.TestName}`}
                      </h3>
                      <h4 className="text-capitalize">
                        {`${test.BasicInstruction.substring(0, 38)}...`}
                      </h4>
                      <h5> 
                       <span> ₹ <CheckTestPrice test={test}/></span> 
                        <span className="strke">
                          <s>&#8377;{test.TestPrice + 250}</s>
                        </span>
                      </h5>
                    </div>
                    <p>
                      <CartBtn testData={test} />
                    </p>
                  </div>
                ))}
                
              
              </Sliders>
            ) : null}
          </div>
          <div className="col-lg-12"> 
          <div className="vew-aal mt-5 text-center"> 
          <Link to="/for-patient"> View All</Link> 
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
