import React from "react";
import { Link } from "react-router-dom";
import clock from "./../../assets/images/clk.png";
import calnder from "./../../assets/images/cal.png"; 
import { CheckCartBucket } from "../../Helpers";

export default function TestCardComponent(props) {
  
  return (
    <div className="">
      <div className="cmn-box-str">
        <div className="case">
          <h3>
            { props.test !== undefined ? props.test.TestName.substring(0,80) : 'Allergen, Individual-Drug, Diclofenac' }  
          </h3>
          <ul>
            <li>
              <img src={clock} alt="" className="img-fluid" />
              { props.test !== undefined ? props.test.BasicInstruction.substring(0,50) : '2 ml of serum from SST. Ship refrigerated.' }   
            </li>
            <li>
              <img src={calnder} alt="" className="img-fluid" />
              { props.test !== undefined ? props.test.TestSchedule : 'Daily' }.
            </li>
          </ul>
          <h5>
            &#8377; 
            { props.test !== undefined ? props.test.TestPrice : '1400' }   
            <span className="strke">
              <s>&#8377; { props.test !== undefined ? props.test.TestPrice + 1000 : '1500' }   </s>
            </span>
            <span className="flag-option">
              <p>
                10 % off
              </p>
            </span>
          </h5>
          <p>
            {
              props.test !== undefined ? 
                CheckCartBucket(props.test.TestId) === true ? 
                <a className="text-white" onClick={(e) => props.removeTestToCart(props.test)} >
                  Remove from Cart
                </a>
                : 
                <a className="text-white" onClick={(e) =>  props.addTestToCart(props.test)} >
                  Add to Cart
                </a>
              : 
              <Link  to="/">ADD</Link>
            }
            <Link className="bg-trsnper" to={props.test !== undefined ? `/test/${props.test.id}` : '/'}>
              Know More
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
