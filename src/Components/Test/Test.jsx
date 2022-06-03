import React, { useEffect } from 'react'
import TestBanner from './Sections/TestBanner'
import TestHealthPackages from './Sections/TestHealthPackages'
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
      <TestHealthPackages />
      <PopularTests />
      <PopularPackages />
    </div>
  )
}