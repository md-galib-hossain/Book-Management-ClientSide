// AddQuizSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { TProduct, TinitialProductSliceState } from "../../../types/product.type";

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
    setProductForUpdate: (state : any, action : any) => {
      const keys = Object.keys(action.payload);

      if (keys.length > 0 && keys[0] !== "language" && keys[0] !== "bookFormat") {
        const key = keys[0] as keyof TProduct;
        state.updateProduct[key] = action.payload[key];
      }
      // const { language, bookFormat, ...rest } = action.payload;
      // state.product = {
      //   ...state.product,
      //   ...rest,
      // };
      // Handle arrays
      if (keys[0] === "language") {
        const languages = action.payload.language
          .split(",")
          .map((lang : string) => lang.trim())
          .filter(Boolean);
          const updatedlanguages = [...languages]
        state.updateProduct= {language : updatedlanguages}
      }
      if (keys[0] === "bookFormat") {
        const formats = action.payload.bookFormat
          .split(",")
          .map((format : string) => format.trim())
          .filter(Boolean);
          const bookFormat = [...formats]
        state.updateProduct={ bookFormat : bookFormat}  
      }
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
      state.selectedIds = state.selectedIds.filter(
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
