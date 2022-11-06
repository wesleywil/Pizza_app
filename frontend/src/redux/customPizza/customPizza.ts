import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Ingredient {
  id: number;
  name: string;
  price: number;
}

export interface CustomPizzaState {
  ingredients: Array<Ingredient>;
  total: number;
}

const initialState: CustomPizzaState = {
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
        };
    },
    addTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
  },
});

export const { addIngredient, addTotal } = customPizzaSlice.actions;

export default customPizzaSlice.reducer;
