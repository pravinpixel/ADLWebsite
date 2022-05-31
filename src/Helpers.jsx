import { API_URL } from "./Redux/Constant/ApiRoute";

export function assets(params) { // params  =>  Image | File Url
   return  API_URL.ASSETS + params
}