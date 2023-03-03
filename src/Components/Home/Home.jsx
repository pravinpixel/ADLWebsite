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
export default function Home() {
  useEffect(() => {
    window.scroll(0,0);
    document.title = "Anand Diagnostic Laboratory - Your Trusted Diagnostic Centre";
  }, []);
  return (
    <>
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