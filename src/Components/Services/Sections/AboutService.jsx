import React from 'react'
import manualtheraphyicon1 from "../../../assets/images/manual-theraphy-icon-1.png"
import manualtheraphyicon2 from "../../../assets/images/manual-theraphy-icon-2.png"
import manualtheraphyicon3 from "../../../assets/images/manual-theraphy-icon-3.png"
import manualtheraphyicon4 from "../../../assets/images/manual-theraphy-icon-4.png"
import manualtheraphy from "../../../assets/images/manual-theraphy.jpg"

export default function AboutService() {
  return (
    <section className="about-services">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
            <div className="special-instruction">
                <h3>Special Instructions</h3>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                    Types of techniques 
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                    Indications
                    </a>
                  </li> 
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className="detilos-expl">
                    <ul>
                      <li>
                      a) Samples are stable for 1 week refrigerated at 2-8 0 C.   
                      </li>
                      <li>
                      b) Frozen sample is stable for several months. _Interfering substances:<br/>
                      ACE activity is inhibited by EDTA, Heavy metal ions, Captopril. ACE activity should mainly be used to monitor activity of disease and not for primary diagnosis. However, high levels are found in about 85% cases with active pulmonary sarcoidosis.    
                      </li>
                    </ul>
                  </div>
                  </div>
                  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                      <div className="row detilos-expl pb-0">
                    <div className="col-lg-6 pl-0">
                      <div className="indication-details">
                        <ul>
                        <h4>Mobilisation</h4>
                        <img src={manualtheraphyicon1} alt="call" className="img-fluid" />
                            <li>Any Joint pain</li>
                            <li>Back/Neck pain</li>
                            <li>Osteoarthitis</li>
                            <li>Rheumatoid Arthritis</li>
                            <li>Sciatica</li>
                            <li>Frozen shoulder</li>
                            <li>Tennis Elbow</li>
                            <li>Calcaneal Spur</li>
                            <li>Plantar fascitis</li>
                        </ul>
                        </div> 
                    </div>
                    <div className="col-lg-6 pl-0">
                      <div className="indication-details">
                        <ul>
                        <h4>Neural Mobilisation</h4>
                        <img src={manualtheraphyicon2} alt="call" className="img-fluid" />
                            <li>Sciatica</li>
                            <li>Carpal Tunnel Syndrome</li>
                            <li>Intervertebral Disc Prolapse</li>
                            <li>Radiculopathy</li>
                            <li>Dequervain’s tenosynovitis</li>
                            <li>Tennis elbow</li>
                        </ul>
                        </div> 
                    </div> 
                    </div>
                      <div className="row detilos-expl">
                    <div className="col-lg-6 pl-0"> 
                       <div className="indication-details">
                        <ul>
                        <h4>Manipulation</h4>
                        <img src={manualtheraphyicon3} alt="call" className="img-fluid" />
                            <li>Mechanical Joint pain and stiffness</li>
                        </ul>
                      </div> 
                    </div>
                    <div className="col-lg-6 pl-0"> 
                       <div className="indication-details">
                        <ul>
                        <h4>Trigger Point Release</h4>
                        <img src={manualtheraphyicon4} alt="call" className="img-fluid" />
                            <li>Muscle Spasm</li>
                            <li>Joint Stiffness</li>
                        </ul>
                      </div> 
                    </div> 
                    </div>
                  </div> 
                </div>
              </div>

                </div>
                <div className="col-lg-4 mt-4">
                <img src={manualtheraphy} alt="call" className="img-fluid" />
                </div>
            </div>
        </div>
    </section>
  )
}
