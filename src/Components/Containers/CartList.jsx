import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function CartList() {
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
                                    <Link to="/for-patient">Book a Test</Link>
                                </li>
                                <li> / </li>
                                <li>
                                    <Link to="">Angiotensin Converting Enzyme</Link>
                                </li>
                            </ul>
                            <h1>
                                Book Lab Tests <span>Anywhere - Anytime</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}
