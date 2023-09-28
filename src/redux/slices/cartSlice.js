import { createSlice } from "@reduxjs/toolkit";

const initialItems =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initialItems,
  reducers: {
    addToCart: (state, action) => {
      const productIsFind = state.find(
        (product) => product.id === action.payload.id
      );

      if (productIsFind) {
        productIsFind.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }

      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.map((item) => item))
      );
    },
    deleteFromCart: (state, action) => {
      localStorage.setItem(
        "cartItems",
        JSON.stringify(
          state.filter((product) => product.id !== action.payload.id)
        )
      );
      return state.filter((product) => product.id !== action.payload.id);
    },
    clearCart: (state, action) => {
      localStorage.clear();
      return [];
    },
    modifyQuantity: (state, action) => {
      const productIsFind = state.find(
        (product) => product.id === action.payload.id
      );

      productIsFind.quantity -= 1;

      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.map((item) => item))
      );
    },
  },
});

export const { addToCart, deleteFromCart, clearCart, modifyQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
