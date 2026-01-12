import { createContext, useReducer } from "react";

import { AppReducer } from "./AppReducer";
import type { iState, iItem, iOrder } from "../types";

const initialState = {
  cart: [],
  orders: [],
};

interface IGlobalContext extends iState {
  addItemToCart: (item: iItem) => void;
  removeItemFromCart: (itemId: number) => void;
  clearCart: () => void;
  addItemToOrder: (item: iItem) => void;
  removeItemFromOrder: (itemId: number) => void;
}

export const GlobalContext = createContext<IGlobalContext | undefined>(
  undefined
);

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addItemToCart = (item: iItem) => {
    dispatch({
      type: "ADD_ITEM_TO_CART",
      payload: item,
    });
  };

  const removeItemFromCart = (itemId: number) => {
    dispatch({
      type: "REMOVE_ITEM_FROM_CART",
      payload: { id: itemId },
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  const addItemToOrders = (order: iOrder) => {
    dispatch({
      type: "ADD_ITEM_TO_ORDER",
      payload: order,
    });
  };

  const removeItemFromOrders = (orderId: number) => {
    dispatch({
      type: "REMOVE_ITEM_FROM_ORDER",
      payload: { id: orderId },
    });
  };

  const value = {
    cart: state.cart,
    orders: state.orders,
    addItemToCart,
    removeItemFromCart,
    clearCart,
    addItemToOrders,
    removeItemFromOrders,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
