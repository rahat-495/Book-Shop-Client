
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
    })
})

export const { useGetMyOrdersQuery , useCreateOrderMutation } = orderApi ;
