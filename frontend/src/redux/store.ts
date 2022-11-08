import { configureStore } from "@reduxjs/toolkit";

import sectionReducer from "./adminSection/adminSectionSlice";
import orderReducer from "./orderDetails/orderDetails";
import pizzaReducer from "./pizzas/pizzas";
import ingredientReducer from "./ingredients/ingredients";
import customPizzaReducer from "./customPizza/customPizza";
import cartReducer from "./cart/cart";
import orderDataReducer from "./orders/orders";

export const store = configureStore({
  reducer: {
    sectionChange: sectionReducer,
    order: orderReducer,
    pizza: pizzaReducer,
    ingredients: ingredientReducer,
    customPizza: customPizzaReducer,
    cart: cartReducer,
    orderData: orderDataReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
