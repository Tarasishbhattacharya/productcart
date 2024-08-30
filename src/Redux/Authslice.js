import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axiosInstance } from "../API/axiosinstance"
import { login, registration, userProfile } from "../API/endpoints";
// import { endPoints } from "../API/endpoints";


export const userReg=createAsyncThunk("/reg",async(data)=>{
    let res=await axiosInstance.post(registration.create,data);
    return res?.data
    // console.log(res);
})

export const userLogin=createAsyncThunk("/login",async(data)=>{
    let res=await axiosInstance.post(login.create,data);
    return res?.data;
})

export const getUser=createAsyncThunk("/user",async()=>{
   let res=await axiosInstance.get(userProfile.getUser)
   return res?.data
})



export const initialState={
    token:localStorage.getItem("token") || null,
    userInfo:localStorage.getItem("name")||null,
    userDetails:{},
    userpic:localStorage.getItem("pic")|| null,
    isLogin:false,
    isRegistration:false,
    isLoading:false,
    isError:false
}

export const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
      logOut:(state)=>{
         state.isRegistration=false;
         state.isLogin=false;
         state.token=null;
         localStorage.removeItem("token");
         state.userInfo=null;
         localStorage.removeItem("name");
      }
    },
    extraReducers:(builder)=>{
     builder.addCase(userReg.pending,(state)=>{
        state.isLoading=true
     })
     builder.addCase(userReg.fulfilled,(state)=>{
        state.isLoading=false;
        state.isRegistration=true
     })
     builder.addCase(userReg.rejected,(state)=>{
        state.isLoading=false;
        state.isRegistration=false;
        state.isError=true;
     })
     builder.addCase(userLogin.pending,(state)=>{
        state.isLoading=true
     })
     builder.addCase(userLogin.fulfilled,(state,{payload})=>{
        state.isLoading=false;
        state.isLogin=true;
        state.token=payload?.token;
        state.userpic=payload?.data?.profile_pic
        localStorage.setItem("pic",payload?.data?.profile_pic)
        localStorage.setItem("token",payload?.token)
        state.userInfo=payload?.data?.first_name;
        localStorage.setItem("name",payload?.data?.first_name);

     })
     builder.addCase(userLogin.rejected,(state)=>{
        state.isLoading=false;
        state.isLogin=false;
        state.isError=true;
     })
     builder.addCase(getUser.pending,(state)=>{
      state.isLoading=true
     })
     builder.addCase(getUser.fulfilled,(state,{payload})=>{
      state.isLoading=false
      state.userDetails=payload?.data
     })
     builder.addCase(getUser.rejected,(state)=>{
      state.isLoading=false
      state.isError=true
     })

    }
})
export const {logOut}=authSlice.actions
export default authSlice.reducer