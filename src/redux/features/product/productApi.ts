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
    createProduct: builder.mutation({
      query: (productState) => (
        console.log("hahaha"),
        {
        url: `/products/create-product`,
        method: "POST",
        body : productState,
      }),
      invalidatesTags: ["all-products"],
    }),

    deleteProduct: builder.mutation({
      query: (id: string) => ({
        url: `/products/delete-product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["all-products"],
    }),
    deleteMultipleProducts: builder.mutation({
      query: (ids: string[]) => ({
        url: `/products/delete-products`,
        method: "DELETE",
        body: ids,
      }),
      invalidatesTags: ["all-products"],
    }),
    updateSingleProduct: builder.mutation({
      query: (updatedState) => (
        console.log(updatedState, "inslice"),
        {
          url: `/products/update-product/${updatedState._id}`,
          method: "PATCH",
          body: updatedState,
        }
      ),
      invalidatesTags: ["all-products"],
    }),
    getProductsByName: builder.query({
      query: (productName) => ({
        url: `/products/?searchTerm=${productName}`,
        method: "GET",
      }),
      providesTags: ["all-products"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useDeleteProductMutation,
  useDeleteMultipleProductsMutation,
  useUpdateSingleProductMutation,
  useGetProductsByNameQuery,useCreateProductMutation
} = productApi;
