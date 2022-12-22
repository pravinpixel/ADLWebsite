import { useEffect, useState } from "react";
import { Form } from "react-component-form";
import { Link, useNavigate } from "react-router-dom";
import AuthProvider from "../../Helpers/AuthProvider";
import useRazorpay from "react-razorpay";
import AuthUser, { PutUser } from "../../Helpers/AuthUser";
import axios from "axios";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import { toast } from "react-hot-toast";
import { Validate } from "../../Helpers";

export default function GuestCheckOut() {
  const [cartTable, setCartTable] = useState([]);
  const [DateTime,setDateTime] = useState(false);
  const [datetimeData,setDatetimeData] = useState(null);
  
  
  const Razorpay = useRazorpay();
  let navigate = useNavigate();
  const [BillingAddress, setBillingAddress] = useState({
    first_name: null,
    last_name: null,
    phone_number: null,
    address: null,
    city_town: null,
    email: null,
    state: null,
    pin_code: null,
    id: AuthUser().id, 
  });
  var totalPrice = 0;

  const FormHandler = (e) => {
    setBillingAddress({ ...BillingAddress, [e.target.name]: e.target.value });
    // console.log(BillingAddress)
  };

  useEffect(() => {
    setCartTable(JSON.parse(localStorage.getItem("CartTestList")));
    var AuthUserData = AuthUser();
    if (AuthUserData.first_name ?? false) {
      setBillingAddress(AuthUserData);
    }
  }, []);

  const handlePayment = async () => {
    if (Validate(BillingAddress)) {
      axios.post(API_URL.UPDATE_BILLING_DETAILS, {
          ...BillingAddress,
          amount: totalPrice,
          datetime:datetimeData
        }).then((response) => {
          if (response.data.status) {
            CheckOutPayment(response.data.data);
            PutUser(BillingAddress);
          }
        });
    }
  };

  const saveTheOrder = (data,type) => {
    axios.post(API_URL.SAVE_THE_ORDER,{ 
      razorpay_response : {
        status :type,
        data : data
      },
      user:AuthUser(),
      products:cartTable,
      appoinment:DateTime,
      datetime:datetimeData,
    }).then((response)=>{
      console.log("Success")
    })
  };

  const CheckOutPayment = (data) => {
    const options = {
      key: data.key,
      name: data.title,
      image: data.image,
      order_id: data.order_id,
      handler: function (response) {
        saveTheOrder(response,"PAID");
        toast.success("Payment Successs !");
        localStorage.removeItem("CartTestList");
        navigate("/");
      },
      prefill: {
        name: data.name,
        email: data.email,
        contact: parseInt(data.contact),
      },
      theme: {
        color: "#5d2c8f",
      },
    };

    const rzp1 = new Razorpay(options);

    rzp1.on("payment.failed", function (response) {
      saveTheOrder(response,'FAILED');
      toast.error("Payment Failed !");
    });
    rzp1.open();
  };
  return (
    <AuthProvider>
      <div>
        <section className="comon-testdetail-banner">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="bnr-txt text-left">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li> / </li>
                    <li>
                      <Link to="/for-patient">Checkout</Link>
                    </li>
                  </ul>
                  <h1>My Cart</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="main-billfrm">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="billing-form">
                  <div className="form-billing">
                    <Form>
                      <div className="frm-fields row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <h4 className="cont-frmhed">Billing Address</h4>
                          <div className="row">
                            <div className="form-data col-lg-6">
                              <label>First Name</label>
                              <input
                                className="input100"
                                type="text"
                                value={BillingAddress.first_name}
                                name="first_name"
                                placeholder="Enter Your First Name"
                                onChange={(e) => FormHandler(e)}
                                required
                              />
                            </div>
                            <div className="form-data col-lg-6">
                              <label>Last Name</label>
                              <input
                                className="input100"
                                type="text"
                                name="last_name"
                                value={BillingAddress.last_name}
                                placeholder="Enter Your Last Name"
                                required
                                onChange={(e) => FormHandler(e)}
                              />
                            </div>
                            <div className="form-data col-lg-6">
                              <label>E-mail Address</label>
                              <input
                                className="input100"
                                type="text"
                                name="email"
                                value={BillingAddress.email}
                                placeholder="Enter Your E-mail ID"
                                required
                                onChange={(e) => FormHandler(e)}
                              />
                            </div>
                            <div className="form-data col-lg-6">
                              <label>Phone Number</label>
                              <input
                                className="input100"
                                type="number"
                                pattern="/^\d{10}$/"
                                name="phone_number"
                                value={BillingAddress.phone_number}
                                onChange={(e) => FormHandler(e)}
                                placeholder="Enter your Contact Number"
                                required
                              />
                            </div>
                            <div className="form-data col-lg-6">
                              <label>Address</label>
                              <input
                                className="input100"
                                type="text"
                                name="address"
                                value={BillingAddress.address}
                                onChange={(e) => FormHandler(e)}
                                placeholder="Street No, Street Name"
                                required
                              />
                            </div>
                            <div className="form-data col-lg-6">
                              <label>City/Town</label>
                              <input
                                className="input100"
                                type="text"
                                name="city_town"
                                onChange={(e) => FormHandler(e)}
                                value={BillingAddress.city_town}
                                placeholder="City/Town"
                                required
                              />
                            </div>
                            <div className="form-data col-lg-6">
                              <label>State</label>
                              <input
                                className="input100"
                                type="text"
                                name="state"
                                value={BillingAddress.state}
                                onChange={(e) => FormHandler(e)}
                                placeholder="Select Your State"
                                required
                              />
                            </div>
                            <div className="form-data col-lg-6">
                              <label>PIN Code</label>
                              <input
                                className="input100"
                                type="text"
                                name="pin_code"
                                value={BillingAddress.pin_code}
                                onChange={(e) => FormHandler(e)}
                                placeholder="Enter Your PIN Code"
                                required
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>Appoinment</label>
                              <label htmlFor="book_a_appoinment" className="form-control pt-2" style={{ height:'45px' }}>
                                <input type="checkbox" onChange={() => setDateTime(DateTime === true ? false : true )} id="book_a_appoinment" className="mr-2"/> 
                                <b>Book a Appoinment</b>
                              </label>
                            </div>
                            {
                              DateTime === true ? 
                                <div className="form-data col-lg-6">
                                  <label>Date & Time</label>
                                  <input type="datetime-local" name="datetime" onChange={(e) => setDatetimeData(e.target.value)} className="form-control" /> 
                                </div>  
                              : null
                            }
                          </div> 
                        </div>
                      </div>
                    </Form>
                  </div>
                  {/* <div className="coupon-form">
                    <Form>
                      <div className="frm-fields row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <h4 className="cont-frmhed">Apply Coupon</h4>
                          <div className="row">
                            <div className="form-data col-lg-6">
                              <input
                                className="input100"
                                type="text"
                                name="name"
                                placeholder="Enter Your Coupon Code"
                                required
                              />
                              <Link to="">
                                <CgCloseO />
                              </Link>
                              <button type="button">Apply</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Form>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="total-carting availab-lity ca-rtloc">
                  <h4>Cart Summary</h4>
                  <div className="cart-listbox">
                    <div className="cat-itenslst">
                      <table className="table">
                        <tbody>
                          {cartTable.length
                            ? cartTable.map((item, i) => (
                                <tr
                                  key={i}
                                  amount={
                                    (totalPrice += parseInt(item.TestPrice))
                                  }
                                >
                                  <th className="text-left">{item.TestName}</th>
                                  <th className="text-right">
                                    &#8377;{item.TestPrice}{" "}
                                  </th>
                                </tr>
                              ))
                            : null}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <table className="table">
                    <tbody>
                      <tr>
                        <th className="text-left">Subtotal</th>
                        <th className="text-right">&#8377;{totalPrice}</th>
                      </tr>
                      {/* <tr>
                        <td className="text-left">Discount (-)</td>
                        <td className="text-right">- &#8377; 4655</td>
                      </tr> */}
                      <tr>
                        <td className="text-left">Coupon Discount (-)</td>
                        <td className="text-right">- &#8377; 0</td>
                      </tr>
                      <tr>
                        <td className="text-left">
                          <b>Total</b>
                        </td>
                        <td className="text-right">
                          <b>&#8377;{totalPrice}</b>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="case text-right">
                    <p>
                      <a onClick={handlePayment}>Make Payment</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AuthProvider>
  );
}
