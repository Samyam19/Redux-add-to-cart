import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../ProductData";

const initialState = {
  cart: [],
  items: ProductData,
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const find = state.cart.findIndex(
        (items) => items.id === action.payload.id
      );
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          console.log(cartTotal);
          console.log(cartItem);
          const { price, quantity } = cartItem;
          console.log(price, quantity);
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((items) => items.id !== action.payload);
    },
    inceaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((items) => {
        if (items.id === action.payload) {
          return { ...items, quantity: items.quantity + 1 };
        }
        return items;
      });
    },
    decreaseItemQuantity: (state, action) => {
        state.cart = state.cart.map((items) => {
          if (items.id === action.payload) {
            return { ...items, quantity: items.quantity - 1 };
          }
          return items;
        });
      },
  },
});

export const { addToCart, getCartTotal, removeItem, inceaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
