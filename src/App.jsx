import React from 'react'
import Header from './Components/Includes/Header'
import Footer from './Components/Includes/Footer'
import Home from "./Components/Home/Home";
import { Route , Routes } from 'react-router-dom';


export default function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route>404 Not Found !</Route>
        </Routes>
      <Footer/>
    </>
  )
}