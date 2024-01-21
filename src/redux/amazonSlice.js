import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  userInfo: null ,
};

export const amazonSlice = createSlice({
  name: "amazon",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quanitity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload)
      item.quanitity++
    },
    decrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload)
      if(item.quanitity === 1) {
        item.quanitity = 1
      }else {
      item.quanitity--
    }
    },

    deleteItemInCart: (state, action) => {
      state.products = state.products.filter((item) => item.id  !== action.payload)
    },
    clearAllItem: (state) => {
      state.products=[]
    }
  },
   
});

export const { addToCart,incrementQuantity, decrementQuantity, deleteItemInCart, clearAllItem } = amazonSlice.actions;
export default amazonSlice.reducer;
