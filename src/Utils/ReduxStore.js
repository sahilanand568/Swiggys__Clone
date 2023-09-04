import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const ReduxStore = configureStore({
    reducer:{
        cart:cartSlice
    }
});

export default ReduxStore;