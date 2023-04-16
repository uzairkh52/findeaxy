import {
   GET_WEB_USER
 }  from "../const"
 
 const initialState = {
   processing: false,
 };
 
 export const WebUserReducer = (state = initialState, action) => {
    console.log("getWebUser", initialState);
    switch (action.type) {
     case GET_WEB_USER:
       return {
         processing: true,
       };
     
     default:
       return state;
   }
 };
 