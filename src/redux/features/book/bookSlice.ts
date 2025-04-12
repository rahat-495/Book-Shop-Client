
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books : [
        {
            _id : "",
            title: "" ,
            availability: true ,
            author: "" ,
            description: "" ,
            category: "" ,
            price: 0 ,
            stock: 0 ,
            image : "" ,
            publishedDate: "" ,
        },
    ]
}

const bookSlice = createSlice({
    name : "book" ,
    initialState ,
    reducers : {
        addBook : (state , action) => {
            state.books.push(action.payload);
        },
        deleteBook : (state , action) => {
            const id = action.payload ;
            state.books = state.books.filter((book) => book._id !== id);
        },
    }
})

export const {addBook , deleteBook} = bookSlice.actions ;
export default bookSlice.reducer ;
