import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import Sliders from "react-slick";
import TestCard from "./TestCardComponent";
import PackageCard from "./PackageCardComponent";
import  toast  from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setTestCartList } from "../../Redux/Actions/TestAction";
import emptyCart from '../.././assets/images/cart_empty.png'

export default function CartList() {
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

  const [CartTable , setCartTable] = useState([]);
  const [testTotal , setTestTotal] = useState(0)
  const dispatch = useDispatch();
    
  
  useEffect(() => {
    window.scroll(0,0)
    // return () => {
      setCartTable(JSON.parse(localStorage.getItem('CartTestList')));
      var testListFromCart = JSON.parse(localStorage.getItem('CartTestList'))
      if(testListFromCart != null) {
        const CalculateTotalTestPrice = testListFromCart.reduce(
          (previousValue, currentValue) => previousValue += currentValue.TestPrice, 0
        )
        localStorage.setItem('cartItemTotal',  CalculateTotalTestPrice);
        setTestTotal(CalculateTotalTestPrice)
      } else {
        window.location.href = "/";
      }
    // }
  }, [])
  
  const removeCartItem = (index) => {
    CartTable.splice(index, 1);
    localStorage.setItem('CartTestList', JSON.stringify([...CartTable]));
    setCartTable([...CartTable]);
    dispatch(setTestCartList(JSON.parse(localStorage.getItem('CartTestList'))));
 
 
    const CalculateTotalTestPrice = CartTable.reduce(
      (previousValue, currentValue) => previousValue += currentValue.TestPrice,0
    )
    localStorage.setItem('cartItemTotal',  CalculateTotalTestPrice);
    setTestTotal(CalculateTotalTestPrice)

    toast.error('Item has been Removed!');
  }

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
            <div className="col-lg-8">
              <div className="cart-ing table-responsive">
                {
                  CartTable.length !== null  ? 
                    CartTable.length !== 0 ?
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Package/Test</th>
                            <th className="text-right">Type</th>
                            <th className="text-right">Unit Price( )</th>
                            <th className="text-center">Discount</th>
                            <th className="text-right">Net Price</th>
                            <th className="text-center">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            CartTable.map((item, index) => (
                              <tr key={index}>
                                <th scope="row">{item.TestName}</th>
                                <td className="text-right">Test</td>
                                <td className="text-right">&#8377;{item.TestPrice}</td>
                                <td className="text-center">-</td>
                                <td className="text-right">
                                  &#8377; {item.TestPrice} 
                                </td>
                                <td className="text-center clr-chng">
                                  <Link to="">
                                    <RiDeleteBinLine className="text-danger" onClick={() => removeCartItem(index) } />
                                  </Link>
                                </td>
                              </tr>
                            ))
                            }
                        </tbody>
                      </table>
                    :  <span>
                        <img src={emptyCart} alt="Cart is Empty" />
                      </span>
                  : null
                }
              </div>
              <div className="case">
                <p>
                  <Link to="/">Add More Test</Link>
                  <Link className="bg-trsnper" to="/">
                    Add More Package
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="availab-lity ca-rtloc">
                <h4>Payment</h4>
                <table className="table">
                  <tbody>
                  <tr>
                    <th className="text-left">Subtotal</th>
                    <th className="text-right">&#8377;{testTotal}</th>
                  </tr>
                  <tr>
                    <td className="text-left">Discount (-)</td>
                    <td className="text-right">- &#8377; 0</td>
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
            </div>
          </div>
        </div>
      </section>
      <section className="diagnostics most-poptst text-left">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="common-heading">
                <h2>
                  <span>Other related </span>Tests
                </h2>
              </div>
              <Sliders {...settings} className="topbooked-cases">
                <TestCard />
                <TestCard />
                <TestCard />
                <TestCard />
                <TestCard />
                <TestCard />
                <TestCard />
                <TestCard />
                <TestCard />
                <TestCard />
                <TestCard />
                <TestCard />
                <TestCard />
                <TestCard />
                <TestCard />
                <TestCard />
              </Sliders>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-packages">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="common-heading">
                <h2>
                  <span>Other </span> Health Packages
                </h2>
              </div>
              <br />
              <Sliders {...settings} className="popular-lists">
                <PackageCard />
                <PackageCard />
                <PackageCard />
                <PackageCard />
                <PackageCard />
                <PackageCard />
                <PackageCard />
                <PackageCard />
                <PackageCard />
                <PackageCard />
              </Sliders>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
