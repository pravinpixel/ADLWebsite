import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setTestCartList } from "../../Redux/Actions/TestAction";
import emptyCart from "../.././assets/images/cart_empty.png";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import axios from "axios";

export default function CartList() {
  const [CartTable, setCartTable] = useState([]);
  const [testTotal, setTestTotal] = useState(0);
  const dispatch                  = useDispatch();
  const fetchCartList = () => {
    axios.post(`${API_URL.CUSTOMER_CART_ITEMS}/${JSON.parse(localStorage.getItem('user')).id}`).then((response) => {
      setCartTable(response.data);
      dispatch( setTestCartList(response.data) );
    })  
  }
  
  useEffect(() => { 
    try {
      if(JSON.parse(localStorage.getItem('user')).id) {
        fetchCartList() 
      }
    } catch (error) {
      
    }
    var testListFromCart = JSON.parse(localStorage.getItem("CartTestList"));
    if (testListFromCart != null) {
      const CalculateTotalTestPrice = testListFromCart.reduce(
        (previousValue, currentValue) =>
          parseInt(previousValue) + parseInt(currentValue.TestPrice),
        0
      );
      localStorage.setItem("cartItemTotal", CalculateTotalTestPrice);
      setTestTotal(CalculateTotalTestPrice);
    }
  }, []);

  const removeCartItem = (index,item) => {
    axios.post(API_URL.REMOVE_TO_CART,{
      user_id : JSON.parse(localStorage.getItem('user')).id,
      test_id : item.id,
      test_type : item.IsPackage == 'No' ? 'TEST' : 'PACKAGE',
    });

    CartTable.splice(index, 1);
    localStorage.setItem("CartTestList", JSON.stringify([...CartTable]));
    setCartTable([...CartTable]);
    dispatch(setTestCartList(JSON.parse(localStorage.getItem("CartTestList"))));

    const CalculateTotalTestPrice = CartTable.reduce(
      (previousValue, currentValue) =>
        parseInt(previousValue) + parseInt(currentValue.TestPrice),
      0
    );
    localStorage.setItem("cartItemTotal", CalculateTotalTestPrice);
    setTestTotal(CalculateTotalTestPrice);

    toast.error("Item has been Removed!");
  };

  return (
    <>
      <section className="comon-testdetail-banner resp-rem-mrgn">
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
                    <Link to="/for-patient">My Cart</Link>
                  </li>
                </ul>
                <h1>My Cart</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {CartTable.length !== 0 ? (
        <section className="total-carting">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="common-heading">
                  <h2>
                    <span>Package/Test </span> Selected
                  </h2>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="cart-ing table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Package/Test</th>
                        <th className="text-right">Type</th>
                        <th className="text-right">Unit Price(₹)</th>
                        <th className="text-right">Net Price</th>
                        <th className="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CartTable.map((item, index) => (
                        <tr key={index}>
                          <th scope="row">{item.TestName}</th>
                          <td className="text-right">
                            {item.IsPackage === "Yes" ? <span className="px-2 py-1 badge badge-success"><i className="fa fa-flask" aria-hidden="true"></i> Package </span> : <span className="px-2 py-1 badge badge-primary"><i className="fa fa-flask" aria-hidden="true"></i> Test </span>}
                          </td>
                          <td className="text-right">
                            &#8377;{item.TestPrice}
                          </td>
                          <td className="text-right">
                            &#8377; {item.TestPrice}
                          </td>
                          <td className="text-center clr-chng">
                            <Link to="">
                              <RiDeleteBinLine
                                className="text-danger"
                                onClick={() => removeCartItem(index,item)}
                              />
                            </Link>
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td className="text-right" colSpan={3}><b style={{ fontSize:'16px' }}>Total</b></td>
                        <td className="text-right"><b style={{ fontSize:'16px' }}>₹ {testTotal}</b></td>
                        <td>
                          <div className="case m-0 text-center">
                            <p>
                              <Link to="/checkout">Checkout</Link>
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="only-mobileresponsive">
                <div className="box-fisherr">
                <div className="col-lg-12 p-0">
                <div className="pack-name">
                <h3>Package/Test</h3>
                <p>11 DEOXY CORTISOL (LC-MS/MS)</p>
                <span class="px-2 py-1 badge badge-primary"><i class="fa fa-flask" aria-hidden="true"></i> Test </span>
                <div className="text-center">
                <div className="prce-net">
                <h4>Unit Price(₹)</h4>
                <p>₹1190</p>
                </div>
                <div className="prce-fnl">
                <h4>Net Price</h4>
                <p>₹ 1190</p>
                </div>
                </div>
                <Link to="">
                <RiDeleteBinLine
                className="text-danger"
                // onClick={() => removeCartItem(index,item)}
                />
                </Link>
                </div>          
                </div>
                </div>
                <div className="box-fisherr">
                <div className="col-lg-12 p-0">
                <div className="pack-name">
                <h3>Total</h3>
                <p>₹ 14280</p>
                <div class="case m-0 text-center"><p><a href="/checkout">Checkout</a></p></div>  
                </div>          
                </div>
                </div>
                </div>
                <div className="case">
                  <p>
                    <Link to="/for-patient">Add More Test</Link>
                    <Link className="bg-trsnper" to="/packages">
                      Add More Package
                    </Link>
                  </p>
                </div>
              </div>
              {/* <div className="col-lg-4">
                <div className="availab-lity ca-rtloc">
                  <h4>Total Amount</h4>
                  <table className="table">
                    <tbody>
                      <tr>
                        <th className="text-left">Subtotal</th>
                        <th className="text-right">&#8377;{testTotal}</th>
                      </tr>
                      <tr>
                        <td className="text-left">
                          <b>Total</b>
                        </td>
                        <td className="text-right">
                          <b>&#8377;{testTotal}</b>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="case text-right">
                    <p>
                      <Link to="/">Checkout</Link>
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      ) : (
        <div style={{ backgroundColor: "#f9f9f9" }} className="text-center">
          <div className="case rounded-0">
            <img src={emptyCart} alt="Cart is Empty" className="my-5" />
            <p>
              <Link to="/for-patient">Add Test</Link>
              <Link className="bg-trsnper" to="/packages">
                Add Package
              </Link>
            </p>
          </div>
          <hr className="w-75 mx-auto my-0" />
        </div>
      )}
    </>
  );
}
