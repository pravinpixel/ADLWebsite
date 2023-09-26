import { useEffect } from 'react'
import Banners from './Sections/Banners'
import BookedTestSliders from './Sections/BookedTestSliders'
import CheckupsSliders from './Sections/CheckupsSliders'
import PackagesSliders from './Sections/PackagesSliders'
import ConditionsSliders from './Sections/ConditionsSliders'
import HowItsWorks from './Sections/HowItsWorks'
import AboutUs from './Sections/AboutUs'
import FindLocation from './Sections/FindLocation'
import LegacyNutshell from './Sections/LegacyNutshell'
import LatestBlogs from './Sections/LatestBlogs'
import Accretions from './Sections/Accretions' 
import Helmet from "react-helmet";
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react'
import { FaRegWindowClose } from "react-icons/fa";

export default function Home() {
  const [openModal,setOpenModal] = useState(true)
  useEffect(() => {
    window.scroll(0,0);
    document.title = "Anand Diagnostic Laboratory - Your Trusted Diagnostic Centre";
  }, []);
  return (
    <>
     <Modal
     show={openModal}
     onHide={()=>setOpenModal(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='homeModal'>
        <Modal.Title id="contained-modal-title-vcenter">
        Greetings from Neuberg Anand.
        </Modal.Title>
        <Modal.Title id="contained-modal-title-vcenter">
        <FaRegWindowClose  onClick={()=>setOpenModal(false)} style={{cursor:'pointer'}}/>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
        We regret to inform you that we are presently encountering a server downtime, impacting the ability to download reports and process payments on our platform. Our IT team is actively engaged in resolving this matter with utmost urgency, though it might require some time to reinstate full services.
        </p>
        <p>
        We deeply apologize for any inconvenience or stress this may have caused and sincerely appreciate your ongoing patience and understanding during this time.
        Thank you for your cooperation. We will keep you updated on the progress.
        </p>
        <p className='mb-0'>Warm Regards,</p>
        <p>The Neuberg Anand Team</p>
      </Modal.Body>
    </Modal>
    <Helmet> 
      <title>Anand Diagnostic Laboratory - Your Trusted Diagnostic Centre</title> 
      <meta name="description" content="Get fast and affordable diagnostic services at Anand Lab. Our state-of-the-art facilities and experienced staff provide reliable results for patient care."></meta>
    </Helmet>
      <Banners/>
      <BookedTestSliders title="TOP BOOKED" subTitle="DIAGNOSTIC TESTS"/>
      <CheckupsSliders />
      <PackagesSliders  title="CHOOSE YOUR" subTitle="HEALTH Package"/>
      <ConditionsSliders />
      <HowItsWorks />
      <AboutUs />
      <FindLocation />
      <LegacyNutshell />
      <LatestBlogs />
      <Accretions />
    </>
  )
}