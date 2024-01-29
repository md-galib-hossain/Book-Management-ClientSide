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
    deleteProduct: builder.mutation({
      query: (id: string) => ({
        url: `/products/delete-product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["all-products"],
    }),


  }),

});

export const {
useGetAllProductsQuery,useDeleteProductMutation
} = productApi;
