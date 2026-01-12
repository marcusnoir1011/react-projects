import type { iState, ActionType } from "../types";

export const AppReducer = (state: iState, action: ActionType) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      return {
        ...state,
        cart: [action.payload, ...state.cart],
      };
    case "REMOVE_ITEM_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    case "ADD_ITEM_TO_ORDER":
      return {
        ...state,
        orders: [action.payload, ...state.orders],
        cart: [],
      };
    case "REMOVE_ITEM_FROM_ORDER":
      return {
        ...state,
        orders: state.orders.filter(
          (order) => order.orderID !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
