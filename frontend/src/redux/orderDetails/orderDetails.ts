import { createSlice } from "@reduxjs/toolkit";

export interface HiddenState {
  value: boolean;
}

const initialState: HiddenState = {
  value: true,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    hidden: (state) => {
      state.value = true;
    },
    show: (state) => {
      state.value = false;
    },
  },
});

export const { hidden, show } = orderSlice.actions;
export default orderSlice.reducer;
