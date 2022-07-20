import React, { useEffect } from 'react'
import Sliders from 'react-slick'
import InnerCommonBanner from './Sections/InnerCommonBanner'; 
import paticon1 from '../../assets/images/pat-icon-1.png'
import paticon2 from '../../assets/images/pat-icon-2.png'
import paticon3 from '../../assets/images/pat-icon-3.png'
import paticon4 from '../../assets/images/pat-icon-4.png'
import paticon5 from '../../assets/images/pat-icon-5.png'
import paticon6 from '../../assets/images/pat-icon-6.png' 
import consumerimg1 from '../../assets/images/consumerimg1.jpg' 
import consumerimg2 from '../../assets/images/consumerimg2.jpg' 
import consumerimg3 from '../../assets/images/consumerimg3.jpg' 
import { Link } from 'react-router-dom';

export default function DriveThroughBloodCollection() {
    useEffect(() => {
        document.title = "Drive Through Blood Collection";
        window.scroll(0,0)
      }, []);
  return (
    <div>
     <InnerCommonBanner /> 

  

     <section className='blood-colleion'>
        <div className="container">
            <div className="row align-items-center">
                    <div className="col-lg-7">
                    <div className="contnt-set">
                    <div className="common-heading"><h2> <span>“Drive-Through </span>Blood Collection service” </h2></div>
                    <p>The latest service offered by ADL is the revolutionary drive-through blood collection service at Shivajinagar. Inspired by the established drive-through fast food restaurant system across the world, the drive-through blood collection service allows an individual to go through the process of registering for the necessary blood tests and giving the blood sample without having to even get out of their car! This facility, housed in the basement of our new 60,000 Sft premises, has been designed to ensure complete safety and hygiene for our patrons and staff with an efficient ventilation system and a brightly lit, designated phlebotomy section for privacy and cleanliness.</p>
                    <div className='step-pairing'>
                    <span>The Drive-Through Blood Collection Service is operational from </span> 
                     Monday to Saturday, from 7:00AM to 11:00AM.
                    </div>
                    <div className="cmn-buton">
                    <p>
                    <Link to=''>Book Now</Link>   
                    </p>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-5">
                    <div className="imge-set">
                    <img src={consumerimg1} alt="" className="img-fluid"/>
                    </div>
                </div>
                </div> 
            </div> 
     </section>

 

    </div>
  )
}