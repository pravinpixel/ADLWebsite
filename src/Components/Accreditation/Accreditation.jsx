import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bannerimage from "../../assets/images/inner-banner-2.jpg";
import awardinnimg from "../../assets/images/award-inner.png";
import certimg1 from "../../assets/images/cer-1.jpg";
import certimg2 from "../../assets/images/cer-2.jpg";
import certimg3 from "../../assets/images/cer-3.jpg";
import certimg4 from "../../assets/images/cer-3.jpg";

export default function Accreditation() {
    useEffect(() => {
        document.title = "Accreditation";
        window.scroll(0,0)
      }, []);
  return (
    <div>
        <section className='inner-banner'>
    <img src={bannerimage} alt="call" className="img-fluid" />
        <div className="inner-caption">
        <div className="container">
            <div className="row">
                <div className="caption-details bnr-txt">
                    <ul>
                      <li><Link to='/'> Home </Link></li>
                      <li> / </li>  
                      <li><Link to='/about-us'> About Us </Link></li>
                      <li> / </li> 
                      <li> Accreditation </li>
                    </ul>
                    <h1>
                    Haematology services extending<br></br> beyond the blood smear
                    </h1>
                </div>
            </div>
        </div>
        </div>
</section>       

<section className='our-accrediation'>
      <div className="container">
        <div className="row align-items-center">
           <div className="col-lg-12">
           <div className="common-heading"><h2> <span>Our</span>
           Accreditation</h2></div>
           </div>
           <div className="col-lg-10">
           <p>ADL was first accredited in 2001, and we were the first diagnostic laboratory in South India to gain NABL accreditation.</p>

           <p>According to NABL, ‘Laboratory Accreditation provides formal recognition of competent laboratories, thus providing a ready means for customers to find reliable testing and calibration services in order to meet their demands’.</p>

           <p>We were ready for accreditation much before the formal accreditation agencies showed up. We always believed in following best practices, error free processes and strict compliance to quality standards. The NABL accreditation was simply a validation of everything we were already doing.</p>

           <p>Best practices are not a one-time affair for purpose of getting some certification. For us, it is an ongoing obsession.</p>
           </div>
           <div className="col-lg-2">
            <div className="war-awa text-right">
            <img src={awardinnimg} alt="call" className="img-fluid" />
            </div>
           </div>
           <div className="col-lg-12">
            <div className="certifi-lsts text-center">
              <ul>
                <li>
                <img src={certimg1} alt="call" className="img-fluid" />
                <h4> ADL NABL <span>Certificate</span></h4>
                <div className="cmn-buton">
                <p>
                <Link to=''>View Certificate</Link>
                </p>
                </div>
                </li>
                <li>
                <img src={certimg2} alt="call" className="img-fluid" />
                <h4> ADL Scope of <span> Accreditation </span></h4>
                <div className="cmn-buton">
                <p>
                <Link to=''>View Certificate</Link>
                </p>
                </div>
                </li>
                <li>
                <img src={certimg3} alt="call" className="img-fluid" />
                <h4> NARL <span>Certificate</span></h4>
                <div className="cmn-buton">
                <p>
                <Link to=''>View Certificate</Link>
                </p>
                </div>
                </li>
                <li>
                <img src={certimg4} alt="call" className="img-fluid" />
                <h4> Scope <span> NARL </span></h4>
                <div className="cmn-buton">
                <p>
                <Link to=''>View Certificate</Link>
                </p>
                </div>
                </li>
              </ul>
            </div>
           </div>
        </div>
      </div>
    </section>
    </div>
  )
}