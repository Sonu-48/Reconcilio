import { createSlice } from "@reduxjs/toolkit";

const CartSlice= createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addtocart(state,action){
            state.push(action.payload);
        }
    }
})
export default CartSlice.reducer;
export const {addtocart}= CartSlice.actions;