import React, { useEffect, useState } from 'react'
import TestBanner from './Sections/TestBanner'  
import TestHealthPackages from './Sections/TestHealthpackages' 
export default function Test() { 
  useEffect(() => {
    document.title = "Test Details Page";
    window.scroll(0,0) 
  }, []);
  return (
    <div>
      <TestBanner /> 
      <TestHealthPackages /> 
    </div>
  )
}