import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Pizza } from "../pizzas/pizzas";

interface OrderItems {
  id: number;
  product: Pizza;
  quantity: number;
  total: number;
}

interface Order {
  id?: number;
  profile?: any;
  orderItems: Array<OrderItems>;
  status: string;
  total: number;
}

export interface OrderState {
  orders: Array<Order>;
  status: string;
  error: any;
}

const initialState: OrderState = {
  orders: [],
  status: "idle",
  error: null,
};

export const fetchOrders = createAsyncThunk("orderData/fetchAll", async () => {
  console.log("Fetching Orders...");
  const res = await axios.get("http://localhost:8000/orders/?format=json");
  return res.data;
});

export const createOrder = createAsyncThunk(
  "orderData/createOrder",
  async (data: any) => {
    console.log("Creating new order");
    const res = await axios.post("http://localhost:8000/orders/", data);
    return res.data;
  }
);

export const orderDataSlice = createSlice({
  name: "orderData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrders.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = "suceeded";
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state) => {
        state.error = "error";
      });
  },
});

export default orderDataSlice.reducer;
