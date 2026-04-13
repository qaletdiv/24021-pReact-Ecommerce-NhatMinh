import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import cartReducer from '../features/cart/cartSlice'

// Load persisted cart from localStorage (if any)
let preloadedState = undefined;
try {
  const persisted = JSON.parse(localStorage.getItem('cart'));
  if (persisted) {
    preloadedState = { cart: persisted };
  }
} catch (e) {
  // ignore parse errors
}

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
  preloadedState,
})

// Persist cart slice to localStorage on changes
store.subscribe(() => {
  try {
    const state = store.getState();
    if (state && state.cart) {
      localStorage.setItem('cart', JSON.stringify(state.cart));
    }
  } catch (e) {
    // ignore storage errors
  }
})

export default store
