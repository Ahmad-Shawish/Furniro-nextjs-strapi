import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    updateQuantity: (state, action) => {
      const { productId, newQuantity } = action.payload;
      const productToUpdate = state.products.find(
        (product) => product.id === productId
      );
      if (productToUpdate) {
        productToUpdate.quantity = newQuantity;
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, updateQuantity, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
