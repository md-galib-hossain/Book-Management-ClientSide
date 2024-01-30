// AddQuizSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { TinitialProductSliceState } from "../../../types/product.type";

export const initialState: TinitialProductSliceState = {
  selectedIds: [],
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
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      const { language, bookFormat, ...rest } = action.payload;
      state.product = {
        ...state.product,
        ...rest,
      };
      // Handle arrays
      if (language !== undefined) {
        const languages = language
          .split(",")
          .map((lang : any) => lang.trim())
          .filter(Boolean);
        state.product.language.push(...languages);
      }
      if (bookFormat !== undefined) {
        const formats = bookFormat
          .split(",")
          .map((format : any) => format.trim())
          .filter(Boolean);
        state.product.bookFormat.push(...formats);
      }
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
  },
});

export const {
  setSelectProduct,
  setProduct,
  removeSelectProduct,
  resetSelectProduct,
  resetProduct,
} = productSlice.actions;

export default productSlice.reducer;
