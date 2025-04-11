
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
            })
        }),
        getMyCarts : builder.mutation({
            query : (payload) => ({
                url : "/orders/my-carts",
                method : "POST",
                body : payload ,
            })
        }),
    })
})

export const { useGetMyOrdersQuery , useGetMyCartsMutation , useCreateOrderMutation } = orderApi ;
