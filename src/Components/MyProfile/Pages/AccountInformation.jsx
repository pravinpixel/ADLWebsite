import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { API_URL } from "../../../Redux/Constant/ApiRoute";
export default function AccountInformation() {
  const customer = useSelector((state) => state.authUser.user)

  const getCustomerInfo = () => { 
    axios.get(API_URL.GET_CUSTOMER_INFO + customer.id).then((response) =>{
      console.log(response)
    })
  }

  useEffect(() => {
    getCustomerInfo()
    document.title = "Account Information";
    window.scroll(0, 0);
  }, []);
  return (
    <div className="Products-factory-functions">
      <div className="row">
        <div className="col-12">
          <div className="accnt-heads">
            <h4>Basic Information</h4>
          </div>
          <div className="acnt-deetils">
            <ul>
              <li>
                <span>
                  <i className="fa fa-user-o" aria-hidden="true"></i> Name :
                </span>{" "}
                John
              </li>
              <li>
                <span>
                  <i className="fa fa-calendar" aria-hidden="true"></i> DOB :
                </span>{" "}
                18/09/1990
              </li>
              <li>
                <span>
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>{" "}
                  E-mail :
                </span>{" "}
                john@gmail.com
              </li>
              <li>
                <span>
                  <i className="fa fa-phone" aria-hidden="true"></i> Phone :
                </span>{" "}
                1234567890
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div> 
  );
}
