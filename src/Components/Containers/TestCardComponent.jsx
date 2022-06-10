import React from "react";
import { Link } from "react-router-dom";
import clock from "./../../assets/images/clk.png";
import calnder from "./../../assets/images/cal.png";
import { useDispatch } from "react-redux";
import { setTestCartList } from "../../Redux/Actions/TestAction";
import { AddToCartList } from "../../Helpers";

export default function TestCardComponent(props) {
  const dispatch  = useDispatch()
  const addTestToCart = (testDetails) => {
    AddToCartList(testDetails)
    dispatch(setTestCartList(JSON.parse(localStorage.getItem('CartTestList'))));
  };
  return (
    <div className="">
      <div className="cmn-box-str">
        <div className="case">
          <h3>
            { props.data !== undefined ? props.data.TestName : 'Allergen, Individual-Drug, Diclofenac' }  
          </h3>
          <ul>
            <li>
              <img src={clock} alt="" className="img-fluid" />
              { props.data !== undefined ? props.data.BasicInstruction : '2 ml of serum from SST. Ship refrigerated.' }   
            </li>
            <li>
              <img src={calnder} alt="" className="img-fluid" />
              { props.data !== undefined ? props.data.TestSchedule : 'Daily' }.
            </li>
          </ul>
          <h5>
            &#8377; 
            { props.data !== undefined ? props.data.TestPrice : '1400' }   
            <span className="strke">
              <s>&#8377; { props.data !== undefined ? props.data.TestPrice + 350 : '1500' }   </s>
            </span>
            <span className="flag-option">
              <p>10 % off</p>
            </span>
          </h5>
          <p>
            {
              props.data !== undefined ? 
                <a className="text-white" onClick={() => addTestToCart(props.data)} >ADD</a>
              : 
              <Link  to="/">ADD</Link>
            }

            <Link className="bg-trsnper" to="/">
              Know More
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
