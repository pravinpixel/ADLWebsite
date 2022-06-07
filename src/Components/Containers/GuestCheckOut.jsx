import React from "react";
import { Form } from "react-component-form";
import { Link } from "react-router-dom";
import { CgCloseO } from 'react-icons/cg';

export default function GuestCheckOut() {
  return (
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
                <div className="common-heading">
                  <h2>
                    Guest <span> Checkout </span>
                    <strong>(or) <Link to="">Login Here!</Link> </strong>
                  </h2>
                </div>
                <div className="form-billing">
                <Form>
                <div className="frm-fields row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h4 className='cont-frmhed'>Billing Address</h4>
                        <div className="row">
                        <div className="form-data col-lg-6">
                            <label>First Name</label>
                            <input className="input100" type="text" name='name' placeholder="Enter Your First Name" required/> 
                        </div>
                        <div className="form-data col-lg-6">
                            <label>Last Name</label>
                            <input className="input100" type="text" name='name' placeholder="Enter Your Last Name" required/> 
                        </div>
                        <div className="form-data col-lg-6">
                            <label>E-mail Address</label>
                            <input className="input100" type="text" name='name' placeholder="Enter Your E-mail ID" required/> 
                        </div>
                        <div className="form-data col-lg-6">
                        <label>Phone Number</label>
                            <input className="input100" type="number" pattern="/^\d{10}$/" name='mobile' placeholder="Enter your Contact Number" required/> 
                        </div>
                        <div className="form-data col-lg-6">
                            <label>Address</label>
                            <input className="input100" type="text" name='name' placeholder="Street No, Street Name" required/> 
                        </div>
                        <div className="form-data col-lg-6">
                            <label>City/Town</label>
                            <input className="input100" type="text" name='name' placeholder="City/Town" required/> 
                        </div>
                        <div className="form-data col-lg-6">
                            <label>State</label>
                            <input className="input100" type="text" name='location' placeholder="Select Your State" required/> 
                        </div>  
                        <div className="form-data col-lg-6">
                            <label>PIN Code</label>
                            <input className="input100" type="text" name='location' placeholder="Enter Your PIN Code" required/> 
                        </div> 
                        </div>
                    </div>
                </div>
            </Form>
                </div>
                <div className="coupon-form">
                <Form>
                <div className="frm-fields row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h4 className='cont-frmhed'>Apply Coupon</h4>
                        <div className="row">
                        <div className="form-data col-lg-6"> 
                            <input className="input100" type="text" name='name' placeholder="Enter Your Coupon Code" required/> 
                            <Link to=""><CgCloseO /></Link>
                            <button type="button">Apply</button>
                        </div>
                        </div>
                    </div>
                </div>
            </Form>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
            <div className="total-carting availab-lity ca-rtloc">
                <h4>Cart Summary</h4>
                <div className="cart-listbox">
                    <div className="cat-itenslst">
                <table className="table">
                  <tbody>
                  <tr>
                    <th className="text-left">Cholesterol Total, Serum</th>
                    <th className="text-right">&#8377;180</th>
                  </tr>
                  <tr>
                    <td className="text-left">Complete Blood Count</td>
                    <td className="text-right"> &#8377; 275 </td>
                  </tr>
                  <tr>
                    <td className="text-left">NEU Express</td>
                    <td className="text-right"> &#8377; 5,980 </td>
                  </tr> 
                  <tr>
                    <th className="text-left">Cholesterol Total, Serum</th>
                    <th className="text-right"> &#8377;180 </th>
                  </tr>
                  <tr>
                    <td className="text-left">Complete Blood Count</td>
                    <td className="text-right"> &#8377; 275 </td>
                  </tr>
                  <tr>
                    <td className="text-left">NEU Express</td>
                    <td className="text-right"> &#8377; 5,980 </td>
                  </tr> 
                  <tr>
                    <th className="text-left">Cholesterol Total, Serum</th>
                    <th className="text-right"> &#8377;180 </th>
                  </tr>
                  <tr>
                    <td className="text-left">Complete Blood Count</td>
                    <td className="text-right"> &#8377; 275 </td>
                  </tr>
                  <tr>
                    <td className="text-left">NEU Express</td>
                    <td className="text-right"> &#8377; 5,980 </td>
                  </tr> 
                  </tbody>
                </table>  
                </div>  
                </div>
                <table className="table">
                  <tbody>
                  <tr>
                    <th className="text-left">Subtotal</th>
                    <th className="text-right">&#8377;6345</th>
                  </tr>
                  <tr>
                    <td className="text-left">Discount (-)</td>
                    <td className="text-right">- &#8377; 4655</td>
                  </tr>
                  <tr>
                    <td className="text-left">Coupon Discount (-)</td>
                    <td className="text-right">- &#8377; 200</td>
                  </tr>
                  <tr>
                    <td className="text-left">
                      <b>Total</b>
                    </td>
                    <td className="text-right">
                      <b>&#8377;1580</b>
                    </td>
                  </tr>
                  </tbody>
                </table>
                <div className="case text-right">
                  <p>
                    <Link to="/">Make Payment</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
