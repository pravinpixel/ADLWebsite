import React, { Fragment } from 'react'
import Header from './Components/Includes/Header'
import Footer from './Components/Includes/Footer'
import Home from "./Components/Home/Home";
import Test from './Components/Test/Test'
import { Route , Routes } from 'react-router-dom'; 
import { ToastContainer } from 'react-toastify';
import TestDetails from './Components/Containers/TestDetails'
import 'react-toastify/dist/ReactToastify.css';
import CartList from './Components/Containers/CartList';
import Services from './Components/Services/Services';
import Solutions from './Components/Solutions/solutions';
import GuestCheckOut from './Components/Containers/GuestCheckOut';
import Login from './Components/Containers/Login';
import About from './Components/About/About'; 
import Commitment from './Components/Commitment/Commitment';
import Contact from './Components/Contact/Contact';
import Peoplebhind from './Components/Peoplebehind/Peoplebehind';

export default function App() {
  return (
    <Fragment> 
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about-us' element={<About/>} />
        <Route path='/people-behind' element={<Peoplebhind/>} />
        <Route path='/commitment' element={<Commitment/>} />
        <Route path='/for-patient' element={<Test/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/Solutions' element={<Solutions/>} />
        <Route path='/my-cart' element={<CartList/>} />
        <Route path='/test/:TestId' exact element={<TestDetails/>} />
        <Route path='/guest-checkout' exact element={<GuestCheckOut/>} />
        <Route path='/login' exact element={<Login/>} /> 
        <Route path='/reach-us' exact element={<Contact/>} /> 
        <Route>404 Not Found !</Route>
      </Routes>
      <Footer/>
      <ToastContainer  position="top-right"  autoClose={1500} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
    </Fragment>
  )
}