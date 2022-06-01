import React from 'react'
import { Link } from 'react-router-dom'
import call from '../../../assets/images/call.png'
import mail from '../../../assets/images/mail.png'

export default function ReachUs() {
  return (
    <section className="reach-uslinks">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                    <div className="call-us">
                        <ul>
                            <li>
                                <Link to="/">
                                    <img src={call} alt="call" className="img-fluid"/>
                                    <h4>1800 425 1974 <span>Free Sample Collections</span></h4>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <img src={mail} alt="mail" className="img-fluid"/>
                                    <h4>enquiry@anandlab.com <span>Need support? Drop us an email</span></h4>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                    <div className="share-us">
                        <ul className="footer-socials">
                            <li>
                                <Link to="/" target="_blank"> <i className="fa fa-facebook" aria-hidden="true"></i> </Link>
                            </li>
                            <li>
                                <Link to="/" target="_blank"> <i className="fa fa-twitter" aria-hidden="true"></i> </Link>
                            </li>
                            <li>
                                <Link to="/" target="_blank"> <i className="fa fa-instagram" aria-hidden="true"></i> </Link>
                            </li>
                            <li>
                                <Link to="/" target="_blank"> <i className="fa fa-linkedin" aria-hidden="true"></i> </Link>
                            </li>
                            <li>
                                <Link to="/" target="_blank"> <i className="fa fa-youtube-play" aria-hidden="true"></i> </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
