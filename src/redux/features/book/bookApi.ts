
import { baseApi } from "@/redux/api/baseApi";

const bookApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        createBook : builder.mutation({
            query : (payload) => ({
                url : "/books/create-book",
                method : "POST",
                body : payload,
            })
        }),
        getAllBooks : builder.query({
            query : (params) => ({
                url : "/books",
                method : "GET",
                params ,
            })
        }),
    })
})

export const { useGetAllBooksQuery , useCreateBookMutation } = bookApi ;
