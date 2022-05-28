import React from 'react'
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
                                <a href="">
                                    <img src={call} alt="" className="img-fluid"/>
                                    <h4>1800 425 1974 <span>Free Sample Collections</span></h4>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img  src={mail} alt="" className="img-fluid"/>
                                    <h4>enquiry@anandlab.com <span>Need support? Drop us an email</span></h4>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                    <div className="share-us">
                        <ul className="footer-socials">
                            <li>
                                <a href="" target="_blank"> <i className="fa fa-facebook" aria-hidden="true"></i> </a>
                            </li>
                            <li>
                                <a href="" target="_blank"> <i className="fa fa-twitter" aria-hidden="true"></i> </a>
                            </li>
                            <li>
                                <a href="" target="_blank"> <i className="fa fa-instagram" aria-hidden="true"></i> </a>
                            </li>
                            <li>
                                <a href="" target="_blank"> <i className="fa fa-linkedin" aria-hidden="true"></i> </a>
                            </li>
                            <li>
                                <a href="" target="_blank"> <i className="fa fa-youtube-play" aria-hidden="true"></i> </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
