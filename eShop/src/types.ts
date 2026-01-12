interface iItem {
  id: number;
  name: string;
  brand: string;
  size?: number;
  color?: string;
  saleDiscount?: number;
  price: number;
  rating?: number;
  image?: string;
}

interface iOrder {
  orderID: number;
  item: iItem[];
}

interface iState {
  orders: iOrder[];
  cart: iItem[];
}

type ActionType =
  | { type: "ADD_ITEM_TO_CART"; payload: iItem }
  | { type: "REMOVE_ITEM_FROM_CART"; payload: { id: number } }
  | { type: "CLEAR_CART" }
  | { type: "ADD_ITEM_TO_ORDER"; payload: iOrder }
  | { type: "REMOVE_ITEM_FROM_ORDER"; payload: { id: number } };

export type { iItem, iOrder, iState, ActionType };
