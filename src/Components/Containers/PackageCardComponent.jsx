import React from "react";
import popImg from "../../assets/images/popular-img-1.jpg";
import CheckTestPrice from "../../Helpers/CheckTestPrice";
import { useSelector } from "react-redux";
import CartBtn from "../Containers/CartBtn";
import TestNavBtn from "./TestNavBtn";

export default function PackageCardComponent(props) {
  const TestLocation = useSelector((state) => state.TestLocation); 
  return (
    <div className="pack-deils">
      <div className="pck-img">
        <img
          src={popImg}
          // src={
          //   props.data !== undefined
          //     ? props.data.TestImages !== null
          //       ? props.data.TestImages
          //       : popImg
          //     : popImg
          // }
          alt="img"
          className="img-fluid"
        />
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
        {
          props.data !== undefined ?
            <span >₹ <span><CheckTestPrice test={props.data}/></span></span>
          : null
        } 
      </h5>
      <div className="case" style={{ border:"none",padding:"0" }}>
        <p className="d-flex">
          <CartBtn testData={props.data} />
          <TestNavBtn data={props.data !== undefined ?  props.data : null }/>  
        </p>
      </div>
    </div>
  );
}
