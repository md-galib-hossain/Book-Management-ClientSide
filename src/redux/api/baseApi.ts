import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1',
    prepareHeaders : (headers,{getState}) => {
      const states : any = getState()
      console.log(states.auth.token,"states")
           headers.set('authorization', `Bearer ${states.auth.token}`)

return headers
    },
  
    
  }),
  
  tagTypes: ["all-products", "all-users"],


  endpoints: () => ({}),
});
