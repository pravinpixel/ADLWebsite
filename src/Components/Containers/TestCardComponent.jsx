import React from "react";
import clock from './../../assets/images/clk.png';
import calnder from './../../assets/images/cal.png';

export default function TestCardComponent() {
  return (
    <div className="">
      <div className="cmn-box-str">
        <div class="case">
          <h3>Cholesterol Total, Serum</h3>
          <ul>
          <li>
          <img src={clock} alt="" className="img-fluid"/>  
          2 ml of serum from SST. Ship refrigerated. 
          </li> 
          <li>
          <img src={calnder} alt="" className="img-fluid"/>  
          2 ml of serum from SST. Ship refrigerated. 
          </li>  
          </ul>
          <h5>
            &#8377;180{" "}
            <span class="strke">
              <s>&#8377;280</s>
            </span>
          </h5>
          <p>
            <a href="about-us">ADD</a>
          </p>
        </div>
      </div>
    </div>
  );
}
