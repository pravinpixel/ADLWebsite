import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import Sliders from "react-slick";
import TestCard from "./TestCardComponent";
import PackageCard from "./PackageCardComponent";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setTestCartList } from "../../Redux/Actions/TestAction";
import emptyCart from "../.././assets/images/cart_empty.png";
import BookedTestSliders from "../Home/Sections/BookedTestSliders";
import PackagesSliders from "../Home/Sections/PackagesSliders";

export default function CartList() {
  let navigate = useNavigate();
  var settings = {
    slidesToScroll: 1,
    infinite: true,
    slidesToShow: 4,
    focusOnSelect: false,
    autoplay: true,
    dots: false,
    arrows: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [CartTable, setCartTable] = useState([]);
  const [testTotal, setTestTotal] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scroll(0, 0);
    setCartTable(JSON.parse(localStorage.getItem("CartTestList")));
    var testListFromCart = JSON.parse(localStorage.getItem("CartTestList"));
    if (testListFromCart != null) {
      const CalculateTotalTestPrice = testListFromCart.reduce(
        (previousValue, currentValue) =>
          parseInt(previousValue) + parseInt(currentValue.TestPrice),
        0
      );
      localStorage.setItem("cartItemTotal", CalculateTotalTestPrice);
      setTestTotal(CalculateTotalTestPrice);
    } else {
      navigate('/')
    }
  }, []);

  const removeCartItem = (index) => {
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
                            {item.IsPackage === "Yes" ? "Package" : "Test"}
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
                                onClick={() => removeCartItem(index)}
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
              <Link className="bg-trsnper" to="/for-patient">
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
