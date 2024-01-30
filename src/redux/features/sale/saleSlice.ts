// AddQuizSlice.js
import { createSlice } from "@reduxjs/toolkit";

type TSaleItem = {
  productId: string;
  saleQuantity: number;
  saleDate: string;
  buyerName: string
}
type TSale = {
  saleItem: TSaleItem
 filterCategory: string
}

export const initialState : TSale = {

   saleItem : {
    productId: "",
    saleQuantity: 0,
   saleDate : "",
   buyerName : ""
   },
   filterCategory: ""
};

export const saleSlice = createSlice({
  name: "sale",
  initialState,
  reducers: {
   setSaleproduct : (state,action)=>{
    state.saleItem.productId = action.payload.productId
    state.saleItem.saleQuantity = action.payload.quantity
   },
   resetSaleProduct : (state)=> {
    state.saleItem = initialState.saleItem
   },
  //  setSaleproduct : (state,action)=>{
  //   state.productId = action.payload
  //  },
  setFilterCategoies : (state,action) => {
    state.filterCategory = action.payload
  }
  
  },
});

export const {
  setSaleproduct,resetSaleProduct,setFilterCategoies} = saleSlice.actions;

export default saleSlice.reducer;
