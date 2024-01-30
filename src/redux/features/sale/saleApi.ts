import { baseApi } from "../../api/baseApi";

const saleApi = baseApi.injectEndpoints({
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
    deleteMultipleProducts: builder.mutation({
      query: (ids: string[]) => ({
        url: `/products/delete-products`,
        method: "DELETE",
        body: ids,
      }),
      invalidatesTags: ["all-products"],
    }),
    updateSingleProduct: builder.mutation({
      query: (productstate) => (
        console.log(productstate, "inslice"),
        {
          url: `/products/update-product/${productstate._id}`,
          method: "PATCH",
          body: productstate,
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

} = saleApi;
