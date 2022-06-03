import { API_URL } from "./Redux/Constant/ApiRoute";
import React from "react";
import logo from './assets/images/logo.png';

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
 