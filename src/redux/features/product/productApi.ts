import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // addQuiz: builder.mutation({
    //   query: (quiz: TQuiz[]) => ({
    //     url: "/quiz",
    //     method: "POST",
    //     body: quiz,
    //   }),
    //   invalidatesTags: ["all-quiz"],
    // }),

    getAllProducts: builder.query({
      query: () => ({
        url: `/products/`,
        method: "GET",
      }),
      providesTags: ["all-products"],
    }),

    // getQuizById: builder.query({
    //   query: (id: string) => ({
    //     url: `/quiz/${id}`,
    //     method: "GET",
    //   }),
    // }),

    // updateQuiz: builder.mutation({
    //   query: (quiz: TQuiz & { id: string }) => ({
    //     url: `/quiz/${quiz.id}`,
    //     method: "PUT",
    //     body: {
    //       question: quiz.question,
    //       description: quiz.description,
    //       options: quiz.options,
    //       correctOption: quiz.correctOption,
    //       module: quiz.module,
    //     },
    //   }),
    //   invalidatesTags: ["all-quiz"],
    // }),

    // deleteQuiz: builder.mutation({
    //   query: (id: string) => ({
    //     url: `/quiz/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["all-quiz"],
    // }),
  }),
});

export const {
useGetAllProductsQuery
} = productApi;
