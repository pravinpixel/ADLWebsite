import React, { useEffect } from 'react'
import InnerCommonBanner from './Sections/InnerCommonBanner'; 

export default function Solutions() {
    useEffect(() => {
        document.title = "Solutions Page";
        window.scroll(0,0)
      }, []);
  return (
    <div>
     <InnerCommonBanner /> 

     <section className="pat-con">
         <div className="container">
             <div className="row">
                <div className="col-lg-12">
                <div class="common-heading"><h2> Patients & Consumers </h2></div>
                <p>Patient Care has always been the primary goal for all of us at Anand Diagnostic Laboratory. Apart from being of assistance during illness, we also strive to provide robust preventive healthcare services in the form of wellness packages to ensure that our patrons can identify complications early and address them before they become an issue.</p>
                <div className="consumers-set text-left">

                </div>
                </div>
             </div>
         </div>
     </section>

     <section className="">
         <div className="container">
             <div className="row">

             </div>
         </div>
     </section>

    </div>
  )
}