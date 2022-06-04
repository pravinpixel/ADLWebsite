import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import Sliders from 'react-slick';
import TestCard from "./TestCardComponent";
import PackageCard from './PackageCardComponent'

export default function CartList() {
    var settings = {
        slidesToScroll : 1,
        infinite       : true,
        slidesToShow   : 4,
        focusOnSelect  : false, 
        autoplay       : true,
        dots           : false,
        arrows         : true,
        autoplaySpeed  : 4000,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            },
        ]
      };
      var settings = {
    slidesToScroll: 1,
    infinite:true,
    slidesToShow: 4,
    focusOnSelect: true, 
    autoplay: true,
    dots: false,
    arrows: true,
    autoplaySpeed: 3000,
    responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
              }
          },
          {
              breakpoint: 900,
              settings: {
                  slidesToShow: 2,
                  centerMode: true,
              }
          },
          {
            breakpoint: 680,
            settings: {
                slidesToShow: 2,
                centerMode: true,
            }
        },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  centerMode: true,
              }
          },
    ]
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
                <h1>
                My Cart
                </h1>
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
                <h2><span>Package/Test </span> Selected</h2>
            </div>
            </div>
            <div className="col-lg-8">
              <div className="cart-ing table-responsive">
                <table className="table" width="100%" border="0" cellspacing="0" cellpadding="0">
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
                    <tr>
                      <th scope="row">Cholesterol Total, Serum</th>
                      <td className="text-right">Test</td>
                      <td className="text-right">&#8377;180</td>
                      <td className="text-center">-</td>
                      <td className="text-right">&#8377;180</td>
                      <td className="text-center clr-chng">
                        <Link to=""> <RiDeleteBinLine /> </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Cholesterol Total, Serum</th>
                      <td className="text-right">Test</td>
                      <td className="text-right">&#8377;180</td>
                      <td className="text-center">-</td>
                      <td className="text-right">&#8377;180</td>
                      <td className="text-center clr-chng">
                        <Link to=""> <RiDeleteBinLine /> </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Cholesterol Total, Serum</th>
                      <td className="text-right">Test</td>
                      <td className="text-right">&#8377;180</td>
                      <td className="text-center">-</td>
                      <td className="text-right">&#8377;180</td>
                      <td className="text-center clr-chng">
                        <Link to=""> <RiDeleteBinLine /> </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row"><b>Total</b></th>
                      <td className="text-right">&nbsp;</td>
                      <td className="text-right"><b>&#8377;180</b></td>
                      <td className="text-center">&nbsp;</td>
                      <td className="text-right"><b>&#8377;180</b></td>
                      <td className="text-center">&nbsp;</td>
                    </tr>   
                  </tbody>
                </table>
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
          </div>
        </div>
      </section>
      <section className="diagnostics most-poptst text-left">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="common-heading">
                            <h2><span>Other related </span>Tests </h2>
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
            <h2><span>Other </span> Health Packages </h2>
            </div>
            <br/>
            <Sliders {...settings} className="popular-lists">
              <PackageCard/>
              <PackageCard/>
              <PackageCard/>
              <PackageCard/>
              <PackageCard/>
              <PackageCard/>
              <PackageCard/>
              <PackageCard/>
              <PackageCard/>
              <PackageCard/>
            </Sliders>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
