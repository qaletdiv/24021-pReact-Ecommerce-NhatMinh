import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const payload = action.payload;
      // ensure quantity is a positive integer
      const incomingQty = Math.max(1, parseInt(payload.quantity, 10) || 1);
      const existing = state.items.find(i => i.id === payload.id);
      if (existing) {
        existing.quantity = (existing.quantity || 1) + incomingQty;
      } else {
        state.items.push({ ...payload, quantity: incomingQty });
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) {
        // enforce minimum quantity of 1 and integer
        item.quantity = Math.max(1, parseInt(quantity, 10) || 1);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, updateQuantity, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
