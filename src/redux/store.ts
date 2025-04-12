import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import bookReducer from "./features/book/bookSlice";
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";
import { persistReducer , persistStore , FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist" ;
import storage  from 'redux-persist/lib/storage';
import { baseApi } from "./api/baseApi";

const authPersistConfig = {
    key : "auth" ,
    storage ,
}

const cartPersistConfig = {
    key: "cart",
    storage,
};

const persistedAuthReducer = persistReducer(authPersistConfig , authReducer) ;
const persistedCartReducer = persistReducer(cartPersistConfig , cartReducer) ;

export const store = configureStore({
    reducer : {
        [baseApi.reducerPath] : baseApi.reducer ,
        auth : persistedAuthReducer ,
        book : bookReducer ,
        user : userReducer ,
        cart : persistedCartReducer ,
    },
    middleware : (getDefaultMiddlewares) => getDefaultMiddlewares(
        {serializableCheck: {ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]}
    }).concat(baseApi.middleware) ,
})

export type RootState = ReturnType<typeof store.getState> ;
export type AppDispatch = typeof store.dispatch ;
export const persistor = persistStore(store) ;

