import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: `/products/`,
        method: "GET",
      }),
      providesTags: ["all-products"],
    }),
  }),
});

export const {
useGetAllProductsQuery
} = productApi;
