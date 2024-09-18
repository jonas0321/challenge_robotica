//Import redux
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shop: null,
};

export const shopReducer = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setShop: (state, actions) => {
      state.shop = actions.payload.shop;
    },
  },
});

export const { setShop } = shopReducer.actions;

export default shopReducer.reducer;
