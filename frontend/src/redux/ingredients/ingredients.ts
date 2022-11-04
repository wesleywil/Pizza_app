import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Ingredient {
  id: number;
  name: string;
  price: number;
}

export interface IngredientState {
  ingredients: Array<Ingredient>;
  status: string;
  error: any;
  ingredient: any;
}

const initialState: IngredientState = {
  ingredients: [],
  status: "idle",
  error: null,
  ingredient: null,
};

export const fetchIngredients = createAsyncThunk(
  "ingredients/fetchAll",
  async () => {
    console.log("Fetching Ingredients...");
    const res = await axios.get(
      "http://localhost:8000/products/ingredients/?format=json"
    );
    return res.data;
  }
);

export const ingredientSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {
    IngredientById: (state, action: PayloadAction<number>) => {
      state.ingredient = state.ingredients.find(
        ({ id }) => id === action.payload
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchIngredients.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.status = "succeeded";
          state.ingredients = action.payload;
        }
      )
      .addCase(fetchIngredients.rejected, (state) => {
        state.error = "error";
      });
  },
});

export const { IngredientById } = ingredientSlice.actions;

export default ingredientSlice.reducer;
