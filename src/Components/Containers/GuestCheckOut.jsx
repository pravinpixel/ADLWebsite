import { useEffect, useState } from "react";
import { Form } from "react-component-form";
import { Link } from "react-router-dom";
import logo from './../../assets/images/logo.png';
import AuthProvider from "../../Helpers/AuthProvider";
import useRazorpay from "react-razorpay";
import AuthUser from "../../Helpers/AuthUser";
import axios from "axios";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import { toast } from "react-hot-toast";
import { Validate } from "../../Helpers";



export default function GuestCheckOut() {
  const [cartTable,setCartTable]      = useState([]); 
  const Razorpay = useRazorpay();
  const [BillingAddress,setBillingAddress] = useState({
    first_name  : null,
    last_name   : null,
    phone_number: null,
    address    : null,
    city_town   : null,
    email      : null,
    state      : null,
    pin_code    : null,
    id : AuthUser().id
  });
  var totalPrice = 0;

  const FormHandler = (e) => {
    setBillingAddress({...BillingAddress,[e.target.name] : e.target.value})
  }

  useEffect(() => {
    setCartTable(JSON.parse(localStorage.getItem("CartTestList"))); 
  }, [])

  const handlePayment = async () => {
    if(Validate(BillingAddress)) {
      axios.post(API_URL.UPDATE_BILLING_DETAILS,BillingAddress).then((response) => {
        console.log(response.data)
      })
    }
    // // const order = await createOrder(params); //  Create order on your backend
    // const options = {
    //   key: "rzp_test_S5bQihn0KDELkq",
    //   name: "Pay Online",
    //   image: logo,
    //   order_id: "order_KuTg5MetfmtiHm",
    //   handler: function (response) { 
    //     alert(response.razorpay_payment_id);
    //     alert(response.razorpay_order_id);
    //     alert(response.razorpay_signature);
    //   },
    //   prefill: {
    //     name: AuthUser().name,
    //     email: AuthUser().email,
    //     contact: "9999999999",
    //   },
    //   theme: {
    //     color: "#5d2c8f",
    //   },
    // };
  
    // const rzp1 = new Razorpay(options);
  
    // rzp1.on("payment.failed", function (response) {
    //   console.log(response)
    //   alert(response.error.code);
    //   alert(response.error.description);
    //   alert(response.error.source);
    //   alert(response.error.step);
    //   alert(response.error.reason);
    //   alert(response.error.metadata.order_id);
    //   alert(response.error.metadata.payment_id);
    // });
  
    // rzp1.open();
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
                                onChange={(e) => FormHandler(e)}
                                placeholder="Enter Your PIN Code"
                                required
                              />
                            </div>
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
                          {
                            cartTable.length ?
                              cartTable.map((item,i) => 
                                <tr key={i} amount={totalPrice += parseInt(item.TestPrice)} >
                                  <th className="text-left">{item.TestName}</th>
                                  <th className="text-right">&#8377;{item.TestPrice} </th>
                                </tr>
                              )
                            : null
                          } 
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
