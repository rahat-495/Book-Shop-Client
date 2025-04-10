
import { baseApi } from "@/redux/api/baseApi";

const bookApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllBooks: builder.query({
            query: () => ({
            url: "/books",
            method: "GET",
            }),
            providesTags: ["Books"], 
        }),

        getSingleBook: builder.query({
            query: (id) => ({
            url: `/books/get-single-book/${id}`,
            method: "GET",
            }),
        }),

        createBook: builder.mutation({
            query: (payload) => ({
                url: "/books/create-book",
                method: "POST",
                body: payload,
                }),
            invalidatesTags: ["Books"], 
        }),

        updateBook: builder.mutation({
            query: (payload) => ({
                url: `/books/update-book/${payload.id}`,
                method: "PUT",
                body: payload.updatedData,
                }),
            invalidatesTags: ["Books"], 
        }),

        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Books"],
        }),
    }),
    overrideExisting: false,
});
  

export const { useGetAllBooksQuery , useGetSingleBookQuery , useCreateBookMutation , useDeleteBookMutation , useUpdateBookMutation } = bookApi ;
