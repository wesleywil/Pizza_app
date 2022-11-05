import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ingredients } from "../adminSection/adminSectionSlice";

interface Ingredient {
  id: number;
  name: string;
  price: number;
}

export interface customPizzaState {
  ingredients: Array<Ingredient>;
  total: number;
}

const initialState: customPizzaState = {
  ingredients: [],
  total: 0.0,
};

export const customPizzaSlice = createSlice({
  name: "customPizza",
  initialState,
  reducers: {
    addIngredient: (state, action: PayloadAction<Ingredient>) => {
      const ing = action.payload;
      const item = state.ingredients.find((obj) => obj.id === ing.id);
      if (!item)
        return {
          ...state,
          ingredients: [...state.ingredients, action.payload],
          total: state.ingredients.reduce<number>(
            (n, { price }) => +n + +price,
            0
          ),
        };
    },
    addTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
  },
});

export const { addIngredient, addTotal } = customPizzaSlice.actions;

export default customPizzaSlice.reducer;
