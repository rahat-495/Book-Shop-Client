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
        deleteOrder : builder.mutation({
            query : (payload) => ({
                url : `/orders/${payload}`,
                method : "DELETE",
            }),
            invalidatesTags: ["order"], 
        }),
        updateOrder : builder.mutation({
            query : (payload) => ({
                url : `/orders/update-order`,
                method : "PUT",
                body : payload
            }),
            invalidatesTags: ["order"], 
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
        }),
        getAllOrders: builder.query({
            query: () => ({
              url: "/orders",
              method: "GET",
            }),
            providesTags : ["order"]
        }),
    })
})

export const { useGetMyOrdersQuery , useCreateOrderMutation , useUpdateOrderMutation , useGetMyDataQuery , useGetUserOrdersQuery , useGetAllOrdersQuery , useDeleteOrderMutation } = orderApi ;
