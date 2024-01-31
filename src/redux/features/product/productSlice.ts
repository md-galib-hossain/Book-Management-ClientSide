// AddQuizSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { TinitialProductSliceState } from "../../../types/product.type";

export const initialState: TinitialProductSliceState = {
  selectedIds: [],
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
  product: {
    _id: "",
    productName: "",
    productSimpleId: "",
    productPrice: 0,
    productQuantity: 0,
    releaseDate: "",
    author: "",
    isbn: 0,
    genre: "",
    publisher: "",
    series: "",
    language: [],
    bookFormat: [],
    isDeleted: false,
    createdBy : "",
    updatedAt: "",
    createdAt: ""
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductForUpdate: (state, action) => {
      const keys = Object.keys(action.payload);

      if (keys.length > 0 && keys[0] !== "language" && keys[0] !== "bookFormat") {
        const key = keys[0];
        state.product[key] = action.payload[key];
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
          .map((lang : any) => lang.trim())
          .filter(Boolean);
        state.product.language.push(...languages);
      }
      if (keys[0] === "bookFormat") {
        const formats = action.payload.bookFormat
          .split(",")
          .map((format : any) => format.trim())
          .filter(Boolean);
        state.product.bookFormat.push(...formats);
      }
    },
    setProductForCreate: (state, action)=>{
state.product = action.payload
    },
    resetProduct: (state) => {
      state.product = initialState.product;
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
    setFilter : (state,action) => {
      const { key, value } = action.payload;
      state.filterItem[key] = value
    }
  },
});

export const {
  setSelectProduct,
  setProductForUpdate,
  removeSelectProduct,
  resetSelectProduct,
  resetProduct,
  setFilter,setProductForCreate
} = productSlice.actions;

export default productSlice.reducer;
