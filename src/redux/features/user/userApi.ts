
import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        getMyData : builder.query({
            query : () => ({
                url : "/users/get-my-data",
                method : "GET",
            })
        }),
        getAllUsers : builder.query({
            query : () => ({
                url : "/users",
                method : "GET",
            })
        }),
    })
})

export const { useGetMyDataQuery , useGetAllUsersQuery } = userApi ;
