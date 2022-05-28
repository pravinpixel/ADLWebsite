import React from 'react'
import Banners from './Sections/Banners'
import BookedTestSliders from './Sections/BookedTestSliders'
import CheckupsSliders from './Sections/CheckupsSliders'
import PackagesSliders from './Sections/PackagesSliders'




export default function Home() {
  return (
    <>
      <Banners/>
      <BookedTestSliders />
      <CheckupsSliders />
      <PackagesSliders />
    </>
  )
}