//Import redux
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

export const loadingReducer = createSlice({
  name: "loadig",
  initialState,
  reducers: {
    initLoading: (state) => {
      state.isLoading = true;
    },
    finishLoading: (state) => {
      state = initialState;
    },
  },
});

export const  {initLoading, finishLoading} = loadingReducer.actions;

export default loadingReducer.reducer;
