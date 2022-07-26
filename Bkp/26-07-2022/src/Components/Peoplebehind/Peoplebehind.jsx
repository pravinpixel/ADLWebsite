import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bannerimage from "../../assets/images/inner-banner-2.jpg"; 
import people1 from "../../assets/images/people-1.jpg"; 
import people2 from "../../assets/images/people-2.jpg"; 
import people3 from "../../assets/images/people-3.jpg"; 
import people4 from "../../assets/images/people-4.jpg"; 
import people5 from "../../assets/images/people-5.jpg"; 
import people6 from "../../assets/images/people-6.jpg"; 
import people7 from "../../assets/images/people-7.jpg"; 
import people8 from "../../assets/images/people-8.jpg"; 


export default function Peoplebhind() {
    useEffect(() => {
        document.title = "People Behind";
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
                      <li> People Behind </li>
                    </ul>
                    <h1>
                    Haematology services extending<br></br> beyond the blood smear
                    </h1>
                </div>
            </div>
        </div>
        </div>
</section>  

<section className='people-function'> 
<div className="container">
    <div className="row">
        <div className="col-lg-12 p-0">
        <div className="col-lg-12">
            <div className="common-heading"><h2> <span className='inlne'>The Core</span> Management </h2></div>
                 <p>Over 40 years ago, when doctors relied on stethoscope and pulse as their primary investigation tools, one man set up a diagnostic laboratory believing that the future of investigative medicine will rely upon laboratory tests as a primary diagnostic tool. Today, this laboratory has grown to incorporate the latest in diagnostic medicine, supporting clinicians across the region with reliable reports for accurate diagnosis and treatment of illnesses.</p>
        </div> 
        

<div className="row">

<div className="col-sm-12 col-md-6 col-lg-3 aos-init aos-animate" data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">
<div className="box-fixer nwe-fex">
<a href="" data-toggle="modal" data-target="#ram">
<img src={people1} alt="call" className="img-fluid" />
<h4>Dr. A. V. Ramaprasad, <span> Founder & Director</span></h4>
</a> 
</div>
</div>

<div className="modal fade cstm" id="ram" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog" role="document">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title cs-tm" id="exampleModalLabel">Dr. A. V. Ramaprasad,
<span>Founder & Director</span></h5>
<button type="button" className="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>
<div className="modal-body">
<div className="mdl-img">
<img src={people1} alt="call" className="img-fluid" />
</div>
<div className="mdl-cnt">
<p>Dr.Ramaprasad is the founder Director of Anand Diagnostic Laboratory. From its humble beginnings in 1974, ADL has grown leaps and bounds over the years under his vision and leadership. Dr. Ramaprasad started ADL at a time when laboratory medicine was just emerging as a new specialty. He saw the future of lab medicine and dedicated his life to building an institution on the foundation of good ethics and values to build a brand that will epitomize good laboratory medicine. To this day, Anand Diagnostic Laboratory sustains these values in all its interactions within the organization and beyond.</p>
        
<p>Prior to this venture, Dr. Ramaprasad was a well-respected teacher in the academic field. He taught Biochemistry, Pathology and Microbiology at prestigious institutions like Bangalore Medical College, KMC Hubli and JNMC, Belgaum – to graduate and post graduate students, many of whom are currently either teaching or practicing laboratory medicine.<br></br>Dr. Ramaprasad obtained his MD in Pathology and Bacteriology from Kasturba Medical College (KMC), Mangalore in 1966. </p>
</div>
</div> 
</div>
</div>
</div> 

<div className="col-sm-12 col-md-6 col-lg-3 aos-init aos-animate" data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">
<div className="box-fixer nwe-fex">
<a href="" data-toggle="modal" data-target="#suj">
<img src={people2} alt="call" className="img-fluid" />
<h4>Dr. Sujay Prasad, <span> Technical Director</span></h4>
</a> 
</div>
</div>

<div className="modal fade cstm" id="suj" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog" role="document">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title cs-tm" id="exampleModalLabel">Dr. Sujay Prasad,
<span>Technical Director</span></h5>
<button type="button" className="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>
<div className="modal-body">
<div className="mdl-img">
<img src={people2} alt="call" className="img-fluid" />
</div>
<div className="mdl-cnt">
<p>Dr.Sujay Prasad is the creative force behind new innovations, technology initiatives and business process improvements at Anand Diagnostic Laboratory. He has been instrumental in expanding the service capability of ADL from facility expansion to acquisition of state of the art equipment. With his zero tolerance attitude to errors, he has designed innovative methods with focus on minimizing errors across all operating processes. He oversees all IT initiatives and has implemented interesting IT enabled ideas such as automated report printing kiosks and online results reporting, much ahead of the industry adoption. He is also a certified lead assessor for NABL accreditation and has conducted technical assessments overseas.</p>

<p>Dr.Sujay Prasad obtained his MD in Pathology from the Mumbai University and joined Anand Diagnostic Laboratory thereafter in 1995.</p>
</div>
</div> 
</div>
</div>
</div> 

<div className="col-sm-12 col-md-6 col-lg-3 aos-init aos-animate" data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">
<div className="box-fixer nwe-fex">
<a href="" data-toggle="modal" data-target="#jay">
<img src={people3} alt="call" className="img-fluid" />
<h4>Dr. N. Jayaram, <span> Managing Director </span></h4>
</a> 
</div>
</div>

<div className="modal fade cstm" id="jay" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog" role="document">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title cs-tm" id="exampleModalLabel">Dr. N. Jayaram,
<span>Managing Director</span></h5>
<button type="button" className="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>
<div className="modal-body">
<div className="mdl-img">
<img src={people3} alt="call" className="img-fluid" />
</div>
<div className="mdl-cnt">
<p>Dr. Jayaram is the silent force behind the operational excellence of the lab. He joined Anand Diagnostic Laboratory in 1988 and has ever since followed the footsteps of his mentor Dr. Ramaprasad. Together they were instrumental in bringing operational excellence in the laboratory and expanding into specialized tests ranging from renal transplantation, cytopathology and histopathology to many other areas.</p>

<p>Dr. Jayaram is a certified lead assessor for NABL accreditation, and has conducted assessments both in India and Overseas. He is also actively involved in training other laboratory personnel on accreditation and internal audit requirements. He is academically very active and participates regularly in national and international scientific meetings as faculty.</p>

<p>Dr. Jayaram obtained his MD in Pathology from the Post Graduate Institute of Medical Education and research, Chandigarh. Subsequently he also acquired additional experience in Cytopathology and Immunopathology from the same Institution.</p>
</div>
</div> 
</div>
</div>
</div>   

<div className="col-sm-12 col-md-6 col-lg-3 aos-init aos-animate" data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">
<div className="box-fixer nwe-fex">
<a href="" data-toggle="modal" data-target="#she">
<img src={people4} alt="call" className="img-fluid" />
<h4>Ms. Sheela Ashok, <span> Director & Quality </span></h4>
</a> 
</div>
</div>

<div className="modal fade cstm" id="she" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog" role="document">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title cs-tm" id="exampleModalLabel">Ms. Sheela Ashok, <span> Director & Quality </span></h5>
<button type="button" className="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>
<div className="modal-body">
<div className="mdl-img">
<img src={people4} alt="call" className="img-fluid" />
</div>
<div className="mdl-cnt">
<p>Ms. Sheela Ashok joined Anand Diagnostic Laboratory in 2003 as a Joint Quality Manager. Under the mentorship of Dr. Jayaram she gradually took over the responsibility of overseeing the Quality requirements of ADL and replaced him as Quality Manager in 2012. During her tenure in ADL, Ms. Sheela Ashok has been a driving force in introducing and implementing key Quality Monitoring activities like competency assessment of technical staff, monitoring of Sigma in various processes, and risk management. Being an extremely meticulous and analytical person, Ms. Sheela Ashok has acquired a strong foundation in QC analytics and has provided training regarding the same to doctors and technicians both within and beyond the organisation.</p>
</div>
</div> 
</div>
</div>
</div>  


</div>
        </div>
    </div>
</div>
</section>

</div>

)
}
