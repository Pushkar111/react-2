import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    }, 
    reducers: {
        // state : [intialState --> cart: []]
        // actions [1) type, 2) payload]
        // where 1) type : "cart/add" 2) payload : {id, name, price}
        addToCart: (state, action) => {
            console.log(state);
            console.log(action);
            state.cart.push(action.payload); // payload Object : {id, name, price}
        }
    }
})

export const { addToCart } = CartSlice.actions;
export default CartSlice.reducer; 