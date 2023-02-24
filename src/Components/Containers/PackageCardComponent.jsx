import CartBtn from "../Containers/CartBtn";
import { Link } from "react-router-dom";

export default function PackageCardComponent(props) {
  return (
    <div className="pack-deils">
      <div className="pck-img">
        <img src={props.data.image} alt="img" className="img-fluid"/> 
        { props.data !== undefined ? (
          props.data?.sub_tests?.length !== 0 ? (
            <div className="ble-fnt"> 
              {props.data?.sub_tests?.length} <span>Tests</span>
            </div>
          ) : null
        ) : null }
      </div>
      <h3>{props?.data?.TestName}</h3>
      <h5><span >₹ <span>{props?.data?.TestPrice}</span></span></h5>
      <div className="case" style={{ border:"none",padding:"0" }}>
        <p className="d-flex">
          <CartBtn testData={props?.data} />
          <Link className="bg-trsnper ml-2" to={`/package/${props.data.TestSlug}`}>
            <small>Know More</small>
          </Link>
        </p>
      </div>
    </div>
  );
}
