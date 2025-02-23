import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./redux/CartSlice";
import BankSlice from "./redux/BankSlice";


export const store = configureStore({
    reducer: {
        // Define a top-level state field name
        cart: CartSlice,
        bank: BankSlice,
    }
})