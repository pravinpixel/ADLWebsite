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
export default function Home() {
  useEffect(() => {
    window.scroll(0,0);
    document.title = "Anand Diagnostic Laboratory - Your Trusted Diagnostic Centre";
  }, []);
  return (
    <>
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