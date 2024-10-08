import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products : ["https://fakestoreapi.com/products"]
}

export const productSlice = createSlice( {
    name: "products",
    initialState,
    reducers: {},
})

export default productSlice.reducer;

export const {} = productSlice.actions;