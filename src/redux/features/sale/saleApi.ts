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

    createSingleSale: builder.mutation({
      query: (productstate) => (
        console.log(productstate, "inslice"),
        {
          url: `/sales/create-sale`,
          method: "POST",
          body: productstate,
        }
      ),
      invalidatesTags: ["all-sales","all-products"],
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

export const { useCreateSingleSaleMutation

} = saleApi;
