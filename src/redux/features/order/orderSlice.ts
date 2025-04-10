
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts : [
        {
            "order": {
                "customer": {
                    "_id": "",
                    "name": "",
                    "email": "",
                    "role": ""
                },
                "product": "",
                "quantity": 0,
                "totalPrice": 0,
                "status": "",
                "_id": "",
                "createdAt": "",
                "updatedAt": "",
                "__v": 0
            }
        }
    ]
}

const orderSlice = createSlice({
    name : "order" ,
    initialState ,
    reducers : {
        addToCart : (state , action) => {
            state.carts.push(action.payload);
        },
    }
})

export const {addToCart} = orderSlice.actions ;
export default orderSlice.reducer ;
