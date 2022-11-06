import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pizza } from "../pizzas/pizzas";

interface CartItem {
  product: Pizza;
  quantity?: number;
  total?: number;
}

export interface CartState {
  items: Array<CartItem>;
  total: number;
}

const initialState: CartState = {
  items: [],
  total: 0.0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const pr = action.payload;
      const item = state.items.find((obj) => obj.product.id === pr.product.id);
      if (!item)
        return {
          ...state,
          items: [...state.items, action.payload],
        };
    },
    sumTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
  },
});

export const { addToCart, sumTotal } = cartSlice.actions;

export default cartSlice.reducer;
