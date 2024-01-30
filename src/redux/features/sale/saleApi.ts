import { baseApi } from "../../api/baseApi";

const saleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSaleHistory: builder.query({
      query: () => ({
        url: `/sales/sale-history`,
        method: "GET",
      }),
      providesTags: ["all-sales"],
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

  }),
});

export const { useCreateSingleSaleMutation,useGetSaleHistoryQuery

} = saleApi;
