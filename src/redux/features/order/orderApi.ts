
import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        getMyData : builder.query({
            query : () => ({
                url : "/users/get-my-data",
                method : "GET",
            })
        }),
    })
})

export const { useGetMyDataQuery } = orderApi ;
