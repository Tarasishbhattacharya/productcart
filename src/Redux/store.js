import { configureStore } from "@reduxjs/toolkit"
import  authSlice  from "./Authslice"
import crudSlice  from "./Crudslice"
// import  authSlice  from "./Authslice"


export const store=configureStore({
    reducer:{
        auth:authSlice,
        product:crudSlice
        
    }
})