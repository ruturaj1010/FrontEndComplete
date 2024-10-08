import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/UserReducer";
import productReducer from "./reducer/ProductReducer";

export const store = configureStore( {
    reducer: {
        userReducer: userReducer,
        productReducer : productReducer,
    },
} )

export default store;