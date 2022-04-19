import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const hasOrder = cartCtx.items.length > 0;
  const removeItemFromCartHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const addItemToCartHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItem = cartCtx.items.map((item) => (
    <CartItem
      meal={item}
      key={item.id}
      onRemoveItem={removeItemFromCartHandler.bind(null, item.id)}
      onAddItem={addItemToCartHandler.bind(null, item)}
    />
  ));
  return (
    <Modal onClose={props.onClose}>
      <ul className={classes["cart-items"]}> {cartItem}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasOrder && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
