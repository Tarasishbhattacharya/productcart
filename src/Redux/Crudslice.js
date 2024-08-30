import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axiosInstance } from "../API/axiosinstance"
import { getProduct, prodUpdate, product, singleProduct } from "../API/endpoints";
// import { endPoints } from "../API/endpoints"
// import axios from "axios";



export const addProd=createAsyncThunk("/addprod",async(data)=>{
    const res= await axiosInstance.post(product.create,data);
    console.log(res);
})


export const showProd=createAsyncThunk("/showprod",async(data)=>{
  const res= await axiosInstance.post(getProduct.show,data);
  // console.log(res);
  return res?.data
})

export const getSingleProd=createAsyncThunk("/singleprod",async(id)=>{
  const res= await axiosInstance.get(`${singleProduct.show}/${id}`);
  // console.log(res);
  return res?.data;
})

export const updateProd=createAsyncThunk("/updateprod",async(data)=>{
  const res= await axiosInstance.post(prodUpdate.update,data);
  console.log(res?.data);
  return res?.data;
})

export const deleteProd=createAsyncThunk("/deleteprod",async(data)=>{
  const res= await axiosInstance.post("/product/remove",data);
  console.log(res)
  // console.log(res?.data?.data);
  // return res?.data?.data;

})


export const initialState={
    prodList:[],
    editList:[],
    singleProd:{},
    totalpage:"",
    searchProd:"",
    isLoading:false,
    isError:false,
}

export const crudSlice=createSlice({
    name:"crud",
    initialState,
    reducers:{
      getProdBySearch:(state,action)=>{
        state.searchProd=action.payload
      }
    },
    extraReducers:(builder)=>{
      builder.addCase(addProd.pending,(state)=>{
        state.isLoading=true
      })
      builder.addCase(addProd.fulfilled,(state)=>{
        state.isLoading=false
      })
      builder.addCase(addProd.rejected,(state)=>{
        state.isLoading=false
        state.isError=true
      })
      builder.addCase(showProd.pending,(state)=>{
        state.isLoading=true
      })
      builder.addCase(showProd.fulfilled,(state,{payload})=>{
        state.isLoading=false;
        state.prodList=payload?.data;
        state.totalpage=payload?.totalPages
      })
      builder.addCase(showProd.rejected,(state)=>{
        state.isLoading=false
        state.isError=true
      })
      builder.addCase(getSingleProd.pending,(state)=>{
        state.isLoading=true
      })
      builder.addCase(getSingleProd.fulfilled,(state,{payload})=>{
        state.isLoading=false;
        state.singleProd=payload?.data;
      })
      builder.addCase(getSingleProd.rejected,(state)=>{
        state.isLoading=false
        state.isError=true
      })
      builder.addCase(updateProd.pending,(state)=>{
        state.isLoading=true
      })
      builder.addCase(updateProd.fulfilled,(state,{payload})=>{
        state.isLoading=false;
        const{_id}=payload?.data
        console.log(_id)
        state.prodList= state.prodList.map((prod)=> prod._id === _id ? payload?.data : prod);
        // state.prodList=state.editList
      })
      builder.addCase(updateProd.rejected,(state)=>{
        state.isLoading=false
        state.isError=true
      })
      builder.addCase(deleteProd.pending,(state)=>{
        state.isLoading=true
      })
      builder.addCase(deleteProd.fulfilled,(state)=>{
        state.isLoading=false;
      })
      builder.addCase(deleteProd.rejected,(state)=>{
        state.isLoading=false
        state.isError=true
      })
    }

})
export const {getProdBySearch}=crudSlice.actions
export default crudSlice.reducer