
import { baseApi } from "@/redux/api/baseApi";

const bookApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        getAllBooks : builder.query({
            query : (params) => ({
                url : "/books",
                method : "GET",
                params ,
            })
        }),
    })
})

export const { useGetAllBooksQuery } = bookApi ;
