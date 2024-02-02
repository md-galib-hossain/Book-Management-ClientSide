// AddQuizSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { TinitialProductSliceState } from "../../../types/product.type";

export const initialState: TinitialProductSliceState = {
  selectedIds: [],
  searchTerm: "",
  totalPage: "6",
  currentPage : "1",
  filterItem: {
    filterAuthor : "",
    filterReleaseDate: "",
    filterISBN : "",
    filterGenre: "",
    filterPublisher: "",
    filterSeries: "",
    filterLanguage: "",
    filterBookFormat: ""
  },
  createProduct: {
    // _id: "",
    productName: "",

    productPrice: 0,
    productQuantity: 0,
    releaseDate: "",
    author: "",
  
    genre: "",
    publisher: "",
    series: "",
    language: [],
    bookFormat: [],
    isDeleted: false,
    createdBy : "",
    // updatedAt: "",
    // createdAt: ""
  },
  updateProduct : {

  }
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductForUpdate: (state : TinitialProductSliceState, action : any) => {
      if('language' in action.payload){
        console.log("hahaha")
        state.updateProduct.language = [action.payload.language]

      }
      if('bookFormat' in action.payload){
        state.updateProduct.bookFormat = [action.payload.bookFormat]

      }
      state.updateProduct = {...state.updateProduct,...action.payload}

    },
    setProductForCreate: (state, action)=>{
      console.log(action.payload)
state.createProduct = action.payload
    },
    resetCreateProduct: (state) => {
      state.createProduct = initialState.createProduct;
    },
    resetUpdateProduct: (state) => {
      state.updateProduct = initialState.updateProduct;
    },

    setSelectProduct: (state, action) => {
      state.selectedIds.push(action.payload);
    },
    removeSelectProduct: (state, action) => {
      state.selectedIds = state.selectedIds?.filter(
        (id) => id !== action.payload
      );
    },
    resetSelectProduct: (state) => {
      state.selectedIds = initialState.selectedIds;
    },
    // setFilter : (state,action) => {
    //   const { key, value } = action.payload;
    //   state.filterItem[key] = value
    // },
    setCurrentPage : (state,action)=>{
      state.currentPage = action.payload
    },
    setTotalPage : (state,action)=>{
      state.totalPage = action.payload
    },
    setsearchTerm : (state,action)=>{
state.searchTerm = action.payload
    }
  },
});

export const {
  setSelectProduct,
  setProductForUpdate,
  removeSelectProduct,
  resetSelectProduct,setTotalPage,setCurrentPage,
  resetCreateProduct,resetUpdateProduct,
  // setFilter,
  setProductForCreate,setsearchTerm
} = productSlice.actions;

export default productSlice.reducer;
