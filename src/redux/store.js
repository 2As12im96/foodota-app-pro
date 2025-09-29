import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import adminAuthReducer from "./adminAuth";
import productReducer from "./productSlice";
import orderReducer from "./orderSlice";
import cartReducer , { getTotals } from "./cartSlice";

const store = configureStore({
    reducer:{
        cart: cartReducer,
        auth:authReducer,
        products:productReducer,
        orders:orderReducer,
        AdminAuth:adminAuthReducer
    }
});

store.dispatch(getTotals());
export default store