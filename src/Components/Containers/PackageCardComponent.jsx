import React from "react";
import popImg from "../../assets/images/popular-img-1.jpg";
import { Link } from "react-router-dom";

export default function PackageCardComponent(props) { 
  return (
    <div className="pack-deils">
      <div className="pck-img">
        <img src={popImg} alt="" className="img-fluid" />
        <div className="ble-fnt">
          60 <span>Tests</span>
        </div>
      </div>
      <h3>{props.data !== undefined ?  props.data.TestName : ""}</h3>
      <h5>
        &#8377;{props.data !== undefined ?  props.data.TestPrice : ""}
        <span className="strke">
          <s>&#8377;{props.data !== undefined ? parseInt(props.data.TestPrice) + 850 : ""}</s>
        </span>
      </h5>
      <h6>79 % off T&C*</h6>
      <p>
        <Link  to={props.data !== undefined ? `/test/${props.data.id}` : '/'}>Book Now</Link>
      </p>
    </div>
  );
}
