import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItem = [{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map(
    (item) => <li>{item.name}</li>
  );
  return (
    <Modal onClose={props.onClose}>
      <ul className={classes["cart-items"]}> {cartItem}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$62.48</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
