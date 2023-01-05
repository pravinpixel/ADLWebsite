import React, { Fragment, useEffect } from 'react'
import { Route , Routes } from 'react-router-dom' 
import Header from './Components/Includes/Header'
import Footer from './Components/Includes/Footer'
import Test from './Components/Test/Test'
import TestDetails from './Components/Containers/TestDetails' 
import CartList from './Components/Containers/CartList'
import AlertBox from './AlertBox' 
import GuestCheckOut from './Components/Containers/GuestCheckOut'
import Login from './Components/Containers/Login'
import Register from './Components/Containers/Register'

// -------------------------------------------------------//

import Home from './Components/Home/Home'
import About from './Components/About/About'
import Peoplebhind from './Components/Peoplebehind/Peoplebehind'
import History from './Components/History/History' 
import Commitment from './Components/Commitment/Commitment'
import Accreditation from './Components/Accreditation/Accreditation'
import PatientsConsumers from './Components/PatientsConsumers/PatientsConsumers'
import Packages from './Components/Packages/Packages' 
import Loader from './Components/Loader/Loader' 
import HealthPackages from './Components/HealthPackages/HealthPackages'
import PreparingForHeathCheckup from './Components/PreparingForHeathCheckup/PreparingForHeathCheckup'
import DriveThroughBloodCollection from './Components/DriveThroughBloodCollection/DriveThroughBloodCollection'
import Feedback from './Components/Feedback/Feedback'
import Faq from './Components/Faq/Faq'
import BookanAppointment from './Components/BookanAppointment/BookanAppointment'
import Department from './Components/Department/Department'
import HospitalLabManagement from './Components/HospitalLabManagement/HospitalLabManagement'
import ClinicalLabManagement from './Components/ClinicalLabManagement/ClinicalLabManagement'
import FranchisingOpportunities from './Components/FranchisingOpportunities/FranchisingOpportunities'
import Research from './Components/Research/Research'
import Physiotherapy from './Components/Physiotherapy/Physiotherapy'
import ManualTherapy from './Components/ManualTherapy/ManualTherapy'
import ExerciseTherapy from './Components/ExerciseTherapy/ExerciseTherapy'
import Electrotherapy from './Components/Electrotherapy/Electrotherapy'
import Contact from './Components/Contact/Contact'
import HeadOffice from './Components/HeadOffice/HeadOffice'
import AnandLabFranchise from './Components/AnandLabFranchise/AnandLabFranchise'
import CovidtestingforEmployees from './Components/CovidtestingforEmployees/CovidtestingforEmployees'
import HealthCheckupforEmployees from './Components/HealthCheckupforEmployees/HealthCheckupforEmployees'
import MyProfile from './Components/MyProfile/MyProfile'
import FindLab from './Components/FindLab/FindLab'
import ThankYou from './Components/ThankYou/ThankYou'
import CancellationPolicy from './Components/CancellationPolicy/CancellationPolicy'
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy'
import TermsConditions from './Components/TermsConditions/TermsConditions'
import { useDispatch , useSelector } from 'react-redux'
import { setAuthUser, setTestLocation } from './Redux/Actions/TestAction'
import "react-datepicker/dist/react-datepicker.css";


export default function App() {
  const dispatch = useDispatch();  
  const loader = useSelector((state) => state.Loader);
  var TestLocation = localStorage.getItem('TestLocation') 
  useEffect(() => {
    var user = localStorage.getItem('user')
    if(user !== null) {
      dispatch(setAuthUser(JSON.parse(localStorage.getItem('user'))));
    }
    if(TestLocation === null) {
      localStorage.setItem('TestLocation','bangalore')
      dispatch(setTestLocation('bangalore'));
    } else {
      dispatch(setTestLocation(TestLocation));
    }
  }, [])
  
  return (
    <Fragment>
      { loader.status === true  ? <Loader/> : null }
      <Header/>
      <Routes>
        <Route path='/for-patient' element={<Test/>} />
        <Route path='/login' exact element={<Login/>} /> 
        <Route path='/register' exact element={<Register/>} />  
        <Route path='/checkout' exact element={<GuestCheckOut/>} />
        <Route path='/test/:TestId' exact element={<TestDetails/>} />
        <Route path='/package/:TestId' exact element={<TestDetails/>} />
        <Route path='/my-cart' element={<CartList/>} />
        <Route path='/thank-you' element={<ThankYou/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/about-us' element={<About/>} />
        <Route path='/people-behind' element={<Peoplebhind/>} />
        <Route path='/history' element={<History/>} />
        <Route path='/commitment' element={<Commitment/>} />
        <Route path='/accreditation' element={<Accreditation/>} />
        <Route path='/patients-consumers' element={<PatientsConsumers/>} />
        <Route path='/packages' element={<Packages/>} />
        <Route path='/health-packages' element={<HealthPackages/>} />
        <Route path='/preparing-for-health-checkup' element={<PreparingForHeathCheckup/>} />
        <Route path='/drive-through-blood-collection' element={<DriveThroughBloodCollection/>} />
        <Route path='/feedback' element={<Feedback/>} />
        <Route path='/faq' element={<Faq/>} />
        <Route path='/book-an-appointment' element={<BookanAppointment/>} />
        <Route path='/department' element={<Department/>} />
        <Route path='/hospital-or-lab-management' element={<HospitalLabManagement/>} />
        <Route path='/clinical-lab-management' element={<ClinicalLabManagement/>} />
        <Route path='/franchising-opportunities' element={<FranchisingOpportunities/>} />
        <Route path='/research' element={<Research/>} />
        <Route path='/physiotherapy' element={<Physiotherapy/>} />
        <Route path='/manual-therapy' element={<ManualTherapy/>} />
        <Route path='/exercise-therapy' element={<ExerciseTherapy/>} />
        <Route path='/electrotherapy' element={<Electrotherapy/>} />
        <Route path='/reach-us' exact element={<Contact/>} /> 
        <Route path='/head-office' exact element={<HeadOffice/>} /> 
        <Route path='/healthcheckup-for-employees' exact element={<HealthCheckupforEmployees/>} /> 
        <Route path='/anandlab-franchise' exact element={<AnandLabFranchise/>} /> 
        <Route path='/covidtesting-employees' exact element={<CovidtestingforEmployees/>} /> 
        <Route path='/covidtesting-employees' exact element={<CovidtestingforEmployees/>} /> 
        <Route path='/find-lab' exact element={<FindLab/>} /> 
        <Route path='/cancellation-policy' exact element={<CancellationPolicy/>} />  
        <Route path='/privacy-policy' exact element={<PrivacyPolicy/>} />  
        <Route path='/terms-conditions' exact element={<TermsConditions/>} />  
        
        <Route path="/my-account" element={<MyProfile />} />
          {/* <Route path="information" index element={<AccountInformation/>} /> 
          <Route path='update-profile' element={<UpdateProfile/>} /> 
          <Route path='orders' element={<Orders/>} /> 
          <Route path='return-orders' element={<ReturnOrders/>} /> 
          <Route path='change-password' element={<ChangePassword/>} /> 
          <Route path='address' element={<Address/>} /> 
        </Route> */}

        <Route>404 Not Found !</Route>
      </Routes>
      <Footer/> 
      <AlertBox/>
    </Fragment>
  )
}