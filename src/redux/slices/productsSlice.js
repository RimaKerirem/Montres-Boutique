import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState: [],
  reducers: {
    getProducts: (state, action) => {
      return action.payload;
    },
  },
});

export const { getProducts } = productsSlice.actions;
export default productsSlice.reducer;
