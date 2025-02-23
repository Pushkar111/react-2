import { createSlice } from "@reduxjs/toolkit";

const BankSlice = createSlice({
    name: "bank", 
    initialState: {
        balance: 0,
    }, 
    reducers: {
        depositAction: (state, action) => {
            state.balance += action.payload;
        }, 
        
        withdrawAction: (state, action) => {
            state.balance -= action.payload;
        }
    }
})

export const {depositAction, withdrawAction} = BankSlice.actions;
export default BankSlice.reducer;