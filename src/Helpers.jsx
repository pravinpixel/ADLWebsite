import { API_URL } from "./Redux/Constant/ApiRoute";
import React from "react";
import logo from './assets/images/logo.png';
import { toast } from "react-toastify";

export function assets(params) {
  // params  =>  Image | File Url
  return API_URL.ASSETS + params;
}

export function Loading() {
   return (
      <div className="preloader_wrapper_bg">
         <div class="preloader_wrapper">
            <img src={logo} alt="" className="img-fluid"/>
         </div>
      </div>
   );
}

export function AddToCartList(test) {
   if(localStorage.getItem('CartTestList') == undefined) {
      localStorage.setItem('CartTestList', JSON.stringify([]));
   }
   let currentCart = JSON.parse(localStorage.getItem('CartTestList'));
    
   function isExists(CurrentTest) {
      return CurrentTest.TestId === test.TestId;
   }
   const CheckCartBucket = currentCart.find(isExists)
      
   if(CheckCartBucket !== undefined) {
      toast.info('Test Already Added!');
      return false
   } else {
      localStorage.setItem('CartTestList', JSON.stringify([...currentCart,test]));
      toast.success('Test Added Successfully!');
      return true
   }
}