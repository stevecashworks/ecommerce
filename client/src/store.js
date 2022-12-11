 import { configureStore } from "@reduxjs/toolkit";
 import cartReducer from './cartSlice';
 import scrollSlice from "./scrollSlice";
 const state= configureStore({
     reducer:{
         cart:cartReducer,
         scroll:scrollSlice

     }
 })
 export default state
 