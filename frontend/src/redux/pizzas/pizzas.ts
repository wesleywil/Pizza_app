import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Pizza {
  id: number;
  name: string;
  picture: string;
  description: string;
  price: number;
}

export interface State {
  pizzas: Array<Pizza>;
  status: string;
  error: any;
  pizza: any;
}

const initialState: State = {
  pizzas: [],
  status: "idle",
  error: null,
  pizza: null,
};

export const fetchPizzas = createAsyncThunk("pizzas/fetchAll", async () => {
  console.log("Fecthing Pizzas");
  const res = await axios.get(
    "http://localhost:8000/products/pizzas/?format=json"
  );
  return res.data;
});

export const pizzaSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    pizzaById: (state, action: PayloadAction<number>) => {
      state.pizza = state.pizzas.find(({ id }) => id === action.payload);
    },
    // Need to create a better filter that don't mutate the pizzas array
    pizzaFilter: (state, action: PayloadAction<string>) => {
      state.pizzas = state.pizzas.filter((item: Pizza) => {
        return item.name.toLowerCase().includes(action.payload.toLowerCase());
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPizzas.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = "succeeded";
        state.pizzas = action.payload;
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.error = "error";
      });
  },
});

export const { pizzaById, pizzaFilter } = pizzaSlice.actions;

export default pizzaSlice.reducer;
