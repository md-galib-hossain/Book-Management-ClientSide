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
   
  },
});

export const {
  
} = productSlice.actions;

export default productSlice.reducer;
