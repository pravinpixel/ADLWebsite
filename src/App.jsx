import React from 'react'
import Header from './Components/Includes/Header'
import Footer from './Components/Includes/Footer'
import Home from "./Components/Home/Home";
import { Route , Routes } from 'react-router-dom'; 
import { ToastContainer } from 'react-toastify';
import TestDetails from './Components/Containers/TestDetails'
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <> 
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/test/:TestId' exact element={<TestDetails/>} />
          <Route>404 Not Found !</Route>
        </Routes>
      <Footer/>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}