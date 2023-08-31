import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./uiSlise";
import cartSplice from "./cartSlice";

const store= configureStore({
    reducer:{
        ui:uiSlice.reducer,
        cart:cartSplice.reducer
    }
})
export default store