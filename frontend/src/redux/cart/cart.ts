import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pizza } from "../pizzas/pizzas";

interface CartItem {
  product: Pizza;
  quantity: number;
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
    addQuantity: (state, action: PayloadAction<number>) => {
      const itemInCart = state.items.find(
        (item) => item.product.id === action.payload
      );
      if (itemInCart) {
        itemInCart.quantity++;
      }
    },
    subQuantity: (state, action: PayloadAction<number>) => {
      const itemInCart = state.items.find(
        (item) => item.product.id === action.payload
      );
      if (itemInCart) {
        if (itemInCart.quantity > 1) {
          itemInCart.quantity--;
        }
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      console.log("REMOVE");
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload
      );
    },
  },
});

export const { addToCart, sumTotal, addQuantity, subQuantity, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
