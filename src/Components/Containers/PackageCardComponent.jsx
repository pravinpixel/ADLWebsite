import React from "react";
import popImg from "../../assets/images/popular-img-1.jpg";
import { Link } from "react-router-dom";
import CartBtn from "../Containers/CartBtn";

export default function PackageCardComponent(props) {
  return (
    <div className="pack-deils p-3">
      <div className="pck-img">
        {/* <img
          src={
            props.data !== undefined
              ? props.data.TestImages !== null
                ? props.data.TestImages
                : popImg
              : popImg
          }
          alt=""
          className="img-fluid"
        /> */}
        {props.data !== undefined ? (
          props.data.sub_test_list.length !== 0 ? (
            <div className="ble-fnt"> 
              {props.data.sub_test_list.length} <span>Tests</span>
            </div>
          ) : null
        ) : null}
      </div>
      <h3>
        {props.data !== undefined
          ? props.data.TestName.substring(0, 26) + "..."
          : ""}
      </h3>
      <h5>
        &#8377;{props.data !== undefined ? props.data.TestPrice : ""}
        <span className="strke">
          <s>
            &#8377;
            {props.data !== undefined
              ? parseInt(props.data.TestPrice) + 850
              : ""}
          </s>
        </span>
      </h5>
      <h6>{Math.floor(Math.random() * 100) + 1} % off T&C*</h6>
      <div className="case" style={{ border:"none",padding:"0" }}>
        <p className="d-flex">
          {props.packages !== undefined ? (
            <CartBtn getData={props.packages} testData={props.data} />
          ) : null}
          <Link
            className="bg-trsnper ml-2"
            style={{ marginLeft: "10px" }}
            to={props.data !== undefined ? `/test/${props.data.id}` : "/"}
          >
            <small>Know More</small>
          </Link>
        </p>
      </div>
    </div>
  );
}
