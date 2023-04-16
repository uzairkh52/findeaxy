import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react";

const token = Cookies.get("token");

process.env.NODE_ENV === "development"
  ? (axios.defaults.baseURL = "http://127.0.0.1:8000/api")
  : (axios.defaults.baseURL = "http://127.0.0.1:8000/api");
// ? (axios.defaults.baseURL = "https://winjoy.incubyter.com/public/api")
// https://testing.winjoy.ae/public/api

let ACCESS_TOKEN = "";
if (typeof window !== "undefined") {
  ACCESS_TOKEN = token ? token : "";
}
if (ACCESS_TOKEN) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + ACCESS_TOKEN;
}

// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// axios.defaults.headers['content-type']='application/json'
// axios.defaults.headers['withCredentials']=true
// axios.defaults.headers['crossorigin']=true
// axios.defaults.withCredentials = true;

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // if(error.response.status === 401){
    //     store.dispatch(logout());
    // }
    return Promise.reject(error);
  }
);

export default axios;
