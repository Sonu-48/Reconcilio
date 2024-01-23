import { createSlice } from "@reduxjs/toolkit";

const findProductIndex = (cart, productId) => {
  return cart.findIndex((item) => item.id === productId);
};

const CartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addtocart(state, action) {
      const productIndex = findProductIndex(state, action.payload.id);

      if (productIndex !== -1) {
        // Product already exists in the cart, update the quantity
        state[productIndex].quantity += action.payload.quantity;
      } else {
        // Product doesn't exist, add it to the cart
        state.push(action.payload);
      }
    },
    removecart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export default CartSlice.reducer;
export const { addtocart, removecart } = CartSlice.actions;
