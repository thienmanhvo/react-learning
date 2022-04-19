import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.meal.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>${props.meal.price.toFixed(2)}</span>
          <span className={classes.amount}>x {props.meal.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemoveItem}>-</button>
        <button onClick={props.onAddItem}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
