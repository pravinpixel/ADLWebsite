import React, { useEffect } from 'react'
import Sliders from 'react-slick'
import InnerCommonBanner from './Sections/InnerCommonBanner'   
import vedeoimg1 from '../../assets/images/vedd.jpg'  
import vedeoimg2 from '../../assets/images/vedeo-img-2.jpg'  
import vedeoimg3 from '../../assets/images/vedeo-img-3.jpg'  
import { Link } from 'react-router-dom';

export default function Department() {
    useEffect(() => {
        document.title = "Department";
        window.scroll(0,0)
      }, []);
  return (
    <div>
     <InnerCommonBanner />  

  <section className='presnt-pakges'>
        <div className="container">
            <div className="row align-items-center">
                    <div className="col-lg-12">
                    <div className="text-center"> 
                    <p>A compilation of valuable information not only helps in increasing the knowledge base of our customers, but also helps to keep them in touch with the beneficial technology and advancements in the field of discussion.</p> 
                    </div>
                    </div> 
                </div> 
            </div> 
  </section>

  <section className='getng-reprt depar-tment pt-0'>
    <div className="container">
      <div className='distngt-strctre'>
      <div className="row align-items-center"> 
            <div className='col-lg-8'>
              <h4>Wellness Packages</h4>
              <p>Monitoring health at regular intervals avoids the ignorance of early signs of possible ailments. ADL provides with economical and effectual wellness packages that aid you in staying healthy.</p>
            </div>
            <div className='col-lg-4 text-right'>
            <div class="cmn-buton"><p><a href="/">Call Back</a></p><p><a href="/">Enquire</a></p></div>
            </div> 
      </div>
      </div>
      </div>   
    </section>

    <section className='vedeo-galery depa-rtvet pt-0'>
    <div className="container">
    <div className="row align-items-center">

    <div className='col-lg-12 text-center mb-5 pb-5'>
    <div className="vedou-heading"> 
    <span>Anand Lab’s Drive-through Blood Collection Service – The First in the World</span>
    <Link to='/'> <img src={vedeoimg1} alt="call" className="img-fluid" /> </Link>
    <h5>The Drive-Through Blood Collection Service is<br/> operational from Monday to Saturday, from 7:00AM to 11:00AM.</h5>
    </div>
    </div>  

    <div className='col-lg-12 text-center'>
    <div className="common-heading"><h2> Gallery </h2></div>
    </div> 

    <div className='col-lg-6'>
    <div className='vdeo-img'>
    <Link to='/'> <img src={vedeoimg2} alt="call" className="img-fluid" /> </Link>
    </div>
    </div> 
    <div className='col-lg-6'>
    <div className='vdeo-img'>
    <Link to='/'> <img src={vedeoimg3} alt="call" className="img-fluid" /> </Link>
    </div>
    </div>
    </div>
    </div>
    </section>


    </div>
  )
}