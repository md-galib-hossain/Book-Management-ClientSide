import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (PaginationObj) => (
        console.log(PaginationObj, "inslice"),
        {
          url: `/products/?limit=${PaginationObj.totalPage}&page=${PaginationObj.currentPage}`,
          method: "GET",
        }
      ),
      providesTags: ["all-products"],
    }),
    createProduct: builder.mutation({
      query: (productState) => ({
        url: `/products/create-product`,
        method: "POST",
        body: productState,
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
      query: (updatedState) => ({
        url: `/products/update-product/${updatedState._id}`,
        method: "PATCH",
        body: updatedState,
      }),
      invalidatesTags: ["all-products"],
    }),
    getProductsByName: builder.query({
      query: (NameQueryObj) => (
        console.log(NameQueryObj),
        {
          url: `/products/?limit=${NameQueryObj?.totalPage}&page=${NameQueryObj?.currentPage}&searchTerm=${NameQueryObj?.searchTerm}`,
          method: "GET",
        }
      ),
      providesTags: ["all-products"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useDeleteProductMutation,
  useDeleteMultipleProductsMutation,
  useUpdateSingleProductMutation,
  useGetProductsByNameQuery,
  useCreateProductMutation,
} = productApi;
