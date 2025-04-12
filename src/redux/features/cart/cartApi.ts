
import { baseApi } from "../../api/baseApi";

const cartApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        addToCart : builder.mutation({
            query : (payload) => ({
                url : "/orders/add-to-cart",
                method : "POST",
                body : payload ,
            }),
            invalidatesTags : ["carts"]
        }),
        getMyCarts : builder.query({
            query : (param) => ({
                url : `/orders/my-carts/email=${param}`,
                method : "GET",
            }),
            providesTags : ["carts"]
        }),
    })
})

export const { useAddToCartMutation , useGetMyCartsQuery } = cartApi ;
