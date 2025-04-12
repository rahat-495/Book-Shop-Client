import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        getMyOrders : builder.query({
            query : () => ({
                url : "/orders/my-orders",
                method : "GET",
            })
        }),
        createOrder : builder.mutation({
            query : (payload) => ({
                url : "/orders/create-order",
                method : "POST",
                body : payload ,
            }),
            invalidatesTags: ["carts"], 
        }),
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
    })
})

export const { useGetMyOrdersQuery , useCreateOrderMutation , useGetMyDataQuery , useGetUserOrdersQuery } = orderApi ;
