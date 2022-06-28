import React from "react";
import { Link } from "react-router-dom";
import clock from "./../../assets/images/clk.png";
import calnder from "./../../assets/images/cal.png"; 
import CartBtn from '../Containers/CartBtn'

export default function TestCardComponent(props) {
  return (
    <div className="">
      <div className="cmn-box-str">
        <div className="case">
          <h3>
            { props.test !== undefined ? props.test.TestName.substring(0,40) : 'Allergen, Individual-Drug, Diclofenac' }  
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
              props.getAllTestData !== undefined ?
                <CartBtn getData={props.getAllTestData} testData={props.test}/>
              :
              null
            }
            <Link className="bg-trsnper" to={props.test !== undefined ? `/test/${props.test.id}` : '/'}>
              <small>Know More</small>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
