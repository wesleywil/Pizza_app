import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface SectionState {
  value: number;
}
const initialState: SectionState = {
  value: 0,
};

export const sectionSlice = createSlice({
  name: "sectionChange",
  initialState,
  reducers: {
    products: (state) => {
      state.value = 0;
    },
    ingredients: (state) => {
      state.value = 1;
    },
    orders: (state) => {
      state.value = 2;
    },
  },
});

export const { products, ingredients, orders } = sectionSlice.actions;

export default sectionSlice.reducer;
