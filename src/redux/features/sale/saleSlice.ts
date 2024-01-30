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
   setIncrementQuantity : (state,action)=>{
    state.saleQuantity += action.payload.quantity
    state.productId = action.payload.productId
   },
   setDecrementQuantity : (state,action)=>{
    state.saleQuantity -= action.payload.quantity
    state.productId = action.payload.productId

   }
  },
});

export const {
setIncrementQuantity,setDecrementQuantity
} = saleSlice.actions;

export default saleSlice.reducer;
