import React, { useEffect } from 'react'
import InnerCommonBanner from './Sections/InnerCommonBanner';
import AboutService from './Sections/AboutService';

export default function Services() {
    useEffect(() => {
        document.title = "Services Page";
        window.scroll(0,0)
      }, []);
  return (
    <div>
     <InnerCommonBanner />   
     <AboutService />   
    </div>
  )
}
