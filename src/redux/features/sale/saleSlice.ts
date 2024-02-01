// AddQuizSlice.js
import { createSlice } from "@reduxjs/toolkit";

type TSaleItem = {
  productId: string;
  saleQuantity: number;
  saleDate: string;
  buyerName: string
}
type TSale = {
  saleItem: TSaleItem;
 filterCategory: string;
 searchTerm : string;
 currentPage?: string;
 totalPage?: string;
}

export const initialState : TSale = {

   saleItem : {
    productId: "",
    saleQuantity: 0,
   saleDate : "",
   buyerName : ""
   },
   filterCategory: "",
   searchTerm: "",
   totalPage: "6",
   currentPage : "1",
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
  },
  setCurrentPageForSale : (state,action)=>{
    state.currentPage = action.payload
  },
  setTotalPageForSale : (state,action)=>{
    state.totalPage = action.payload
  },
  setsearchTermForSale : (state,action)=>{
state.searchTerm = action.payload
  }
  
  },
});

export const {
  setSaleproduct,resetSaleProduct,setFilterCategoies,setCurrentPageForSale,setTotalPageForSale,setsearchTermForSale} = saleSlice.actions;

export default saleSlice.reducer;
