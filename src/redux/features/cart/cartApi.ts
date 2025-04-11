
import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        addToCart : builder.mutation({
            query : (payload) => ({
                url : "/orders/add-to-cart",
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

export const { useAddToCartMutation , useGetMyCartsMutation } = orderApi ;
