
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts : [
        {
            "product": "",
            "quantity": 0 ,
        },
    ]
}

const cartSlice = createSlice({
    name : "cart" ,
    initialState ,
    reducers : {
        addToCart : (state , action) => {
            state.carts.push(action.payload);
        },
    }
})

export const {addToCart} = cartSlice.actions ;
export default cartSlice.reducer ;
