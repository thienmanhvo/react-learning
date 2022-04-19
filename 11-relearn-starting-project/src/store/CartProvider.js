import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updeatedItem = [...state.items];
    const index = state.items.findIndex((item) => item.id === action.item.id);
    if (index === -1) {
      updeatedItem.push(action.item);
    } else {
      updeatedItem[index].amount += action.item.amount;
    }
    const totalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return { items: updeatedItem, totalAmount: totalAmount };
  }
  if (action.type === "REMOVE") {
    const index = state.items.findIndex((item) => item.id === action.id);
    let removedList = [...state.items];
    const removedItem = removedList[index];

    if (removedItem.amount > 1) {
      removedList[index].amount--;
    } else {
      removedList.splice(index, 1);
    }
    const totalAmount = state.totalAmount - removedItem.price;
    return {
      items: removedList,
      totalAmount: totalAmount
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
