import React from "react";
import { Link } from "react-router-dom";
import clock from './../../assets/images/clk.png';
import calnder from './../../assets/images/cal.png';

export default function TestCardComponent() {
  return (
    <div className="">
      <div className="cmn-box-str">
        <div className="case">
          <h3>Allergen, Individual-Drug, Diclofenac </h3>
          <ul>
          <li>
          <img src={clock} alt="" className="img-fluid"/>  
          2 ml of serum from SST. Ship refrigerated. 
          </li> 
          <li>
          <img src={calnder} alt="" className="img-fluid"/>  
          Daily.
          </li>  
          </ul>
          <h5>
            &#8377;1400{" "}
            <span className="strke">
              <s>&#8377;1556</s>
            </span>
            <span className="flag-option">
              <p>10 % off</p>
            </span>
          </h5>
          <p>
            <Link to="/">ADD</Link> 
            <Link className='bg-trsnper' to="/">Know More</Link>  
          </p>
        </div>
      </div>
    </div>
  );
}
