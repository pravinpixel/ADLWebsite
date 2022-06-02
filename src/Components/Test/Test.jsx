import React from 'react'
import TestBanner from './Sections/TestBanner'
import TypeofTesst from './Sections/TestHealthpackages'
import PopularTests from './Sections/PopularTests'
import PopularPackages from './Sections/PopularPackages'

export default function test() {
  return (
    <div>
        <TestBanner />
        <TypeofTesst />
        <PopularTests />
        <PopularPackages />
    </div>
  )
}

