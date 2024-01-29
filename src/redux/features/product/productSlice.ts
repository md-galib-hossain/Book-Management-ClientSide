// AddQuizSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { TinitialProductSliceState } from "../../../types/product.type";

const initialState: TinitialProductSliceState = {
    selectedIds: [],
    products: [ {
        productName : "",
    productSimpleId : "",
    productPrice : 0,
    productQuantity : 0,
    releaseDate : "",
    author : "",
    isbn : 0,
    genre : "",
    publisher : "",
    series : "",
    language : [],
    bookFormat : [],
    isDeleted : false
    }],
  
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (
      state,
      action
    ) => {
      state.products.push(action.payload) 
    },
    setSelectProduct:(state , action) =>{
      state.selectedIds.push(action.payload)
    },
    removeSelectProduct:(state , action) =>{
      state.selectedIds = state.selectedIds.filter(id => id !== action.payload);    }
   
  },
});

export const {
  setSelectProduct,setProduct ,removeSelectProduct
} = productSlice.actions;

export default productSlice.reducer;
