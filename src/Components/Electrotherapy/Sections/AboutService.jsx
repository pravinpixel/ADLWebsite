import React from 'react'
import manualtheraphyicon1 from "../../../assets/images/manual-theraphy-icon-1.png"
import manualtheraphyicon2 from "../../../assets/images/manual-theraphy-icon-2.png"
import manualtheraphyicon3 from "../../../assets/images/manual-theraphy-icon-3.png"
import manualtheraphyicon4 from "../../../assets/images/manual-theraphy-icon-4.png"
import manualtheraphy from "../../../assets/images/manual-theraphy.jpg"
import clkimg from "../../../assets/images/clock.png"
import padimg from "../../../assets/images/pad.png"

export default function AboutService() {
  return (
    <section className="about-services">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
            <div className="special-instruction">
                <h3>About Electrotherapy</h3>
                <p>Therapy involves few modalites/equipment used for pain and symptomatic relief in a particular condition.</p>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                    Types of Modalities
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                    Indications
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link" id="contra-tab" data-toggle="tab" href="#contra" role="tab" aria-controls="contra" aria-selected="false">
                    Contraindications
                    </a>
                  </li>  
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className="detilos-expl indication-details">
                    <ul>
                      <li>
                      Interferential Therapy (IFT)  
                      </li>
                      <li>
                      Ultrasound Therapy (UST)    
                      </li>
                      <li>
                      Laser  
                      </li>
                      <li>
                      Transcutaneous Electrical Nerve Stimulation (TENS) 
                      </li>
                      <li>
                      Muscle Stimulator
                      </li>
                    </ul>
                  </div>
                  </div>
                  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                      <div className="row detilos-expl pb-0">
                    <div className="col-lg-6 pl-0">
                      <div className="indication-details">
                        <ul>
                        <h4>IFT</h4>
                        <img src={manualtheraphyicon1} alt="call" className="img-fluid" />
                            <li>Arthritis</li>
                            <li>tendinitis</li>
                            <li>tendonitis</li>
                            <li>ligament injuries</li>
                            <li>back pain</li>
                            <li>neck pain</li>
                            <li>sciatica Etc...</li>
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
            <div className="row">
              <div className="note-duration">
                    <div className="col-lg-8">
                      <div className="flyer-box">
                      <img src={padimg} alt="call" className="img-fluid" /> 
                      <h4>Note</h4>
                      <p>Above mentioned modalities are mostly used as an adjunct to other physiotherapy treatment methods like exercise therapy and manual therapy to hasten the recovery process.</p>
                      </div>
                      <div className="flyer-box">
                      <img src={clkimg} alt="call" className="img-fluid" /> 
                      <h4>Duration</h4>
                      <p>20 minutes/ session (minimum 3 sessions)</p>
                      </div>
                    </div>
              </div>
            </div>
        </div>
    </section>
  )
}
