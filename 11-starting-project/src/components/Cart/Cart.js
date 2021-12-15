import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const hasOrder = cartContext.items.length > 0;
  const addHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };
  const removeHandler = (id) => {
    cartContext.removeItem(id);
  };
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={addHandler.bind(null, item)}
          onRemove={removeHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.onCloseCart}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${cartContext.totalAmount.toFixed(2)}`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        {hasOrder && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
