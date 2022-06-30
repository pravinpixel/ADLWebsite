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
         <div className="preloader_wrapper">
            <img src={logo} alt="" className="img-fluid"/>
         </div>
      </div>
   );
}

export function CheckCartBucket(TestId) {
   let currentCart = JSON.parse(localStorage.getItem('CartTestList'));
   if(currentCart !== null) {
      function isExists(CurrentTest) {
         return CurrentTest.TestId === TestId;
      }
      var Result = currentCart.find(isExists)
      if(Result !== undefined) {
         return true
      } else {
         return false
      }
   }
}

export function AddToCartList(test) {
   let currentCart = JSON.parse(localStorage.getItem('CartTestList'));
   if(localStorage.getItem('CartTestList') == undefined) {
      localStorage.setItem('CartTestList', JSON.stringify([]));
   }
   localStorage.setItem('CartTestList', JSON.stringify([...currentCart,test]));
   toast.success('Test Added Successfully!');
   return true
}


export function RemoveToCartList(test) {

   let currentCart = JSON.parse(localStorage.getItem('CartTestList'));

   function isExists(CurrentTest) {
      return CurrentTest.TestId === test.TestId;
   }
   
   if(currentCart !== null) {
      var Result = currentCart.find(isExists)
      var index  = currentCart.indexOf(Result)
      currentCart.splice(index, 1)
      localStorage.setItem('CartTestList', JSON.stringify(currentCart));
      return currentCart
   }
    
   if(currentCart.length === 0) {
      localStorage.removeItem('CartTestList')
   }
}