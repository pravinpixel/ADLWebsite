import React, { useEffect } from 'react'
import TestBanner from './Sections/TestBanner'
import TypeofTesst from './Sections/TestHealthpackages'
import PopularTests from './Sections/PopularTests'
import PopularPackages from './Sections/PopularPackages'

export default function test() {
  useEffect(() => {
    document.title = "Test Details Page";
    window.scroll(0,0)
  }, []);
  return (
    <div>
        <TestBanner />
        <TypeofTesst />
        <PopularTests />
        <PopularPackages />
    </div>
  )
}

