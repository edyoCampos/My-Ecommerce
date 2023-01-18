import { AnyAction } from 'redux';

import { SetCartItems, setIsCartOpen, SetIsCartOpen } from './cart.action';

import { CartItem } from './cart.types';

export type CartState = {
  isCartOpen: boolean;
  cartItems: CartItem[];
};

const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: AnyAction
): CartState => {
  if (SetCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }
  return state;
};
