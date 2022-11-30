import { createSlice } from "@reduxjs/toolkit";
const initialCartState = { cartVisible: false };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialCartState,
  reducers: {
    toggle(state) {
      state.cartVisible = !state.cartVisible;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
