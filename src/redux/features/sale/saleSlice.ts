// AddQuizSlice.js
import { createSlice } from "@reduxjs/toolkit";

type TSale = {
  productId: string;
  saleQuantity: number;
  saleDate: string;
  buyerName: string
}

export const initialState : TSale = {
    productId: "",
    saleQuantity: 0,
   saleDate : "",
   buyerName : ""
};

export const saleSlice = createSlice({
  name: "sale",
  initialState,
  reducers: {
   setSaleproduct : (state,action)=>{
    state.productId = action.payload.productId
    state.saleQuantity = action.payload.quantity
   },
   resetSaleProduct : (state)=> {
    state = initialState
   }
  //  setSaleproduct : (state,action)=>{
  //   state.productId = action.payload
  //  },
  
  },
});

export const {
  setSaleproduct,resetSaleProduct} = saleSlice.actions;

export default saleSlice.reducer;
