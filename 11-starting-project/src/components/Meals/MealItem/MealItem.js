import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartContext = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartContext.addItem({ ...props.meal, amount: amount });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>{`$${props.meal.price.toFixed(2)}`}</div>
      </div>
      <MealItemForm id={props.meal.id} onAddToCart={addToCartHandler} />
    </li>
  );
};

export default MealItem;
