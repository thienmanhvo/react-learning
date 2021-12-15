import { useReducer } from "react";
import CartContext from "./cart-context";

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updeatedItem = state.items
      .concat(action.item)
      .reduce((accumulator, currentValue) => {
        const index = accumulator.findIndex(
          (item) => item.id === currentValue.id
        );
        if (index === -1) {
          accumulator.push(currentValue);
        } else {
          accumulator[index].amount += currentValue.amount;
        }
        return accumulator;
      }, []);
    const totalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return { items: updeatedItem, totalAmount: totalAmount };
  }
  if (action.type === "REMOVE_ITEM") {
  }

  return defaultCartState;
};

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };
  const removeItemToCartHandler = (id) => {
    dispatchCartAction();
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
