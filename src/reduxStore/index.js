import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api-slice";
import cartSlice from "./cart-slice";
import userSlice from "./user-slice";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        user: userSlice.reducer,
        cart: cartSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware)
    }
})

export default store;