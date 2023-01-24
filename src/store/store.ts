import { Product } from "@/lib/data";
import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

type InitialStte = {
  basket: Array<Product>;
};

const initialState = {
  basket: [],
} as InitialStte;

export const basket = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const itemInCart = state.basket.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.basket.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const index = state.basket.findIndex(
        (item) => item.id === action.payload
      );
      if (index === -1) return;
      state.basket[index].quantity++;
    },
    decrementQuantity: (state, action) => {
      const index = state.basket.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index === -1) return;

      if (state.basket[index].quantity === 1) {
        state.basket.splice(index, 1);
      } else {
        state.basket[index].quantity -= 1;
      }
    },
    removeFromBasket: (state, action) => {
      state.basket = state.basket.filter((item) => item.id !== action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    basket: basket.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

export const {
  addToBasket,
  incrementQuantity,
  decrementQuantity,
  removeFromBasket,
} = basket.actions;
