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

export default function Solutions() {
    useEffect(() => {
        document.title = "Patients Consumers";
        window.scroll(0,0)
      }, []);
      var consumeing = {
        slidesToScroll: 1,
        infinite:true,
        slidesToShow: 6,
        focusOnSelect: true, 
        autoplay: true,
        dots: false,
        arrows: true,
        autoplaySpeed: 2000,
        responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 3,
                         
                    }
                },
                {
                breakpoint: 680,
                settings: {
                    slidesToShow: 2,
                     
                }
            },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                         
                    }
                },
        ]
    };    
  return (
    <div>
     <InnerCommonBanner /> 

     <section className="pat-con">
         <div className="container">
             <div className="row">
                <div className="col-lg-12">
                 
                <div className="common-heading"><h2> <span className='inlne'>Patients &</span> Consumers </h2></div>
                <p>Patient Care has always been the primary goal for all of us at Anand Diagnostic Laboratory. Apart from being of assistance during illness, we also strive to provide robust preventive healthcare services in the form of wellness packages to ensure that our patrons can identify complications early and address them before they become an issue.</p>
                <Sliders  {...consumeing} className='consumeing'>
                    <div className="box-cos">
                        <img src={paticon1} alt="" className="img-fluid"/>
                        <h4>Basic Health <br></br> Check-up</h4>  
                    </div> 
                    <div className="box-cos">
                        <img src={paticon2} alt="" className="img-fluid"/>
                        <h4>Executive/master<br></br> Health Check-up</h4>  
                    </div>   
                    <div className="box-cos">
                        <img src={paticon3} alt="" className="img-fluid"/>
                        <h4>Check-up <span>(Below 12 years of age)</span></h4>  
                    </div>   
                    <div className="box-cos">
                        <img src={paticon4} alt="" className="img-fluid"/>
                        <h4>Pre-manal <br></br>Health Ceckup</h4>  
                    </div>   
                    <div className="box-cos">
                        <img src={paticon5} alt="" className="img-fluid"/>
                        <h4>Bone <br></br>Health Package</h4>  
                    </div>   
                    <div className="box-cos">
                        <img src={paticon6} alt="" className="img-fluid"/>
                        <h4>Senior citizen <br></br> Health Check-up</h4>  
                    </div>
                    <div className="box-cos">
                        <img src={paticon1} alt="" className="img-fluid"/>
                        <h4>Basic Health <br></br> Check-up</h4>  
                    </div> 
                    <div className="box-cos">
                        <img src={paticon2} alt="" className="img-fluid"/>
                        <h4>Executive/master<br></br> Health Check-up</h4>  
                    </div>   
                    <div className="box-cos">
                        <img src={paticon3} alt="" className="img-fluid"/>
                        <h4>Check-up <span>(Below 12 years of age)</span></h4>  
                    </div>   
                    <div className="box-cos">
                        <img src={paticon4} alt="" className="img-fluid"/>
                        <h4>Pre-manal <br></br>Health Ceckup</h4>  
                    </div>   
                    <div className="box-cos">
                        <img src={paticon5} alt="" className="img-fluid"/>
                        <h4>Bone <br></br>Health Package</h4>  
                    </div>   
                    <div className="box-cos">
                        <img src={paticon6} alt="" className="img-fluid"/>
                        <h4>Senior citizen <br></br> Health Check-up</h4>  
                    </div>  
                      
                </Sliders>     
                </div>
                </div>
             </div> 
     </section> 

     <section className='loyality-program'>
        <div className="container">
        <div className="row">
            
            <div className="col-lg-5">

            </div>
            <div className="col-lg-7">
                <div className="loyalty-progrm text-left">
                <div className="common-heading lite"><h2> Loyalty Program </h2></div>
                    <ul>
                        <li>It is no secret that the success of any establishment is in the hands of its clients. At ADL, the trust of our patrons and their loyalty is our most valuable asset. In order to extend certain value added services to our customers, we have launched the V-card service, which comes with the following benefits among others.</li>
                        <li>10% discount on all bills. (For individuals under 60 years of age. Individuals over 60 are entitled to the standard Senior Citizen discounts of 20%).</li>
                        <li>Prompt attention and priority service at a dedicated counter whenever possible.</li>
                        <li>History/graph of previous results wherever applicable.</li>
                    </ul>
                </div>
            </div>
        </div>    
        </div> 
     </section>

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
            <div className="row align-items-center">
                    <div className="col-lg-5">
                    <div className="imge-set">
                    <img src={consumerimg2} alt="" className="img-fluid"/>
                    </div>
                    </div>
                    <div className="col-lg-7">
                    <div className="contnt-set">
                    <div className="common-heading"><h2> <span>“Multiple Collection Centres </span> across Bangalore” </h2></div>
                    <p>The traffic of Bangalore is a constant bother to its residents due to which, travelling from one part of the city to another has become very difficult. In order to make the diagnostic experience easier for our patrons, we have multiple collection centres spread across the city, with plans to expand into many more areas of Bangalore in the near future. Now traffic woes will no longer come in the way of your diagnostic healthcare needs!</p> 
                    </div>
                    </div>
                </div>
            <div className="row align-items-center">
                    <div className="col-lg-7">
                    <div className="contnt-set">
                    <div className="common-heading"><h2> “Giving your Sample” </h2></div>
                    <p>Giving a sample for testing is the primary experience for any individual who enters a laboratory. Usually this experience involves a drastic change to one’s schedule, an out of the way trip to the Laboratory, and a considerable time waiting for one’s turn. What if this experience was made simpler?</p>
                    <div className='step-pairing'>
                    Anand Diagnostic Laboratory <span>has multiple solutions to make the diagnostic experience more relaxed for our patients and consumers. </span>
                    </div> 
                    </div>
                    </div>
                    <div className="col-lg-5">
                    <div className="imge-set">
                    <img src={consumerimg3} alt="" className="img-fluid"/>
                    </div>
                </div>
                </div>
            </div> 
     </section>

     <section className='hme-colcton'>
         <div className="container">
             <div className="row align-items-center">
                 <div className="col-lg-6">
                   <div className="anddn-lab">
                   <div class="common-heading lite"><h2> “Anand @Home Home Collection” </h2></div>
                   <p>At ADL, we understand that many of our patrons may find it difficult to travel to their nearest collection centre for their diagnostic tests. To assist such individuals, ADL has launched the 60 minutes home collection facility on appointment.</p>
                   <p>Our team of home collection personnel are highly trained phlebotomists equipped to deliver the best service.<br></br>
                   For more information on, and to book a home collection call 18004251974</p>
                    </div> 
                 </div>
                 <div className="col-lg-6">
                     <div className="anddn-labfrm">
                     <div class="row">
   <div class="form-data col-lg-6">
       <input class="input100" type="text" name="name" placeholder="Name *" required="" />
   </div> 
   <div class="form-data col-lg-6">
       <input class="input100" type="text" name="name" placeholder="Email *" required="" />
   </div> 
   <div class="form-data col-lg-6">
       <input class="input100" type="text" name="name" placeholder="Mobile *" required="" />
   </div> 
   <div class="form-data col-lg-6">
       <input class="input100" type="date" name="name" placeholder="DOB *" required="" />
   </div> 
   <div class="form-data col-lg-6">
       <input class="input100" type="text" name="name" placeholder="Gender *" required="" />
   </div> 
   <div class="form-data col-lg-6">
       <input class="input100" type="text" name="name" placeholder="Specify The Test For Home Collection" required="" />
   </div> 
   <div class="form-data col-lg-6">
       <input class="input100" type="text" name="name" placeholder="Upload Prescription *" required="" />
   </div> 
   <div class="form-data col-lg-6">
       <input class="input100" type="text" name="name" placeholder="Preferred Date1 *" required="" />
   </div> 
   <div class="form-data col-lg-6">
       <input class="input100" type="text" name="name" placeholder="Preferred Date 2" required="" />
   </div> 
   <div class="form-data col-lg-6">
       <input class="input100" type="text" name="name" placeholder="Preferred Time *" required="" />
   </div> 
   <div class="form-data col-lg-6">
       <input class="input100" type="text" name="name" placeholder="Address *" required="" />
   </div> 
   <div class="form-data col-lg-6">
       <input class="input100" type="text" name="name" placeholder="Pincode *" required="" />
   </div>  
   <div class="form-data text-center col-lg-12">
       <input type="submit" name="submit" required="" value="SUBMIT" />
   </div> 
</div>
                     </div>
                 </div>
             </div>
         </div>
     </section>

     <section className='report-partion text-center'>
        <div className="container">
            <div className="row">
            <div className="col-lg-12">
            <div class="common-heading"><h2> Getting your Report </h2></div>
            <p>Collecting of test reports has never been easier. Once ready, all reports are stored in PDF form on our servers. Patrons can log in to our website and download the reports right on to their computers or mobile devices immediately after our doctors release a report. Certain types of reports like histopathology and radiology reports are accompanied by physical material like slides, paraffin blocks, X-Ray films and so on. These items may be collected from the nearest collection centre upon prior intimation.</p>
            <div className="cmn-buton">
                <p>
                <Link to=''>Login</Link>
                </p>
            </div>
            </div>
            </div>
        </div>
     </section>

    </div>
  )
}