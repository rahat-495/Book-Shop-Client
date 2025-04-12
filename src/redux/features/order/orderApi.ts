import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyData: builder.query({
      query: () => ({
        url: "/users/get-my-data",
        method: "GET",
      }),
    }),
    getUserOrders: builder.query({
      query: () => ({
        url: "/orders/my-orders",
        method: "GET",
      }),
      // providesTags: ["Orders"],
    }),
  }),
});

export const { useGetMyDataQuery, useGetUserOrdersQuery } = orderApi;
